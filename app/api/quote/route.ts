import { NextRequest, NextResponse } from 'next/server';

// Temporary in-memory storage for project quotes
const quotes: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      company, 
      projectType, 
      budget, 
      timeline, 
      description,
      features 
    } = body;

    // Validation
    if (!name || !email || !projectType || !description) {
      return NextResponse.json(
        { success: false, error: 'Name, email, project type, and description are required' },
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

    const quoteData = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || '',
      company: company || '',
      projectType,
      budget: budget || '',
      timeline: timeline || '',
      description,
      features: features || [],
      timestamp: new Date().toISOString(),
      status: 'pending',
      priority: calculatePriority(budget, projectType)
    };

    // Store in memory (temporary)
    quotes.push(quoteData);

    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully',
      id: quoteData.id,
      estimatedResponse: getEstimatedResponseTime(quoteData.priority)
    });

  } catch (error) {
    console.error('Quote API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '50');
    const offset = parseInt(url.searchParams.get('offset') || '0');
    const status = url.searchParams.get('status');
    const priority = url.searchParams.get('priority');

    let filteredQuotes = quotes;

    if (status) {
      filteredQuotes = filteredQuotes.filter(quote => quote.status === status);
    }

    if (priority) {
      filteredQuotes = filteredQuotes.filter(quote => quote.priority === priority);
    }

    const paginatedQuotes = filteredQuotes
      .sort((a, b) => {
        // Sort by priority first, then by timestamp
        const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
        if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        }
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      })
      .slice(offset, offset + limit);

    return NextResponse.json({
      success: true,
      data: paginatedQuotes,
      total: filteredQuotes.length,
      limit,
      offset,
      summary: {
        total: quotes.length,
        pending: quotes.filter(q => q.status === 'pending').length,
        inProgress: quotes.filter(q => q.status === 'in-progress').length,
        completed: quotes.filter(q => q.status === 'completed').length,
        high: quotes.filter(q => q.priority === 'high').length,
        medium: quotes.filter(q => q.priority === 'medium').length,
        low: quotes.filter(q => q.priority === 'low').length
      }
    });

  } catch (error) {
    console.error('Get quotes error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Helper functions
function calculatePriority(budget: string, projectType: string): string {
  const highValueProjects = ['e-commerce', 'enterprise', 'mobile-app'];
  const highBudgets = ['50k+', '100k+', 'enterprise'];
  
  if (highValueProjects.includes(projectType) || highBudgets.includes(budget)) {
    return 'high';
  }
  
  if (projectType === 'landing-page' || budget === '5k-10k') {
    return 'low';
  }
  
  return 'medium';
}

function getEstimatedResponseTime(priority: string): string {
  switch (priority) {
    case 'high':
      return '2-4 hours';
    case 'medium':
      return '4-8 hours';
    case 'low':
      return '1-2 business days';
    default:
      return '24 hours';
  }
}