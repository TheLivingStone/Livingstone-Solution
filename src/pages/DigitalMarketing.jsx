import { getSortedProjectsData } from "@library/projects";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import React from "react";
import SEO from "@components/SEO";
import ExpertNote from "@components/ExpertNote";
import Link from "next/link";
import PageSchema from "@components/PageSchema";

/* ─── Digital Marketing — page-level schema data ────────────────────────────
 * The "How quickly will I see results" FAQ answer is reproduced as plain text
 * (HTML stripped) because schema.org Answer.text is a plain-text field.
 * The nested <ul> bullet content is flattened into the answer string.
 * No LivingStone prices are asserted — only industry benchmarks appear on-page.
 * ──────────────────────────────────────────────────────────────────────────*/
const DM_SERVICE = {
  id: "https://thelivingstonesolution.com/DigitalMarketing#service",
  url: "https://thelivingstonesolution.com/DigitalMarketing",
  name: "Digital Marketing",
  serviceType: "Digital Marketing",
  description:
    "LivingStoneSolution Technologies provides digital marketing services covering search engine optimization (SEO), generative engine optimization (GEO), paid media management, content strategy, and analytics reporting. Services are delivered to startups, enterprises, and government-adjacent organizations operating across traditional search, AI-generated answer engines, and paid media channels.",
  areaServed: [
    "Washington, D.C.",
    "Chicago, IL",
    "New York, NY",
    "United States",
    "Worldwide",
  ],
};

const DM_FAQ = [
  {
    question: "What is the difference between SEO and GEO?",
    answer:
      "Search Engine Optimization (SEO) is the practice of improving a site's visibility in traditional search engine results pages (Google and Bing). Generative Engine Optimization (GEO) extends that work into AI answer engines such as ChatGPT, Perplexity, Gemini, and Google AI Overviews, where users receive a single synthesized answer instead of a ranked list of links. The two practices overlap in technical foundations (schema, extractability, authority) but differ in success metrics and off-site tactics.",
  },
  {
    question: "Do you handle paid media in addition to organic SEO?",
    answer:
      "Yes. LivingStoneSolution runs paid campaigns on Google Ads, Bing Ads, LinkedIn, and Meta. Paid and organic are coordinated under a single scorecard so budget can shift between channels based on measured yield.",
  },
  {
    question: "How quickly will I see results from digital marketing?",
    answer:
      "Results timelines vary by channel. Paid media (PPC): measurable impressions, clicks, and leads typically begin within the first 30 days of campaign launch. SEO (organic search): Google's own guidance states that in most cases 'SEO will need four months to a year to help your business first implement improvements and then see the potential benefit.' Industry research indicates that meaningful ranking movement is typically visible at the 3–6 month mark, with compounding growth from 6–12 months (Search Engine Land, May 2026). GEO (AI-engine visibility): movement in AI-generated answer citations is typically observed beginning at the 3-month mark, with full multi-engine results over 6–9 months.",
  },
  {
    question:
      "Can you work with government or regulated-industry clients?",
    answer:
      "Yes. Digital marketing for federal, state, and regulated clients is delivered under the Livingstone Government division's compliance framework, including FedRAMP-relevant tooling and 508-accessible content standards.",
  },
  {
    question: "Where is the marketing team based?",
    answer:
      "The core team is headquartered in Washington, D.C., with team members in Chicago, IL and New York, NY. LivingStoneSolution serves clients nationally and accepts global remote engagements.",
  },
];

const DM_BREADCRUMB = [
  { name: "Home", url: "https://thelivingstonesolution.com/" },
  { name: "Digital Marketing", url: "https://thelivingstonesolution.com/DigitalMarketing" },
];

// Slider is client-only; primary content is server-rendered above it
const ProjectsSlider = dynamic(() => import("@components/sliders/Projects"), { ssr: false });

const DigitalMarketing = (props) => {
  return (
    <Layouts>
      <SEO
        title="Digital Marketing Services — SEO, GEO, Paid Media & Content | LivingStoneSolution"
        description="LivingStoneSolution Technologies provides digital marketing services including SEO, generative engine optimization (GEO), paid media, content strategy, and analytics. Washington, D.C.-based, serving clients nationally and globally."
        keywords="Digital Marketing, SEO, Generative Engine Optimization, GEO, PPC, Social Media Marketing, Content Marketing, Washington DC"
        canonical="https://thelivingstonesolution.com/DigitalMarketing"
      />
      <PageSchema
        service={DM_SERVICE}
        faq={DM_FAQ}
        breadcrumb={DM_BREADCRUMB}
      />

      {/* ── ANSWER-FIRST HERO (server-rendered, extraction-first) ── */}
      <section className="container mil-p-120-90">
        <div className="row justify-content-center">
          <div className="col-lg-10">

            <h1 className="mil-mb-30">
              Digital Marketing Services in Washington, D.C.
            </h1>

            {/* Answer-first definition — 40-60 words, extracted by LLMs */}
            <p className="mil-text mil-mb-30">
              LivingStoneSolution Technologies provides digital marketing services
              covering search engine optimization (SEO), generative engine optimization
              (GEO), paid media management, content strategy, and analytics reporting.
              Services are delivered to startups, enterprises, and government-adjacent
              organizations operating across traditional search, AI-generated answer
              engines, and paid media channels.
            </p>

            {/* QUOTE SLOT QS-03 — Deborah Wondmu (primary) on multi-channel coordination */}
            <ExpertNote
              slotId="QS-03"
              quote={null}
              smeName="Deborah Wondmu"
              smeRole="Head of Contracting"
              smeLocation="New York, NY"
            />

            <div className="mil-divider mil-mb-60" />

            {/* ── WHAT WE OFFER ── */}
            <h2 className="mil-mb-20">What We Offer</h2>
            <p className="mil-text mil-mb-20">
              Digital marketing at LivingStoneSolution covers five core practice areas.
              Engagements typically combine two or more, sequenced to match the client&rsquo;s
              audience, channel mix, and growth stage. Generative engine optimization (GEO)
              is offered both as a standalone service and as a layer on top of traditional SEO.
            </p>
            <ul className="mil-mb-40">
              <li className="mil-mb-10">
                <strong>Search Engine Optimization (SEO)</strong> — technical SEO audits,
                content strategy, on-page optimization, and link building for organic
                visibility on Google and Bing
              </li>
              <li className="mil-mb-10">
                <strong>Generative Engine Optimization (GEO)</strong> — site, content,
                schema, and off-site authority work that makes a brand citable inside
                ChatGPT, Perplexity, Gemini, and Google AI Overviews. Delivered by
                {" "}<Link href="/geo-ai-visibility" className="mil-link mil-accent">Livingstone GEO Agency</Link>
              </li>
              <li className="mil-mb-10">
                <strong>Paid media (PPC and social ads)</strong> — Google Ads, Bing Ads,
                LinkedIn, and Meta campaign setup, creative production, and ongoing
                management
              </li>
              <li className="mil-mb-10">
                <strong>Content strategy and production</strong> — editorial calendar,
                long-form articles, landing pages, and video scripts aligned to buyer
                journey stages
              </li>
              <li className="mil-mb-10">
                <strong>Analytics and reporting</strong> — GA4, Search Console, Bing
                Webmaster Tools, and custom dashboards mapped to revenue outcomes
              </li>
            </ul>

            {/* ── HOW IT WORKS ── */}
            <h2 className="mil-mb-20">How It Works</h2>
            <p className="mil-text mil-mb-20">
              Digital marketing engagements follow a five-phase delivery cycle that
              repeats on a quarterly cadence. Each phase has a defined output that
              feeds the next, and clients receive monthly performance reporting
              against the agreed scorecard.
            </p>
            <ol className="mil-mb-40">
              <li className="mil-mb-10">
                <strong>Audit and benchmark</strong> — current visibility, traffic,
                conversion, and AI-citation status across search and answer engines
              </li>
              <li className="mil-mb-10">
                <strong>Strategy and scorecard definition</strong> — channel mix,
                target audience segments, KPIs, and the monthly reporting scorecard
              </li>
              <li className="mil-mb-10">
                <strong>Implementation sprints</strong> — content production, technical
                fixes, ad campaigns, and schema or authority work shipped in scoped sprints
              </li>
              <li className="mil-mb-10">
                <strong>Measurement and iteration</strong> — performance review against
                scorecard; reallocate budget and effort to highest-yield channels
              </li>
              <li className="mil-mb-10">
                <strong>Quarterly recalibration</strong> — re-audit, re-benchmark, and
                adjust the strategy and scorecard for the next quarter
              </li>
            </ol>

            {/* ── WHAT'S INCLUDED ── */}
            <h2 className="mil-mb-20">What&rsquo;s Included</h2>
            <p className="mil-text mil-mb-20">
              The table below shows what is included in a standard digital marketing
              engagement. Items marked &ldquo;separate scope&rdquo; are available as add-ons or
              delivered by a sister division.
            </p>
            <table className="mil-mb-40" style={{width:"100%", borderCollapse:"collapse"}}>
              <thead>
                <tr style={{borderBottom:"2px solid #e0e0e0"}}>
                  <th style={{textAlign:"left", padding:"10px 12px"}}>Deliverable</th>
                  <th style={{textAlign:"left", padding:"10px 12px"}}>Included</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Initial visibility and analytics audit", "Yes"],
                  ["Channel strategy and KPI scorecard", "Yes"],
                  ["Monthly reporting and performance review", "Yes"],
                  ["Technical SEO fixes and on-page optimization", "Yes"],
                  ["Content calendar and editorial production", "Yes"],
                  ["Paid media campaign setup and management", "Yes"],
                  ["Schema markup and structured data updates", "Yes"],
                  ["Generative Engine Optimization (GEO) layer", "Yes — light; full via GEO Agency"],
                  ["Full GEO (multi-engine) program", "Separate scope — GEO AI Visibility"],
                  ["Brand identity / rebrand", "Separate scope — Branding"],
                  ["Web or app development", "Separate scope — App / Web Development"],
                ].map(([item, status]) => (
                  <tr key={item} style={{borderBottom:"1px solid #f0f0f0"}}>
                    <td style={{padding:"10px 12px"}}>{item}</td>
                    <td style={{padding:"10px 12px", color: status === "Yes" ? "#2a7a2a" : "#888"}}>{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* ── PRICING ── */}
            <h2 className="mil-mb-20">Pricing and Engagement Models</h2>
            <p className="mil-text mil-mb-20">
              Digital marketing engagements at LivingStoneSolution run on a monthly
              retainer with quarterly scope reviews. Pricing depends on channel
              scope, content production volume, and paid-media budget under management.
            </p>

            {/* Micro-fact box — industry benchmarks. Sources: SE Ranking Agency Survey Dec 2024 (seranking.com/blog/seo-pricing, n=260 agencies); HawkSEM Marketing Agency Pricing (hawksem.com, updated April 2026) */}
            {/* STAT REQUEST — Digital Marketing Retainer Pricing: Oliyad/Blane to confirm LivingStone's actual monthly retainer ranges per tier so these can be replaced with internal figures. Owner: CEO (Blane Anteneh) / Head of Contracting (Deborah Wondmu) */}
            <div className="mil-mb-30" style={{background:"#f7f8fc", borderLeft:"4px solid #c9a961", padding:"16px 22px", borderRadius:"4px"}}>
              <p className="mil-text" style={{marginBottom:"8px"}}>
                <strong>Industry pricing context:</strong> A December 2024 survey of 260 digital marketing
                agencies (SE Ranking / Duda) found that monthly retainers range widely by service scope.
                Small-business-focused SEO retainers commonly run{" "}
                <strong>$2,500–$5,000 per month</strong>, while full-suite multi-channel retainers —
                combining SEO, content, and paid media — typically range from{" "}
                <strong>$3,500 to $10,000 per month</strong> (HawkSEM, 2026). Enterprise-level
                programs routinely start at <strong>$10,000+ per month</strong>.
                LivingStoneSolution retainers are scoped individually — contact us for a proposal.
              </p>
              <p style={{margin:0, fontSize:"0.82em", color:"#888"}}>
                Sources: SE Ranking &ldquo;SEO Pricing: How Much Does SEO Cost&rdquo; (Dec 2024, 260 agencies);
                HawkSEM &ldquo;Marketing Agency Pricing&rdquo; (April 2026)
              </p>
            </div>

            <ul className="mil-mb-30">
              <li className="mil-mb-10">
                <strong>Focused single-channel retainer</strong> — one practice area
                (e.g., SEO only, or PPC only); industry data indicates single-channel
                SEO retainers typically start at{" "}
                <strong>$2,500/month</strong> for small-business scope (SE Ranking, 2024);
                custom quote required for LivingStone engagements
              </li>
              <li className="mil-mb-10">
                <strong>Multi-channel retainer</strong> — SEO, content, and paid combined;
                industry data indicates full-suite retainers typically range{" "}
                <strong>$3,500–$10,000/month</strong> (HawkSEM, 2026); custom quote required
              </li>
              <li className="mil-mb-10">
                <strong>Full-stack growth retainer</strong> — multi-channel plus full GEO
                (AI visibility) program; scoped on discovery call
              </li>
            </ul>
            <p className="mil-mb-30">
              For a scoped estimate,{" "}
              <Link href="/book-geo" className="mil-link mil-accent">
                book a strategy call
              </Link>. To pursue AI-engine visibility specifically (ChatGPT, Perplexity,
              Gemini), see the dedicated{" "}
              <Link href="/geo-ai-visibility" className="mil-link mil-accent">
                GEO AI Visibility
              </Link>{" "}
              service.
            </p>

            {/* ── FAQ BLOCK ── [SCHEMA TARGET: FAQPage] */}
            <h2 className="mil-mb-20">Frequently Asked Questions</h2>

            <h3 className="mil-mb-10">What is the difference between SEO and GEO?</h3>
            <p className="mil-text mil-mb-20">
              Search Engine Optimization (SEO) is the practice of improving a site&rsquo;s
              visibility in traditional search engine results pages (Google and Bing).
              Generative Engine Optimization (GEO) extends that work into AI answer
              engines such as ChatGPT, Perplexity, Gemini, and Google AI Overviews,
              where users receive a single synthesized answer instead of a ranked list
              of links. The two practices overlap in technical foundations (schema,
              extractability, authority) but differ in success metrics and off-site
              tactics.
            </p>

            <h3 className="mil-mb-10">Do you handle paid media in addition to organic SEO?</h3>
            <p className="mil-text mil-mb-20">
              Yes. LivingStoneSolution runs paid campaigns on Google Ads, Bing Ads,
              LinkedIn, and Meta. Paid and organic are coordinated under a single
              scorecard so budget can shift between channels based on measured yield.
            </p>

            <h3 className="mil-mb-10">How quickly will I see results from digital marketing?</h3>
            <p className="mil-text mil-mb-20">
              {/* Sources: Search Engine Land "How Long Does SEO Take to Work?" (May 2026, citing Google's official guidance); Google Search Central documentation */}
              Results timelines vary by channel:
            </p>
            <ul className="mil-mb-20">
              <li className="mil-mb-8">
                <strong>Paid media (PPC):</strong> measurable impressions, clicks, and leads
                typically begin within the first 30 days of campaign launch.
              </li>
              <li className="mil-mb-8">
                <strong>SEO (organic search):</strong> Google&rsquo;s own guidance states that
                in most cases{" "}
                <strong>&ldquo;SEO will need four months to a year to help your business
                first implement improvements and then see the potential benefit.&rdquo;</strong>{" "}
                Industry research indicates that meaningful ranking movement is typically
                visible at the{" "}
                <strong>3–6 month mark</strong>, with compounding growth from 6–12 months
                (Search Engine Land, May 2026).
              </li>
              <li className="mil-mb-8">
                <strong>GEO (AI-engine visibility):</strong> movement in AI-generated
                answer citations is typically observed beginning at the{" "}
                <strong>3-month mark</strong>, with full multi-engine results over{" "}
                <strong>6–9 months</strong> — see the{" "}
                <Link href="/book-geo" className="mil-link mil-accent">GEO AI Visibility service page</Link>{" "}
                for the full methodology timeline.
              </li>
            </ul>

            <h3 className="mil-mb-10">Can you work with government or regulated-industry clients?</h3>
            <p className="mil-text mil-mb-20">
              Yes. Digital marketing for federal, state, and regulated clients is
              delivered under the Livingstone Government division&rsquo;s compliance
              framework, including FedRAMP-relevant tooling and 508-accessible content
              standards.
            </p>

            <h3 className="mil-mb-10">Where is the marketing team based?</h3>
            <p className="mil-text mil-mb-40">
              The core team is headquartered in Washington, D.C., with team members
              in Chicago, IL and New York, NY. LivingStoneSolution serves clients
              nationally and accepts global remote engagements.
            </p>

            {/* ── SERVICE AREAS ── */}
            <h2 className="mil-mb-20">Service Areas</h2>
            <p className="mil-text mil-mb-20">
              LivingStoneSolution delivers digital marketing services remotely to
              clients across the United States and internationally. Primary metropolitan
              markets served include:
            </p>
            <ul className="mil-mb-40">
              <li>Washington, D.C. (HQ)</li>
              <li>Chicago, IL</li>
              <li>New York, NY</li>
              <li>U.S. nationwide — remote delivery</li>
              <li>International — remote delivery available</li>
            </ul>

            {/* ── ECOSYSTEM NOTE ── */}
            <div className="mil-mb-40" style={{background:"#f7f8fc", borderLeft:"4px solid #c9a961", padding:"18px 24px", borderRadius:"4px"}}>
              <p className="mil-text" style={{margin:0}}>
                <strong>About LivingStoneSolution Technologies:</strong> Digital
                marketing is delivered by the Flagship commercial division and the
                Livingstone Marketing Firm. AI-engine visibility (GEO) is delivered
                by the Livingstone GEO Agency. Government and 508-compliant marketing
                is delivered by the Livingstone Government division.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROJECT SHOWCASE (client-only slider, below the fold) ── */}
      <ProjectsSlider projects={props.projects} />

      {/* ── CROSS-SERVICE LINKS ── */}
      <div className="container mil-p-0-120">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="mil-mb-30">Complete Your Digital Strategy</h3>
            <p className="mil-mb-30">
              A great marketing program needs a strong foundation. Establish your
              identity with our{" "}
              <Link href="/Branding" className="mil-link mil-accent">Branding</Link>{" "}
              practice, deploy it on a fast platform built by our{" "}
              <Link href="/AppDevelopment" className="mil-link mil-accent">App Development</Link>{" "}
              team, and become the AI-recommended answer with our{" "}
              <Link href="/geo-ai-visibility" className="mil-link mil-accent">GEO AI Visibility</Link>{" "}
              service.
            </p>
          </div>
        </div>
      </div>

    </Layouts>
  );
};

export default DigitalMarketing;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();
  return {
    props: {
      projects: allProjects,
    },
  };
}
