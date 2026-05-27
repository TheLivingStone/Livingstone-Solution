/**
 * PageSchema — page-level JSON-LD emitter
 *
 * Emits a single <script type="application/ld+json"> per page that contains
 * only the page-specific schema blocks (Service, FAQPage, BreadcrumbList,
 * Article, Offer). The global Organization + WebSite graph is already emitted
 * by SEO.jsx on every page; this component MUST NOT duplicate it.
 *
 * All @id values reference the canonical Organization already defined in
 * SEO.jsx as "https://thelivingstonesolution.com/#organization".
 *
 * Props
 * ─────
 * @param {object}   service      - Service block props (required on service pages)
 *   @param {string}   service.id           - Absolute @id for this Service entity
 *   @param {string}   service.name         - Service name (matches page H1 or H2)
 *   @param {string}   service.description  - Matches answer-first definition paragraph
 *   @param {string}   service.serviceType  - Controlled vocabulary term
 *   @param {string[]} service.areaServed   - Array of place names
 *   @param {object[]} [service.offers]     - Array of Offer objects (pricing pages only)
 *
 * @param {object[]}  faq          - Array of {question, answer} pairs (FAQPage)
 *
 * @param {object[]}  breadcrumb   - Array of {name, url} in position order
 *
 * @param {object}   [article]     - Article block (optional; explainer pages only)
 *   @param {string}   article.headline
 *   @param {string}   article.url
 *   @param {string}   article.datePublished  - ISO 8601
 *   @param {string}   article.dateModified   - ISO 8601
 *   @param {string}   article.authorName
 *   @param {string}   article.authorUrl
 *   @param {string}   article.description
 */

import Head from "next/head";

const ORG_ID = "https://thelivingstonesolution.com/#organization";

const PageSchema = ({ service, faq, breadcrumb, article }) => {
  const graph = [];

  /* ── 1. BreadcrumbList ────────────────────────────────────────────── */
  if (breadcrumb && breadcrumb.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${service?.id || article?.url || breadcrumb[breadcrumb.length - 1]?.url}#breadcrumb`,
      "itemListElement": breadcrumb.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url,
      })),
    });
  }

  /* ── 2. Service (+ nested Offers when present) ───────────────────── */
  if (service) {
    const serviceBlock = {
      "@type": "Service",
      "@id": service.id,
      "name": service.name,
      "description": service.description,
      "serviceType": service.serviceType,
      "provider": { "@id": ORG_ID },
      "areaServed": service.areaServed,
      "url": service.url || service.id.replace(/#.*/, ""),
    };

    if (service.offers && service.offers.length > 0) {
      serviceBlock["hasOffer"] = service.offers.map((o) => {
        const offer = {
          "@type": "Offer",
          "@id": o.id,
          "name": o.name,
          "description": o.description,
          "itemOffered": { "@id": service.id },
          "seller": { "@id": ORG_ID },
        };
        /* Only add price fields when a real numeric/string price is supplied */
        if (o.price !== undefined && o.price !== null) {
          offer["price"] = o.price;
          offer["priceCurrency"] = o.priceCurrency || "USD";
          offer["priceSpecification"] = {
            "@type": "UnitPriceSpecification",
            "price": o.price,
            "priceCurrency": o.priceCurrency || "USD",
            "unitText": o.unitText || "MON",
          };
        }
        if (o.availability) {
          offer["availability"] = o.availability;
        }
        return offer;
      });
    }

    graph.push(serviceBlock);
  }

  /* ── 3. FAQPage ───────────────────────────────────────────────────── */
  if (faq && faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${service?.url || article?.url}#faq`,
      "mainEntity": faq.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    });
  }

  /* ── 4. Article (explainer / methodology pages only) ─────────────── */
  if (article) {
    graph.push({
      "@type": "Article",
      "@id": `${article.url}#article`,
      "headline": article.headline,
      "description": article.description,
      "url": article.url,
      "mainEntityOfPage": { "@id": article.url },
      "datePublished": article.datePublished,
      "dateModified": article.dateModified,
      "author": {
        "@type": "Person",
        "name": article.authorName,
        "url": article.authorUrl,
      },
      "publisher": { "@id": ORG_ID },
    });
  }

  if (graph.length === 0) return null;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": graph,
          }),
        }}
      />
    </Head>
  );
};

export default PageSchema;
