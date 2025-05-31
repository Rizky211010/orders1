import { NextRequest, NextResponse } from 'next/server';

// Type definitions for analytics data
interface AnalyticsData {
  pageViews: any[];
  events: any[];
  visitors: any[];
  performance: any[];
}

// Temporary in-memory storage for analytics
const analytics: AnalyticsData = {
  pageViews: [],
  events: [],
  visitors: [],
  performance: []
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json(
        { success: false, error: 'Missing type or data in request' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const id = Date.now().toString();

    switch (type) {
      case 'pageview':
        analytics.pageViews.push({
          id,
          ...data,
          timestamp
        });
        break;

      case 'event':
        analytics.events.push({
          id,
          ...data,
          timestamp
        });
        break;

      case 'visitor':
        analytics.visitors.push({
          id,
          ...data,
          timestamp
        });
        break;

      case 'performance':
        analytics.performance.push({
          id,
          ...data,
          timestamp
        });
        break;

      default:
        return NextResponse.json(
          { success: false, error: 'Invalid analytics type' },
          { status: 400 }
        );
    }

    return NextResponse.json({
      success: true,
      message: 'Analytics data recorded'
    });

  } catch (error) {
    console.error('Analytics POST error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const timeRange = url.searchParams.get('range') || '7d';
    const metric = url.searchParams.get('metric');

    const now = new Date();    const ranges: Record<string, Date> = {
      '1d': new Date(now.getTime() - 24 * 60 * 60 * 1000),
      '7d': new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000),
      '30d': new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000),
      '90d': new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000)
    };

    const fromDate = ranges[timeRange] || ranges['7d'];

    // Filter data by time range
    const filteredPageViews = analytics.pageViews.filter(
      pv => new Date(pv.timestamp) >= fromDate
    );
    const filteredEvents = analytics.events.filter(
      ev => new Date(ev.timestamp) >= fromDate
    );
    const filteredVisitors = analytics.visitors.filter(
      v => new Date(v.timestamp) >= fromDate
    );

    // Return specific metric if requested
    if (metric) {
      switch (metric) {
        case 'pageviews':
          return NextResponse.json({
            success: true,
            data: filteredPageViews,
            total: filteredPageViews.length
          });
        case 'events':
          return NextResponse.json({
            success: true,
            data: filteredEvents,
            total: filteredEvents.length
          });
        case 'visitors':
          return NextResponse.json({
            success: true,
            data: filteredVisitors,
            total: filteredVisitors.length
          });
      }
    }

    // Return comprehensive analytics
    const stats = {
      overview: {
        totalPageViews: filteredPageViews.length,
        totalEvents: filteredEvents.length,
        uniqueVisitors: new Set(filteredVisitors.map(v => v.sessionId)).size,
        bounceRate: calculateBounceRate(filteredPageViews),
        averageSessionDuration: calculateAverageSessionDuration(filteredVisitors)
      },
      topPages: getTopPages(filteredPageViews),
      topEvents: getTopEvents(filteredEvents),
      traffic: getTrafficByDay(filteredPageViews, timeRange),
      devices: getDeviceStats(filteredVisitors),
      referrers: getReferrerStats(filteredVisitors),
      performance: getPerformanceStats()
    };

    return NextResponse.json({
      success: true,
      data: stats,
      timeRange,
      fromDate: fromDate.toISOString(),
      toDate: now.toISOString()
    });

  } catch (error) {
    console.error('Analytics GET error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Helper functions
function calculateBounceRate(pageViews: any[]): number {
  if (pageViews.length === 0) return 0;
  const sessions: Record<string, number> = {};
  
  pageViews.forEach(pv => {
    if (!sessions[pv.sessionId]) {
      sessions[pv.sessionId] = 0;
    }
    sessions[pv.sessionId]++;
  });

  const singlePageSessions = Object.values(sessions).filter(count => count === 1).length;
  const totalSessions = Object.keys(sessions).length;
  
  return totalSessions > 0 ? Math.round((singlePageSessions / totalSessions) * 100) : 0;
}

function calculateAverageSessionDuration(visitors: any[]): number {
  if (visitors.length === 0) return 0;
  
  const sessions: Record<string, Date[]> = {};
  visitors.forEach(v => {
    if (!sessions[v.sessionId]) {
      sessions[v.sessionId] = [];
    }
    sessions[v.sessionId].push(new Date(v.timestamp));
  });

  let totalDuration = 0;
  let sessionCount = 0;

  Object.values(sessions).forEach((timestamps: Date[]) => {
    if (timestamps.length > 1) {
      const sorted = timestamps.sort((a, b) => a.getTime() - b.getTime());
      const duration = sorted[sorted.length - 1].getTime() - sorted[0].getTime();
      totalDuration += duration;
      sessionCount++;
    }
  });

  return sessionCount > 0 ? Math.round(totalDuration / sessionCount / 1000) : 0; // in seconds
}

function getTopPages(pageViews: any[]) {
  const pageCounts: Record<string, number> = {};
  pageViews.forEach(pv => {
    pageCounts[pv.page] = (pageCounts[pv.page] || 0) + 1;
  });

  return Object.entries(pageCounts)
    .map(([page, views]) => ({ page, views }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 10);
}

function getTopEvents(events: any[]) {
  const eventCounts: Record<string, number> = {};
  events.forEach(ev => {
    const key = `${ev.category}_${ev.action}`;
    eventCounts[key] = (eventCounts[key] || 0) + 1;
  });

  return Object.entries(eventCounts)
    .map(([event, count]) => ({ event, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
}

function getTrafficByDay(pageViews: any[], timeRange: string) {
  const days = parseInt(timeRange.replace('d', ''));
  const dailyData: Record<string, number> = {};

  // Initialize all days with 0
  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateKey = date.toISOString().split('T')[0];
    dailyData[dateKey] = 0;
  }

  // Count page views by day
  pageViews.forEach(pv => {
    const dateKey = pv.timestamp.split('T')[0];
    if (dailyData.hasOwnProperty(dateKey)) {
      dailyData[dateKey]++;
    }
  });

  return Object.entries(dailyData)
    .map(([date, views]) => ({ date, views }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

function getDeviceStats(visitors: any[]) {
  const deviceCounts: Record<string, number> = {};
  visitors.forEach(v => {
    if (v.device) {
      deviceCounts[v.device] = (deviceCounts[v.device] || 0) + 1;
    }
  });

  return Object.entries(deviceCounts)
    .map(([device, count]) => ({ device, count }))
    .sort((a, b) => b.count - a.count);
}

function getReferrerStats(visitors: any[]) {
  const referrerCounts: Record<string, number> = {};
  visitors.forEach(v => {
    const referrer = v.referrer || 'Direct';
    referrerCounts[referrer] = (referrerCounts[referrer] || 0) + 1;
  });

  return Object.entries(referrerCounts)
    .map(([referrer, count]) => ({ referrer, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
}

function getPerformanceStats() {
  if (analytics.performance.length === 0) {
    return {
      averageLoadTime: 0,
      averageFCP: 0,
      averageLCP: 0,
      averageTTFB: 0
    };
  }

  const total = analytics.performance.length;
  const sum = analytics.performance.reduce((acc, perf) => ({
    loadTime: acc.loadTime + (perf.loadTime || 0),
    fcp: acc.fcp + (perf.fcp || 0),
    lcp: acc.lcp + (perf.lcp || 0),
    ttfb: acc.ttfb + (perf.ttfb || 0)
  }), { loadTime: 0, fcp: 0, lcp: 0, ttfb: 0 });

  return {
    averageLoadTime: Math.round(sum.loadTime / total),
    averageFCP: Math.round(sum.fcp / total),
    averageLCP: Math.round(sum.lcp / total),
    averageTTFB: Math.round(sum.ttfb / total)
  };
}