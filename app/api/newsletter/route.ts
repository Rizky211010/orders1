import { NextRequest, NextResponse } from 'next/server';

// Temporary in-memory storage for newsletter subscriptions
const subscribers: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    // Validation
    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
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

    // Check if email already exists
    const existingSubscriber = subscribers.find(sub => sub.email === email);
    if (existingSubscriber) {
      return NextResponse.json(
        { success: false, error: 'Email already subscribed' },
        { status: 409 }
      );
    }

    const subscriberData = {
      id: Date.now().toString(),
      email,
      name: name || '',
      timestamp: new Date().toISOString(),
      status: 'active',
      source: 'website'
    };

    // Store in memory (temporary)
    subscribers.push(subscriberData);

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      id: subscriberData.id
    });

  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Get all subscribers (for admin use)
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '50');
    const offset = parseInt(url.searchParams.get('offset') || '0');

    const paginatedSubscribers = subscribers
      .filter(sub => sub.status === 'active')
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(offset, offset + limit);

    return NextResponse.json({
      success: true,
      data: paginatedSubscribers,
      total: subscribers.filter(sub => sub.status === 'active').length,
      limit,
      offset
    });

  } catch (error) {
    console.error('Get subscribers error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    const subscriberIndex = subscribers.findIndex(sub => sub.email === email);
    if (subscriberIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Email not found' },
        { status: 404 }
      );
    }

    // Mark as unsubscribed instead of deleting
    subscribers[subscriberIndex].status = 'unsubscribed';
    subscribers[subscriberIndex].unsubscribed_at = new Date().toISOString();

    return NextResponse.json({
      success: true,
      message: 'Successfully unsubscribed from newsletter'
    });

  } catch (error) {
    console.error('Unsubscribe error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}