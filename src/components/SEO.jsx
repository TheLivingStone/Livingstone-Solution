import Head from 'next/head';
import AppData from "@data/app.json";
import { SITE_URL, COMPANY_URL, ORG_ID } from "@library/site";

const BASE_URL = SITE_URL;
const OTHER_ORIGINS = ['https://thelivingstonesolution.com', 'https://www.thelivingstonesolution.com'];
const DEFAULT_OG_IMAGE = `${BASE_URL}/img/photo/logo.png`;

// The four service pillars, published as the Organization's offer catalog.
const PILLARS = [
  { name: "AI Agents", url: `${BASE_URL}/services/ai-agents`, description: "Custom AI agents, workflow automation with human oversight, private AI on your data, and government AI solutions built per department." },
  { name: "Software Development", url: `${BASE_URL}/services/software`, description: "Web platforms, mobile apps, AWS and Azure cloud, legacy modernization and Section 508-compliant digital services." },
  { name: "Marketing", url: `${BASE_URL}/services/marketing`, description: "Generative Engine Optimization (GEO), content creation, and video and media production." },
  { name: "AI Training", url: `${BASE_URL}/ai-training`, description: "Hands-on AI workshops, custom AI modules, and workforce AI training for companies and government." },
];

const normalizeCanonical = (canonical) => {
  if (!canonical) return null;
  if (canonical.startsWith('http')) {
    const origin = OTHER_ORIGINS.find((o) => canonical.startsWith(o));
    return origin ? BASE_URL + canonical.slice(origin.length) : canonical;
  }
  return `${BASE_URL}${canonical.startsWith('/') ? '' : '/'}${canonical}`;
};

const SEO = ({ title, description, keywords, ogImage = DEFAULT_OG_IMAGE, ogType = "website", canonical, noIndex = false }) => {
  const siteName = AppData.settings.siteName;
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const metaDescription = description || "Elevate your online presence with The Livingstone Solution. We specialize in enterprise web development, app development, and software development services across Washington D.C. and the DMV area.";
  const metaKeywords = keywords || "Software Development Washington DC, Web Development DMV, App Development Washington D.C., Digital Marketing, Enterprise Architecture";
  const canonicalUrl = normalizeCanonical(canonical);

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <meta name="author" content="LivingStoneSolution" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      {ogImage && <meta property="twitter:image" content={ogImage} />}

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": `${BASE_URL}/#website`,
                "url": `${BASE_URL}/`,
                "name": siteName,
                "description": metaDescription,
                "publisher": {
                  "@id": ORG_ID
                }
              },
              {
                "@type": "Organization",
                "@id": ORG_ID,
                "name": "The Livingstone Solution",
                "alternateName": ["LivingStoneSolution Technologies", "Livingstone Solution"],
                "url": `${COMPANY_URL}/`,
                "logo": {
                  "@type": "ImageObject",
                  "url": `${BASE_URL}/img/photo/logo.png`
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-540-998-9766",
                  "contactType": "Customer Service",
                  "email": "Oliyad@thelivingstonesolution.com",
                  "areaServed": ["US", "Worldwide"],
                  "availableLanguage": "English"
                },
                "identifier": [
                  { "@type": "PropertyValue", "propertyID": "UEI", "value": "GGUGKJTEMU73" },
                  { "@type": "PropertyValue", "propertyID": "CAGE", "value": "16SZ9" }
                ],
                "knowsAbout": [
                  "AI agents", "Workflow automation", "Government AI solutions",
                  "Software development", "Legacy modernization", "Section 508 compliance",
                  "Generative Engine Optimization", "Content creation", "Video production",
                  "AI training", "Custom AI modules", "Workforce AI training"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Services",
                  "itemListElement": PILLARS.map((pillar) => ({
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": pillar.name,
                      "description": pillar.description,
                      "url": pillar.url
                    }
                  }))
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Washington",
                  "addressRegion": "DC",
                  "addressCountry": "US"
                },
                "sameAs": [
                  "https://geoagency.thelivingstonefoundation.com",
                  "https://marketingfirm.thelivingstonesolution.com",
                  "https://linkedin.com/in/oliyad-deyasa",
                  "https://linkedin.com/in/blen-Anteneh-1"
                ],
                "subOrganization": [
                  {
                    "@type": "Organization",
                    "name": "Livingstone Government",
                    "url": "https://solution.thelivingstonefoundation.com",
                    "description": "Government AI solutions, AI agents, software, marketing and AI training for companies and government departments."
                  },
                  {
                    "@type": "Organization",
                    "name": "Livingstone GEO Agency",
                    "url": "https://geoagency.thelivingstonefoundation.com",
                    "description": "Generative Engine Optimization, AI search visibility."
                  },
                  {
                    "@type": "Organization",
                    "name": "Livingstone Marketing Firm",
                    "url": "https://marketingfirm.thelivingstonesolution.com",
                    "description": "Strategic brand formulation and growth initiatives."
                  }
                ],
                "hasCredential": [
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "Certified Business Enterprise (CBE)",
                    "credentialCategory": "Government Business Certification",
                    "recognizedBy": {
                      "@type": "GovernmentOrganization",
                      "name": "District of Columbia Department of Small and Local Business Development",
                      "url": "https://dslbd.dc.gov"
                    },
                    "url": `${BASE_URL}/certifications`
                  }
                ]
              }
            ]
          })
        }}
      />
    </Head>
  );
};

export default SEO;
