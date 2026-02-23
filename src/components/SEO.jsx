import Head from 'next/head';
import AppData from "@data/app.json";

const SEO = ({ title, description, keywords, ogImage, ogType = "website" }) => {
  const siteName = AppData.settings.siteName;
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const metaDescription = description || "Elevate your online presence with Living Stone Solution. We specialize in web development, app development, and Software Development services.";
  const metaKeywords = keywords || "Software Development, Web Development, App Development, Digital Marketing, Branding";

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
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
    </Head>
  );
};

export default SEO;
