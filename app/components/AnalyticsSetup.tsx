// This component initializes Google Analytics 4 on the client side
// Add to app/layout.tsx after the <html> tag opens

'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (command: string, id?: string, options?: Record<string, unknown>) => void;
    dataLayer: Array<Record<string, unknown>>;
  }
}

export function Analytics() {
  useEffect(() => {
    // Initialize GA4
    const GA_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 ID

    // Load GA4 script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args as Record<string, unknown>);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID);

    // Track page views
    trackEvent('page_view', {
      page_path: window.location.pathname,
      page_title: document.title,
    });
  }, []);

  return null;
}

// Event tracking helper
export function trackEvent(eventName: string, eventData?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventData);
  }
}

// Track CTA clicks
export function trackCTAClick(ctaName: string) {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_type: 'button',
  });
}

// Track form submissions
export function trackFormSubmission(formName: string) {
  trackEvent('form_submit', {
    form_name: formName,
  });
}

// Track case study views
export function trackCaseStudyView(projectName: string) {
  trackEvent('case_study_view', {
    project_name: projectName,
  });
}

// Track free audit applications
export function trackAuditApplication() {
  trackEvent('audit_application');
}

// Track project brief submissions
export function trackProjectBriefSubmit() {
  trackEvent('project_brief_submit');
}
