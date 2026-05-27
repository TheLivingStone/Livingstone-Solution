import { getSortedProjectsData } from "@library/projects";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import React from "react";
import SEO from "@components/SEO";
import ExpertNote from "@components/ExpertNote";
import Link from "next/link";
import PageSchema from "@components/PageSchema";

/* ─── Branding — page-level schema data ─────────────────────────────────────
 * FAQ answers are quoted verbatim from the visible page text.
 * No numeric prices from LivingStone are asserted (all pricing is
 * industry-benchmark context only). No AggregateRating.
 * ──────────────────────────────────────────────────────────────────────────*/
const BRANDING_SERVICE = {
  id: "https://thelivingstonesolution.com/Branding#service",
  url: "https://thelivingstonesolution.com/Branding",
  name: "Brand Strategy and Visual Identity",
  serviceType: "Brand Strategy and Visual Identity",
  description:
    "LivingStoneSolution Technologies provides brand strategy, visual identity design, and brand system development for startups, established enterprises, and government-adjacent organizations. Deliverables include logo design, typography and color systems, brand guidelines, and messaging frameworks that maintain consistency across digital and print channels.",
  areaServed: [
    "Washington, D.C.",
    "Chicago, IL",
    "New York, NY",
    "United States",
    "Worldwide",
  ],
};

const BRANDING_FAQ = [
  {
    question: "What is the difference between a logo and a brand identity?",
    answer:
      "A logo is a single mark. A brand identity is the complete visual system: logo, color palette, typography, iconography, photography style, and usage rules that govern how all elements appear together across every channel. LivingStoneSolution delivers the full identity system, not isolated logo files.",
  },
  {
    question:
      "Do you provide branding for government or regulated organizations?",
    answer:
      "Yes. Through the Livingstone Government division, LivingStoneSolution provides branding work that meets federal accessibility and visual compliance requirements. Government-adjacent clients with 508-compliance or accessibility mandates are routed to that division's process.",
  },
  {
    question:
      "Can you help a brand establish AI visibility after rebranding?",
    answer:
      "Yes. After a rebrand, the updated brand entity needs to be structured and signaled so AI engines (ChatGPT, Perplexity, Gemini) recognize and cite the correct entity. This is handled by the Livingstone GEO Agency as a separate engagement.",
  },
  {
    question: "How long does a branding project take?",
    answer:
      "Timeline depends on scope and client review cycles. Industry data indicates that a focused identity refresh (logo, color system, basic guidelines) typically takes 4–6 weeks, while a full brand strategy plus identity build — covering discovery, positioning, design, and comprehensive brand guidelines — typically takes 8–16 weeks. Enterprise rebrands involving multi-brand architecture can extend to 6–10 months. According to a 2025 analysis by Snapper Studio, the average brand project runs approximately 6 months when strategy, design, and rollout phases are included. Timelines for LivingStoneSolution engagements are confirmed during the discovery phase.",
  },
];

const BRANDING_BREADCRUMB = [
  { name: "Home", url: "https://thelivingstonesolution.com/" },
  { name: "Branding and Visual Identity", url: "https://thelivingstonesolution.com/Branding" },
];

// Slider is client-only; primary content is server-rendered above it
const ProjectsSlider = dynamic(() => import("@components/sliders/Projects"), { ssr: false });

const Branding = (props) => {
  return (
    <Layouts>
      <SEO
        title="Branding and Visual Identity Services | LivingStoneSolution — Washington, D.C."
        description="LivingStoneSolution Technologies provides brand strategy, visual identity, logo design, and brand systems for startups and enterprises. Washington, D.C.-based, serving clients nationally."
        keywords="Branding, visual identity, brand strategy, logo design, graphic design, Washington DC"
        canonical="https://thelivingstonesolution.com/Branding"
      />
      <PageSchema
        service={BRANDING_SERVICE}
        faq={BRANDING_FAQ}
        breadcrumb={BRANDING_BREADCRUMB}
      />

      {/* ── ANSWER-FIRST HERO (server-rendered, extraction-first) ── */}
      <section className="container mil-p-120-90">
        <div className="row justify-content-center">
          <div className="col-lg-10">

            <h1 className="mil-mb-30">
              Branding and Visual Identity in Washington, D.C.
            </h1>

            {/* Answer-first definition — 40-60 words */}
            <p className="mil-text mil-mb-30">
              LivingStoneSolution Technologies provides brand strategy, visual identity
              design, and brand system development for startups, established enterprises,
              and government-adjacent organizations. Deliverables include logo design,
              typography and color systems, brand guidelines, and messaging frameworks
              that maintain consistency across digital and print channels.
            </p>

            {/* QUOTE SLOT QS-02 — Blane Anteneh on brand strategy approach */}
            <ExpertNote
              slotId="QS-02"
              quote={null}
              smeName="Blane Anteneh"
              smeRole="Co-Founder & CEO"
              smeLocation="Chicago, IL"
            />

            <div className="mil-divider mil-mb-60" />

            {/* ── WHAT IS BRANDING ── */}
            <h2 className="mil-mb-20">What Is Brand Strategy and Visual Identity?</h2>
            <p className="mil-text mil-mb-20">
              Brand strategy is the structured process of defining how an organization
              is positioned, perceived, and communicated to its audience. Visual identity
              is the tangible output: the logo, color palette, typography, and design
              system that give that strategy a consistent visual form. LivingStoneSolution
              delivers both as a unified engagement, not as separate projects.
            </p>
            <ul className="mil-mb-40">
              <li className="mil-mb-10">
                <strong>Brand positioning</strong> — define your market category,
                differentiation, and target audience before touching any visual
              </li>
              <li className="mil-mb-10">
                <strong>Naming and messaging</strong> — brand name refinement, taglines,
                and messaging hierarchies for key audience segments
              </li>
              <li className="mil-mb-10">
                <strong>Logo and mark design</strong> — primary logo, secondary marks,
                icon variants, and usage rules
              </li>
              <li className="mil-mb-10">
                <strong>Color and typography systems</strong> — primary and secondary
                palette, typeface pairings, and usage guidelines
              </li>
              <li className="mil-mb-10">
                <strong>Brand guidelines document</strong> — single source of truth for
                internal and external design usage
              </li>
            </ul>

            {/* ── HOW IT WORKS ── */}
            <h2 className="mil-mb-20">How It Works</h2>
            <p className="mil-text mil-mb-20">
              Branding engagements at LivingStoneSolution follow a five-phase process
              that moves from strategic discovery through final brand system delivery.
              Each phase produces a defined output that must be approved before the
              next phase begins.
            </p>
            <ol className="mil-mb-40">
              <li className="mil-mb-10">
                <strong>Discovery</strong> — stakeholder interviews, audience research,
                competitor landscape review, and positioning brief
              </li>
              <li className="mil-mb-10">
                <strong>Strategy definition</strong> — brand platform document: purpose,
                vision, values, personality, and positioning statement
              </li>
              <li className="mil-mb-10">
                <strong>Identity concept development</strong> — two to three visual
                directions presented for client review and selection
              </li>
              <li className="mil-mb-10">
                <strong>Refinement and system build</strong> — selected direction
                developed into full color, type, and pattern system
              </li>
              <li className="mil-mb-10">
                <strong>Delivery</strong> — production-ready files (SVG, PNG, PDF) plus
                brand guidelines document; handoff to development team if applicable
              </li>
            </ol>

            {/* ── WHAT'S INCLUDED ── */}
            <h2 className="mil-mb-20">What&rsquo;s Included</h2>
            <p className="mil-text mil-mb-20">
              The table below shows what is included in a standard branding engagement.
              Items marked &ldquo;separate scope&rdquo; are available as add-ons or are
              handled by a complementary service practice.
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
                  ["Brand positioning and strategy document", "Yes"],
                  ["Logo design (primary + secondary marks)", "Yes"],
                  ["Color palette and typography system", "Yes"],
                  ["Brand guidelines (digital PDF)", "Yes"],
                  ["Icon and pattern library", "Yes"],
                  ["Messaging framework (taglines, value statements)", "Yes"],
                  ["Business card and stationery templates", "Yes"],
                  ["Website visual implementation", "Separate scope — Web Development"],
                  ["Social media content production", "Separate scope — Digital Marketing"],
                  ["AI visibility for brand entity", "Separate scope — GEO AI Visibility"],
                ].map(([item, status]) => (
                  <tr key={item} style={{borderBottom:"1px solid #f0f0f0"}}>
                    <td style={{padding:"10px 12px"}}>{item}</td>
                    <td style={{padding:"10px 12px", color: status === "Yes" ? "#2a7a2a" : "#888"}}>{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* ── PRICING ── */}
            <h2 className="mil-mb-20">Pricing</h2>
            <p className="mil-text mil-mb-20">
              Branding engagements at LivingStoneSolution are priced per project, based
              on scope, deliverable set, and organization size. Pricing varies between
              a focused identity refresh and a comprehensive brand strategy plus full
              identity build.
            </p>

            {/* Micro-fact box — industry benchmarks. Sources: Clutch Branding Pricing Guide 2026 (clutch.co/agencies/branding/pricing); HustleJar 2024 Pricing Guide (hustlejar.com) */}
            {/* STAT REQUEST — Branding Pricing: Oliyad/Blane to confirm LivingStone's actual starting price for identity refresh and full brand build so the industry ranges below can be replaced with internal figures. Owner: CEO (Blane Anteneh) */}
            <div className="mil-mb-30" style={{background:"#f7f8fc", borderLeft:"4px solid #c9a961", padding:"16px 22px", borderRadius:"4px"}}>
              <p className="mil-text" style={{marginBottom:"8px"}}>
                <strong>Industry pricing context:</strong> According to Clutch&rsquo;s 2026 Branding Pricing Guide,
                most reviewed branding projects cost between{" "}
                <strong>$10,000 and $49,999</strong>, with agencies billing at an average of{" "}
                <strong>$100–$149 per hour</strong> for brand strategy and visual identity work.
                Focused logo and identity-only packages for small businesses typically range
                from <strong>$5,000 to $20,000</strong> (HustleJar, 2024). Full brand strategy
                plus identity builds — covering positioning, guidelines, and messaging —
                commonly run <strong>$15,000 and above</strong> depending on organization size.
                LivingStoneSolution engagements are scoped individually — contact us for a project estimate.
              </p>
              <p style={{margin:0, fontSize:"0.82em", color:"#888"}}>
                Sources: Clutch Branding Pricing Guide 2026; HustleJar &ldquo;2024 Pricing Guide: Branding Cost for Small Businesses&rdquo;
              </p>
            </div>

            <ul className="mil-mb-30">
              <li className="mil-mb-10">
                <strong>Identity refresh</strong> — logo and color system update for
                existing brand; industry data indicates focused identity packages
                typically range <strong>$5,000–$15,000</strong> (Clutch, 2026); custom quote required
              </li>
              <li className="mil-mb-10">
                <strong>Full brand build</strong> — strategy, identity, guidelines,
                and messaging; most full-build branding projects on Clutch fall in the{" "}
                <strong>$10,000–$49,999</strong> range (Clutch, 2026); custom quote required
              </li>
              <li className="mil-mb-10">
                <strong>Enterprise / multi-brand</strong> — parent brand plus
                sub-brand architecture; scoped on discovery call
              </li>
            </ul>
            <p className="mil-mb-30">
              <Link href="/book-geo" className="mil-link mil-accent">
                Book a strategy call
              </Link>{" "}
              to discuss scope and receive a project estimate. Once your brand identity
              is defined, consider pairing it with our{" "}
              <Link href="/DigitalMarketing" className="mil-link mil-accent">
                Digital Marketing
              </Link>{" "}
              service to deploy it across channels.
            </p>

            {/* ── FAQ BLOCK ── [SCHEMA TARGET: FAQPage] */}
            <h2 className="mil-mb-20">Frequently Asked Questions</h2>

            <h3 className="mil-mb-10">What is the difference between a logo and a brand identity?</h3>
            <p className="mil-text mil-mb-20">
              A logo is a single mark. A brand identity is the complete visual system:
              logo, color palette, typography, iconography, photography style, and usage
              rules that govern how all elements appear together across every channel.
              LivingStoneSolution delivers the full identity system, not isolated logo files.
            </p>

            <h3 className="mil-mb-10">Do you provide branding for government or regulated organizations?</h3>
            <p className="mil-text mil-mb-20">
              Yes. Through the Livingstone Government division, LivingStoneSolution
              provides branding work that meets federal accessibility and visual
              compliance requirements. Government-adjacent clients with 508-compliance
              or accessibility mandates are routed to that division&rsquo;s process.
            </p>

            <h3 className="mil-mb-10">Can you help a brand establish AI visibility after rebranding?</h3>
            <p className="mil-text mil-mb-20">
              Yes. After a rebrand, the updated brand entity needs to be structured and
              signaled so AI engines (ChatGPT, Perplexity, Gemini) recognize and cite
              the correct entity. This is handled by the{" "}
              <Link href="/geo-ai-visibility" className="mil-link mil-accent">
                Livingstone GEO Agency
              </Link>{" "}
              as a separate engagement.
            </p>

            <h3 className="mil-mb-10">How long does a branding project take?</h3>
            <p className="mil-text mil-mb-40">
              {/* Source: snapper.studio "The Branding Process: Stages, Timeline and What to Expect" (April 2025) */}
              Timeline depends on scope and client review cycles. Industry data indicates
              that a focused identity refresh (logo, color system, basic guidelines) typically
              takes <strong>4–6 weeks</strong>, while a full brand strategy plus identity build
              — covering discovery, positioning, design, and comprehensive brand guidelines —
              typically takes <strong>8–16 weeks</strong>. Enterprise rebrands involving
              multi-brand architecture can extend to 6–10 months. According to a 2025 analysis
              by Snapper Studio, the average brand project runs approximately 6 months when
              strategy, design, and rollout phases are included. Timelines for LivingStoneSolution
              engagements are confirmed during the discovery phase.
            </p>

            {/* ── SERVICE AREAS ── */}
            <h2 className="mil-mb-20">Service Areas</h2>
            <p className="mil-text mil-mb-20">
              LivingStoneSolution is headquartered in Washington, D.C. Branding services
              are delivered remotely and in person to clients nationally and internationally.
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
                <strong>About LivingStoneSolution Technologies:</strong> Branding is
                delivered under the Flagship commercial division. The company&rsquo;s
                Livingstone Marketing Firm division handles strategic brand growth
                initiatives and paid media, while the Livingstone GEO Agency handles
                AI search visibility for brand entities.
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
            <h3 className="mil-mb-30">Bring Your Brand to Life</h3>
            <p className="mil-mb-30">
              Once your identity is defined, deploy it digitally through our{" "}
              <Link href="/AppDevelopment" className="mil-link mil-accent">App Development</Link>{" "}
              and{" "}
              <Link href="/DigitalMarketing" className="mil-link mil-accent">Digital Marketing</Link>{" "}
              services. Want your brand to be cited in AI-generated answers?{" "}
              <Link href="/geo-ai-visibility" className="mil-link mil-accent">GEO AI Visibility</Link>{" "}
              ensures AI engines recognize and surface your brand entity.
            </p>
          </div>
        </div>
      </div>

    </Layouts>
  );
};

export default Branding;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();
  return {
    props: {
      projects: allProjects,
    },
  };
}
