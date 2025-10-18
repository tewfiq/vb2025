// Google Analytics tracking utilities

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Common event tracking functions
export const trackRegistration = () => {
  event({
    action: 'registration_start',
    category: 'engagement',
    label: 'Workshop Registration',
  });
};

export const trackRegistrationComplete = () => {
  event({
    action: 'registration_complete',
    category: 'conversion',
    label: 'Workshop Registration Complete',
  });
};

export const trackButtonClick = (buttonName: string) => {
  event({
    action: 'button_click',
    category: 'engagement',
    label: buttonName,
  });
};

export const trackSectionView = (sectionName: string) => {
  event({
    action: 'section_view',
    category: 'engagement',
    label: sectionName,
  });
};

// E-commerce event tracking for payment CTAs
export const trackPaymentCTAClick = ({
  planName,
  price,
  currency = 'EUR',
}: {
  planName: string;
  price: number;
  currency?: string;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'begin_checkout', {
      currency: currency,
      value: price,
      items: [
        {
          item_id: planName.toLowerCase().replace(/\s+/g, '_'),
          item_name: planName,
          price: price,
          quantity: 1,
        },
      ],
    });
  }
};

// Track consultation/booking CTAs
export const trackConsultationClick = (source: string) => {
  event({
    action: 'consultation_click',
    category: 'engagement',
    label: source,
  });
};

// Track general CTA clicks with more context
export const trackCTAClick = (ctaName: string, location: string) => {
  event({
    action: 'cta_click',
    category: 'engagement',
    label: `${ctaName} - ${location}`,
  });
};