import Head from 'next/head';
import AppData from "@data/app.json";

const SEO = ({ title, description, keywords, ogImage, ogType = "website", canonical }) => {
  const siteName = AppData.settings.siteName;
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const metaDescription = description || "Elevate your online presence with The Livingstone Solution. We specialize in enterprise web development, app development, and software development services across Washington D.C. and the DMV area.";
  const metaKeywords = keywords || "Software Development Washington DC, Web Development DMV, App Development Washington D.C., Digital Marketing, Enterprise Architecture";

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="author" content="LivingStoneSolution" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
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
                "@id": "https://solution.thelivingstonefoundation.com/#website",
                "url": "https://solution.thelivingstonefoundation.com/",
                "name": siteName,
                "description": metaDescription,
                "publisher": {
                  "@id": "https://solution.thelivingstonefoundation.com/#organization"
                }
              },
              {
                "@type": "Organization",
                "@id": "https://solution.thelivingstonefoundation.com/#organization",
                "name": "The Livingstone Solution",
                "url": "https://solution.thelivingstonefoundation.com/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://solution.thelivingstonefoundation.com/img/photo/logo.png"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-540-998-9766",
                  "contactType": "Customer Service",
                  "email": "Oliyad@thelivingstonefoundation.com",
                  "areaServed": "US",
                  "availableLanguage": "English"
                }
              }
            ]
          })
        }}
      />
    </Head>
  );
};

export default SEO;
