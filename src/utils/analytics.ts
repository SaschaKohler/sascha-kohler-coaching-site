// utils/analytics.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track specific events for SEO monitoring
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific events for Online Coaching tracking
export const trackOnlineBooking = (type: 'started' | 'completed') => {
  event({
    action: type === 'started' ? 'booking_started' : 'booking_completed',
    category: 'Online Coaching',
    label: 'Online Booking Process',
  });
};

export const trackVideoCallClick = () => {
  event({
    action: 'video_call_click',
    category: 'Online Coaching',
    label: 'Video Call CTA',
  });
};

export const trackFAQInteraction = (question: string) => {
  event({
    action: 'faq_opened',
    category: 'Online Coaching',
    label: question,
  });
};

export const trackPhoneClick = () => {
  event({
    action: 'phone_click',
    category: 'Contact',
    label: 'Direct Phone Call',
  });
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: any
    ) => void;
  }
}