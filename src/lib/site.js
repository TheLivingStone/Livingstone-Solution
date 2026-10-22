// Public URL of this site. Every canonical, sitemap entry and page-level schema
// URL is built from this, so moving the site to another domain is one env var.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://solution.thelivingstonefoundation.com').replace(/\/$/, '');

// The company entity lives at the commercial site; this government site
// references it rather than claiming to be it.
export const COMPANY_URL = 'https://thelivingstonesolution.com';
export const ORG_ID = `${COMPANY_URL}/#organization`;

// 30-minute consultation on Cal.com, used by booking CTAs.
export const BOOKING_URL = 'https://cal.com/oliyad-deyasa-oiiybc/30min';
