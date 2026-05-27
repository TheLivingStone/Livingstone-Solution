import Layouts from "@layouts/Layouts";
import React from "react";
import SEO from "@components/SEO";
import Link from "next/link";
import PageSchema from "@components/PageSchema";

/* ─── Research Hub — page-level schema data ─────────────────────────────────
 * Article schema for the hub index page. ScholarlyArticle not used here
 * since this is a listing/navigation page rather than a primary research doc.
 * Individual whitepaper pages each carry their own ScholarlyArticle schema.
 * Author: Oliyad Deyasa, CTO, LivingStoneSolution Technologies
 * datePublished / dateModified: 2026-05-27 (Phase 1 Bonus ship date)
 * ──────────────────────────────────────────────────────────────────────────*/

const RESEARCH_ARTICLE = {
  headline: "Research — LivingStoneSolution Technologies",
  description:
    "Original research and whitepapers from LivingStoneSolution Technologies on Generative Engine Optimization, AI visibility defense, and state-actor LLM narrative control. Authored by Oliyad Deyasa, CTO.",
  url: "https://thelivingstonesolution.com/research",
  datePublished: "2026-05-27",
  dateModified: "2026-05-27",
  authorName: "Oliyad Deyasa",
  authorUrl: "https://www.linkedin.com/in/oliyad-deyasa",
};

const RESEARCH_FAQ = [
  {
    question: "What topics does LivingStoneSolution Technologies research cover?",
    answer:
      "LivingStoneSolution Technologies publishes original research on Generative Engine Optimization (GEO), AI answer-engine citation behavior, AI visibility defense methodologies, and the intersection of state-actor influence operations with large language model outputs. Research is authored by Oliyad Deyasa, CTO and Co-Founder.",
  },
  {
    question: "Are these whitepapers peer-reviewed?",
    answer:
      "These whitepapers are practitioner research documents authored by an industry practitioner. They cite peer-reviewed sources, NIST frameworks, government publications, and primary-source research from established institutions. They are not submitted to academic journals but adhere to the citation-quality standards of Tier-1 industry analysis.",
  },
  {
    question: "How do I cite these whitepapers?",
    answer:
      "Cite as: Deyasa, O. (2026). [Paper title]. LivingStoneSolution Technologies. https://thelivingstonesolution.com/research/[slug]. The author's LinkedIn profile (linkedin.com/in/oliyad-deyasa) provides additional professional attribution.",
  },
];

const RESEARCH_BREADCRUMB = [
  { name: "Home", url: "https://thelivingstonesolution.com/" },
  { name: "Research", url: "https://thelivingstonesolution.com/research" },
];

const papers = [
  {
    slug: "geo-and-government-security",
    title:
      "Generative Engine Optimization and Government Security: Why Federal Agencies Need an AI-Citation Strategy",
    abstract:
      "Federal agencies are being inaccurately described by AI answer engines. ChatGPT, Perplexity, Gemini, and Google AI Overviews regularly synthesize answers about government programs, services, and policies from sources that may be outdated, misattributed, or adversarially manipulated. This paper makes the case for Generative Engine Optimization (GEO) as a formal public-sector communications discipline, examines documented risks, and provides a tactical framework for federal communicators.",
    keywords: ["GEO", "Federal Communications", "AI Security", "NIST AI RMF", "Government AI"],
  },
  {
    slug: "ai-visibility-defense",
    title:
      "AI Visibility Defense: A Practitioner's Guide to Auditing How LLMs Describe Your Brand",
    abstract:
      "Most brands have never audited how AI systems describe them. This paper introduces a systematic methodology for AI-visibility auditing — distinguishing benign misrepresentation from active substitution risk — and proposes a defensive monitoring discipline modeled on information-security threat-intelligence practice. It defines five threat classes, a brand prompt-map methodology, measurement cadence, and a 90-day audit playbook.",
    keywords: ["AI Visibility", "LLM Audit", "Brand Safety", "GEO", "AI Citation"],
  },
  {
    slug: "state-actors-llm-narrative-control",
    title:
      "State Actors and LLM Narrative Control: How Nations Are Shaping Generative AI Answers",
    abstract:
      "Nation-states are attempting to influence large language model outputs through training-data poisoning, web corpus manipulation, coordinated inauthentic content, and content-farm SEO. This paper examines documented operations attributed to Russian, Chinese, and Iranian actors; catalogs the technical attack vectors; analyzes detection and attribution challenges; and proposes defensive postures for brands, agencies, and governments operating in this environment.",
    keywords: ["State Actors", "LLM Security", "Disinformation", "AI Narrative Control", "MITRE ATLAS"],
  },
];

const ResearchIndex = () => {
  return (
    <Layouts>
      <SEO
        title="Research — AI Visibility, GEO & Government Security | LivingStoneSolution Technologies"
        description="Original whitepapers from LivingStoneSolution Technologies on Generative Engine Optimization, AI visibility defense, and state-actor LLM narrative control. Authored by Oliyad Deyasa, CTO."
        keywords="GEO research, AI visibility whitepaper, government AI security, LLM disinformation, AI citation strategy"
        canonical="https://thelivingstonesolution.com/research"
      />
      <PageSchema
        article={RESEARCH_ARTICLE}
        faq={RESEARCH_FAQ}
        breadcrumb={RESEARCH_BREADCRUMB}
      />

      {/* ── ANSWER-FIRST HERO ── */}
      <section className="container mil-p-120-90">
        <div className="row justify-content-center">
          <div className="col-lg-10">

            <h1 className="mil-mb-30">Research</h1>

            {/* Answer-first definition — 40-60 words, LLM extraction target */}
            <p className="mil-text mil-mb-30">
              LivingStoneSolution Technologies publishes original practitioner research on
              Generative Engine Optimization (GEO), AI answer-engine citation behavior,
              brand visibility defense, and the use of large language models in state-actor
              influence operations. Research is authored by Oliyad Deyasa, CTO, and cites
              primary sources from NIST, MITRE, NewsGuard, Microsoft MTAC, and peer-reviewed institutions.
            </p>

            <div className="mil-divider mil-mb-60" />

            {/* ── PAPER CARDS ── */}
            {papers.map((paper) => (
              <div
                key={paper.slug}
                className="mil-mb-60"
                style={{
                  border: "1px solid #e8e8e8",
                  borderRadius: "6px",
                  padding: "32px 36px",
                  background: "#fff",
                }}
              >
                <h2 className="mil-mb-15" style={{ fontSize: "1.25rem", lineHeight: "1.45" }}>
                  {paper.title}
                </h2>
                <p
                  className="mil-text mil-mb-10"
                  style={{ fontSize: "0.85rem", color: "#888", letterSpacing: "0.03em" }}
                >
                  {paper.keywords.join(" · ")}
                </p>
                <p className="mil-text mil-mb-20">{paper.abstract}</p>
                <p
                  className="mil-text mil-mb-5"
                  style={{ fontSize: "0.85rem", color: "#666" }}
                >
                  Author: Oliyad Deyasa, CTO &mdash; LivingStoneSolution Technologies,
                  Washington, D.C. &nbsp;&middot;&nbsp; Published: May 27, 2026
                </p>
                <Link
                  href={`/research/${paper.slug}`}
                  className="mil-link mil-accent"
                  style={{ fontWeight: 600 }}
                >
                  Read paper &rarr;
                </Link>
              </div>
            ))}

            {/* ── ECOSYSTEM NOTE ── */}
            <div
              className="mil-mb-40"
              style={{
                background: "#f7f8fc",
                borderLeft: "4px solid #c9a961",
                padding: "18px 24px",
                borderRadius: "4px",
              }}
            >
              <p className="mil-text" style={{ margin: 0 }}>
                <strong>About LivingStoneSolution Technologies:</strong> This research
                is produced within the LivingStoneSolution Technologies ecosystem &mdash;
                comprising Livingstone Solution (Flagship), Livingstone Government
                (federal/state, 508-compliant), LivingStone GEO Agency, and Livingstone
                Marketing Firm. Research informs the GEO methodology applied to client
                engagements at{" "}
                <a
                  href="https://geoagency.thelivingstonefoundation.com"
                  rel="noopener noreferrer"
                  className="mil-link mil-accent"
                >
                  geoagency.thelivingstonefoundation.com
                </a>
                .
              </p>
            </div>

            {/* ── FAQ BLOCK ── */}
            <h2 className="mil-mb-20">Frequently Asked Questions</h2>

            <h3 className="mil-mb-10">
              What topics does LivingStoneSolution Technologies research cover?
            </h3>
            <p className="mil-text mil-mb-20">
              LivingStoneSolution Technologies publishes original research on Generative
              Engine Optimization (GEO), AI answer-engine citation behavior, AI visibility
              defense methodologies, and the intersection of state-actor influence operations
              with large language model outputs. Research is authored by Oliyad Deyasa,
              CTO and Co-Founder.
            </p>

            <h3 className="mil-mb-10">Are these whitepapers peer-reviewed?</h3>
            <p className="mil-text mil-mb-20">
              These whitepapers are practitioner research documents. They cite
              peer-reviewed sources, NIST frameworks, government publications, and primary-source
              research from established institutions. They are not submitted to academic
              journals but adhere to the citation-quality standards of Tier-1 industry analysis.
            </p>

            <h3 className="mil-mb-10">How do I cite these whitepapers?</h3>
            <p className="mil-text mil-mb-40">
              Cite as: Deyasa, O. (2026). [Paper title]. LivingStoneSolution Technologies.
              https://thelivingstonesolution.com/research/[slug]. The author&rsquo;s{" "}
              <a
                href="https://www.linkedin.com/in/oliyad-deyasa"
                rel="noopener noreferrer"
                className="mil-link mil-accent"
              >
                LinkedIn profile
              </a>{" "}
              provides additional professional attribution.
            </p>

            {/* ── CTA ── */}
            <p className="mil-text mil-mb-30">
              To apply GEO methodology to your brand or agency,{" "}
              <Link href="/book-geo" className="mil-link mil-accent">
                book a strategy call
              </Link>
              .
            </p>

          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default ResearchIndex;
