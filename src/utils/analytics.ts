/**
 * Feature 19: Privacy-Friendly Local Analytics
 * Zero-cookie, GDPR compliant client-side performance and telemetry logger.
 */

export interface AnalyticsEvent {
  event: string;
  category?: string;
  timestamp: string;
  path?: string;
  metadata?: Record<string, string | number | boolean>;
}

const STORAGE_KEY = 'mck_analytics_events';

export const trackEvent = (event: string, metadata?: Record<string, string | number | boolean>) => {
  try {
    const record: AnalyticsEvent = {
      event,
      timestamp: new Date().toISOString(),
      path: window.location.hash || '#home',
      metadata
    };

    const existing: AnalyticsEvent[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    existing.push(record);
    // keep max 50 events locally
    if (existing.length > 50) existing.shift();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch {
    // Fail silently in restricted sandbox
  }
};

export const getAnalyticsSummary = () => {
  try {
    const existing: AnalyticsEvent[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return {
      totalInteractions: existing.length,
      events: existing,
      sessionStart: existing[0]?.timestamp || new Date().toISOString()
    };
  } catch {
    return { totalInteractions: 0, events: [], sessionStart: new Date().toISOString() };
  }
};
