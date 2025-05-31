import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Temporary in-memory storage (for development)
const contacts: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const contactData = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || '',
      company: company || '',
      service: service || '',
      message,
      timestamp: new Date().toISOString(),
      status: 'new'
    };

    // Store in memory (temporary)
    contacts.push(contactData);

    // Send email notification (optional - requires SMTP setup)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        await sendEmailNotification(contactData);
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't fail the API if email fails
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      id: contactData.id
    });

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Get all contacts (for admin use)
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '50');
    const offset = parseInt(url.searchParams.get('offset') || '0');

    const paginatedContacts = contacts
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(offset, offset + limit);

    return NextResponse.json({
      success: true,
      data: paginatedContacts,
      total: contacts.length,
      limit,
      offset
    });

  } catch (error) {
    console.error('Get contacts error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Email notification function
async function sendEmailNotification(contactData: any) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return;
  }

  const transporter = nodemailer.createTransporter({
    service: 'gmail', // or your preferred email service
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
    subject: `New Contact Form Submission - ${contactData.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Phone:</strong> ${contactData.phone}</p>
      <p><strong>Company:</strong> ${contactData.company}</p>
      <p><strong>Service:</strong> ${contactData.service}</p>
      <p><strong>Message:</strong></p>
      <p>${contactData.message}</p>
      <p><strong>Submitted:</strong> ${new Date(contactData.timestamp).toLocaleString()}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}