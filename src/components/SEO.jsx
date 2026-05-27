import Head from 'next/head';
import AppData from "@data/app.json";

const BASE_URL = 'https://thelivingstonesolution.com';
const OLD_DOMAIN = 'solution.thelivingstonefoundation.com';

const normalizeCanonical = (canonical) => {
  if (!canonical) return null;
  if (canonical.startsWith('http')) {
    return canonical.replace(`https://${OLD_DOMAIN}`, BASE_URL).replace(`http://${OLD_DOMAIN}`, BASE_URL);
  }
  return `${BASE_URL}${canonical.startsWith('/') ? '' : '/'}${canonical}`;
};

const SEO = ({ title, description, keywords, ogImage, ogType = "website", canonical, noIndex = false }) => {
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
                  "@id": `${BASE_URL}/#organization`
                }
              },
              {
                "@type": "Organization",
                "@id": `${BASE_URL}/#organization`,
                "name": "The Livingstone Solution",
                "alternateName": ["LivingStoneSolution Technologies", "Livingstone Solution"],
                "url": `${BASE_URL}/`,
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
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Washington",
                  "addressRegion": "DC",
                  "addressCountry": "US"
                },
                "sameAs": [
                  "https://thelivingstonesolution.com",
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
                    "description": "Federal/state missions, 508-compliant, secure solutions."
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
