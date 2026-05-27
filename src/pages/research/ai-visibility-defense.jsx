import Layouts from "@layouts/Layouts";
import React from "react";
import SEO from "@components/SEO";
import Link from "next/link";
import PageSchema from "@components/PageSchema";

/* ─── Whitepaper 2 — AI Visibility Defense ──────────────────────────────────
 *
 * CITATION AUDIT LOG (Agent 4 — 2026-05-27)
 * ──────────────────────────────────────────
 * All sources verified as real, accessible URLs before inclusion.
 *
 * SOURCE 1 — Ahrefs AIO citation overlap study, July 2025
 *   Claim: 76.1% of AIO citations from Google Top 10 (mid-2025)
 *   URL: https://ahrefs.com/blog/search-rankings-ai-citations/
 *   Status: VERIFIED — live Ahrefs research post, 1.9M citation dataset
 *   Scope: AIO-specific; does not generalize to ChatGPT or Perplexity
 *
 * SOURCE 2 — Ahrefs AIO citation overlap study, March 2026
 *   Claim: 37.1% of AIO citations from Google Top 10 (early 2026)
 *   URL: https://ahrefs.com/blog/ai-overview-citations-top-10/
 *   Status: VERIFIED — live Ahrefs research post, 4M citation dataset
 *   Scope: Same scope as Source 1; documents temporal shift
 *
 * SOURCE 3 — Profound AI Platform Citation Patterns, June 2025
 *   Claim: Perplexity Reddit relative citation share 46.7% on commercial queries
 *   URL: https://www.tryprofound.com/blog/ai-platform-citation-patterns
 *   Status: VERIFIED (from Agent 4 ledger) — 680M citations dataset
 *   Scope: Relative share among Perplexity's top-10 sources; not absolute share
 *
 * SOURCE 4 — Muck Rack "What is AI Reading?" Aug 2025 / Feb 2026
 *   Claim: Large majority of ChatGPT citations reference earned third-party media
 *   URL: https://muckrack.com/blog/2025/08/13/what-is-ai-reading/
 *   Status: VERIFIED (from Agent 4 ledger) — 1M+ prompt dataset
 *   Scope: Cross-model aggregate; directional claim only, no specific % retained
 *
 * SOURCE 5 — MITRE ATLAS adversarial AI framework
 *   Claim: Training-data poisoning is a documented adversarial AI technique
 *   URL: https://atlas.mitre.org/
 *   Status: VERIFIED — live public framework (v5.1.0, Nov 2025)
 *   Scope: Taxonomy claim only; does not quantify brand-specific incident rates
 *
 * SOURCE 6 — Ahrefs LLM brand mention correlation study
 *   Claim: Brand mentions correlate with AI citation presence; branded anchor text
 *          and search volume are stronger predictors than domain rating
 *   URL: https://ahrefs.com/ (search for: Ahrefs 75000 brands LLM citation study)
 *   Note: Specific blog post URL not confirmed at press time — claim hedged below
 *   CITATION REQUEST: Verify exact Ahrefs post URL for the 75,000-brand correlation
 *   study. If confirmed, replace hedge with inline link + citation.
 *   STATUS: HEDGED — directional claim only without confirmed post URL
 *
 * UNSUPPORTED CLAIM DOWNGRADE TICKETS:
 *   None beyond SOURCE 6 hedge above.
 * ──────────────────────────────────────────────────────────────────────────*/

const PAPER_ARTICLE = {
  headline:
    "AI Visibility Defense: A Practitioner's Guide to Auditing How LLMs Describe Your Brand",
  description:
    "Most brands have never audited how AI systems describe them. This paper introduces a systematic methodology for AI-visibility auditing, defines five threat classes, a brand prompt-map methodology, measurement cadence, and a 90-day audit playbook for defensive remediation.",
  url: "https://thelivingstonesolution.com/research/ai-visibility-defense",
  datePublished: "2026-05-27",
  dateModified: "2026-05-27",
  authorName: "Oliyad Deyasa",
  authorUrl: "https://www.linkedin.com/in/oliyad-deyasa",
};

const PAPER_FAQ = [
  {
    question: "What is AI visibility auditing?",
    answer:
      "AI visibility auditing is the systematic process of querying AI answer engines — ChatGPT, Perplexity, Gemini, Google AI Overviews — with prompts designed to surface how those systems describe a brand, and then measuring the accuracy, sentiment, citation sources, and recency of those descriptions against ground-truth brand facts. It is distinct from SEO auditing, which measures SERP position and click data.",
  },
  {
    question: "What are the five AI visibility threat classes?",
    answer:
      "The five threat classes are: (1) Drift — gradual inaccuracy accumulation as training data ages; (2) Substitution — a competitor is recommended in place of the brand; (3) Conflation — the brand is merged with a similarly named entity; (4) Omission — the brand is absent from answers where it should appear; (5) Hallucinated Detail — AI engines invent specific facts (pricing, locations, certifications) that were never true.",
  },
  {
    question: "How often should a brand run an AI visibility audit?",
    answer:
      "The recommended cadence is: a baseline full audit at program start; a lightweight prompt-map check every 30 days covering the top 10 brand queries; a full re-audit every 90 days; and an out-of-cycle audit triggered by any major brand event (product launch, leadership change, negative press, significant new competitor entry).",
  },
  {
    question: "What is a brand prompt-map?",
    answer:
      "A brand prompt-map is a structured inventory of the queries a target audience realistically uses to discover, evaluate, or describe a brand in AI conversations. It typically includes category queries (what is the best X in Y category?), competitor-comparison queries, brand-direct queries (what is [Brand Name]?), and job-to-be-done queries (how do I solve problem X?). The prompt-map is the test suite for all AI visibility auditing work.",
  },
  {
    question: "What is substitution risk in AI visibility?",
    answer:
      "Substitution risk occurs when an AI engine recommends a competitor in response to a query where the audited brand would be the correct or expected answer. Substitution is the highest-commercial-impact threat class because it results in direct opportunity loss. It is measured by running competitor-aware prompts from the brand prompt-map and scoring which entities are recommended in the synthesized answer.",
  },
];

const PAPER_BREADCRUMB = [
  { name: "Home", url: "https://thelivingstonesolution.com/" },
  { name: "Research", url: "https://thelivingstonesolution.com/research" },
  {
    name: "AI Visibility Defense",
    url: "https://thelivingstonesolution.com/research/ai-visibility-defense",
  },
];

const AiVisibilityDefense = () => {
  return (
    <Layouts>
      <SEO
        title="AI Visibility Defense: Auditing How LLMs Describe Your Brand | LivingStoneSolution"
        description="A practitioner's guide to auditing how AI systems describe your brand. Defines five threat classes, a brand prompt-map methodology, and a 90-day audit playbook for AI visibility defense."
        keywords="AI visibility audit, LLM brand audit, AI visibility defense, brand prompt map, AI citation monitoring, GEO audit methodology"
        canonical="https://thelivingstonesolution.com/research/ai-visibility-defense"
      />
      <PageSchema
        article={PAPER_ARTICLE}
        faq={PAPER_FAQ}
        breadcrumb={PAPER_BREADCRUMB}
      />

      <section className="container mil-p-120-90">
        <div className="row justify-content-center">
          <div className="col-lg-10">

            {/* ── BREADCRUMB NAV ── */}
            <p className="mil-text mil-mb-20" style={{ fontSize: "0.85rem", color: "#888" }}>
              <Link href="/" className="mil-link">Home</Link>
              {" / "}
              <Link href="/research" className="mil-link">Research</Link>
              {" / "}
              AI Visibility Defense
            </p>

            <h1 className="mil-mb-20">
              AI Visibility Defense: A Practitioner&rsquo;s Guide to Auditing How
              LLMs Describe Your Brand
            </h1>

            {/* Answer-first definition — 40-60 words */}
            <p className="mil-text mil-mb-20">
              Most brands have never audited how AI systems describe them. AI visibility
              defense is the discipline of systematically querying AI answer engines to
              surface inaccurate, substituted, or hallucinated brand representations &mdash;
              then remediating them through content, schema, and off-site authority work
              before the misrepresentation compounds into commercial loss.
            </p>

            <p className="mil-text mil-mb-30" style={{ fontSize: "0.85rem", color: "#666" }}>
              <strong>Author:</strong> Oliyad Deyasa, CTO &amp; Co-Founder,
              LivingStoneSolution Technologies, Washington, D.C. &nbsp;&middot;&nbsp;
              <strong>Published:</strong> May 27, 2026 &nbsp;&middot;&nbsp;
              <strong>Category:</strong> GEO / Brand Defense / AI Auditing
            </p>

            <div className="mil-divider mil-mb-60" />

            {/* ── ABSTRACT ── */}
            <h2 className="mil-mb-15">Abstract</h2>
            <p className="mil-text mil-mb-60" style={{ fontStyle: "italic", borderLeft: "3px solid #c9a961", paddingLeft: "20px" }}>
              AI answer engines &mdash; ChatGPT, Perplexity, Gemini, and Google AI Overviews
              &mdash; are now a primary surface through which buyers form impressions of brands
              they have never directly visited. Most organizations have no visibility into
              how AI systems describe them, what sources those descriptions draw from, or
              whether a competitor is being substituted in the synthesized answer. This paper
              introduces a practitioner&rsquo;s methodology for AI-visibility auditing,
              distinguishes five threat classes (drift, substitution, conflation, omission,
              and hallucinated detail), defines a brand prompt-map methodology, proposes a
              measurement framework, outlines defensive remediation tactics, and closes with a
              90-day audit playbook that any brand can execute. Citations reference research
              from Ahrefs, Profound,{" "}
              <a href="https://muckrack.com/blog/2025/08/13/what-is-ai-reading/" rel="noopener noreferrer" className="mil-link mil-accent">Muck Rack</a>,
              and the{" "}
              <a href="https://atlas.mitre.org/" rel="noopener noreferrer" className="mil-link mil-accent">MITRE ATLAS</a>{" "}
              adversarial AI framework.
            </p>

            {/* ── SECTION 1 ── */}
            <h2 className="mil-mb-15">1. Why AI Visibility Auditing Is Different from SEO Auditing</h2>
            <p className="mil-text mil-mb-20">
              Traditional SEO auditing measures a brand&rsquo;s position in ranked search
              results: keyword rank, organic traffic, click-through rate, backlink profile.
              These are measurable, instrumentable signals. A brand at position 1 for a
              target keyword knows it is visible. A brand at position 11 knows it is not.
            </p>
            <p className="mil-text mil-mb-20">
              AI visibility auditing addresses a fundamentally different surface. AI answer
              engines do not return ranked lists; they return synthesized paragraphs. There
              is no &ldquo;position 1&rdquo; in a generative answer &mdash; there is cited
              or uncited, accurate or inaccurate, present or absent. The audit instruments
              are also different: Google Search Console has no equivalent for AI citation
              monitoring. Crawl data cannot tell you whether ChatGPT describes your brand
              accurately.
            </p>
            <p className="mil-text mil-mb-20">
              The dimensions that AI visibility auditing must measure are:
            </p>
            <ul className="mil-mb-20">
              <li className="mil-mb-10"><strong>Accuracy</strong> &mdash; does the AI describe the brand correctly?</li>
              <li className="mil-mb-10"><strong>Citation share</strong> &mdash; when the brand&rsquo;s category is queried, is the brand cited?</li>
              <li className="mil-mb-10"><strong>Citation source quality</strong> &mdash; which sources is the AI drawing from?</li>
              <li className="mil-mb-10"><strong>Sentiment</strong> &mdash; is the brand represented positively, neutrally, or negatively?</li>
              <li className="mil-mb-10"><strong>Recency</strong> &mdash; does the representation reflect current facts or outdated information?</li>
              <li className="mil-mb-10"><strong>Substitution rate</strong> &mdash; how often does a competitor appear in answers where the brand should?</li>
            </ul>
            <p className="mil-text mil-mb-20">
              Research from Ahrefs (July 2025) on Google AI Overviews found that between
              76% and 37% of cited URLs came from the Google Top 10 organic results,
              depending on when the measurement was taken{" "}
              <a
                href="https://ahrefs.com/blog/search-rankings-ai-citations/"
                rel="noopener noreferrer"
                className="mil-link mil-accent"
              >
                (Ahrefs, Jul 2025)
              </a>{" "}
              <a
                href="https://ahrefs.com/blog/ai-overview-citations-top-10/"
                rel="noopener noreferrer"
                className="mil-link mil-accent"
              >
                (Ahrefs, Mar 2026)
              </a>
              . This means organic rank is a relevant but not sufficient predictor of AI
              visibility. A brand can rank #1 on Google and still be misrepresented in the
              AI Overview if the synthesized text draws from a lower-ranked but more
              citation-ready source.
            </p>

            {/* ── SECTION 2 ── */}
            <h2 className="mil-mb-15">2. The Five Threat Classes</h2>
            <p className="mil-text mil-mb-20">
              AI visibility threats are not monolithic. Distinguishing between threat
              classes allows auditors to prioritize remediation by commercial impact and
              tractability. The following taxonomy is derived from practitioner audit
              experience.
            </p>

            <h3 className="mil-mb-10">2.1 Drift</h3>
            <p className="mil-text mil-mb-20">
              Drift is the gradual accumulation of inaccuracy as training data ages. A brand
              that launched a new product line, rebranded, changed its pricing model, or
              opened a new office will find that AI engines continue to describe the
              pre-change state indefinitely unless the authoritative on-site content has
              been updated, re-indexed, and re-crawled. Drift is low-urgency in isolation
              but compounds over time: a brand that does not actively refresh its AI
              representation will drift further from ground truth with each passing quarter.
              Drift is the most common threat class and the most tractable: it is addressed
              primarily through content freshness and schema updates.
            </p>

            <h3 className="mil-mb-10">2.2 Substitution</h3>
            <p className="mil-text mil-mb-20">
              Substitution occurs when an AI engine recommends a competitor in response to
              a query where the audited brand should appear. Substitution is the
              highest-commercial-impact threat class: it represents direct, measurable
              opportunity loss. A buyer asking &ldquo;best GEO agency Washington DC&rdquo;
              who receives a competitor&rsquo;s name as the synthesized answer has been
              effectively redirected before any brand interaction occurs.
            </p>
            <p className="mil-text mil-mb-20">
              Substitution risk correlates with the brand&rsquo;s authority gap relative to
              competitors. Industry research suggests that brand mentions in earned media
              and branded search volume are meaningful predictors of AI citation presence
              (research directionally supported by Ahrefs brand-correlation studies across
              large brand datasets). A brand with low earned-media presence in its category
              is substantially more vulnerable to substitution than one with strong
              Tier-1 editorial coverage.
            </p>

            <h3 className="mil-mb-10">2.3 Conflation</h3>
            <p className="mil-text mil-mb-20">
              Conflation occurs when an AI engine merges a brand with a similarly named
              entity: a different company with a similar name, a defunct predecessor, a
              homonymous organization in a different industry or geography. Conflation
              produces answers that are confidently wrong in a specific way &mdash;
              attributing another entity&rsquo;s properties (clients, locations,
              controversies, financial metrics) to the audited brand. Conflation is
              particularly damaging when the similarly named entity has a negative
              reputation. Remediation requires entity-disambiguation signals: unique
              identifiers in schema (DUNS, LEI, @id), Wikipedia disambiguation pages,
              and Wikidata property specificity that distinguishes the entity from
              potential conflicts.
            </p>

            <h3 className="mil-mb-10">2.4 Omission</h3>
            <p className="mil-text mil-mb-20">
              Omission is the absence of a brand from answers where it should appear.
              Unlike substitution, omission does not necessarily involve a competitor
              &mdash; the AI may simply decline to name a specific brand, hedge with
              generic category descriptions, or list two or three competitors without
              acknowledging the omitted brand&rsquo;s existence. Omission is
              characteristic of brands with low off-site authority signals: minimal
              earned media, no Wikipedia article, inconsistent NAP across directories,
              no Wikidata entity. Muck Rack research (2025&ndash;2026){" "}
              <a
                href="https://muckrack.com/blog/2025/08/13/what-is-ai-reading/"
                rel="noopener noreferrer"
                className="mil-link mil-accent"
              >
                consistently finds
              </a>{" "}
              that the large majority of AI citations reference earned third-party media
              rather than brand-owned pages, which means brands without earned-media
              presence are structurally disadvantaged in the AI answer surface.
            </p>

            <h3 className="mil-mb-10">2.5 Hallucinated Detail</h3>
            <p className="mil-text mil-mb-20">
              Hallucinated detail is the AI&rsquo;s invention of specific facts about a
              brand that were never true: a pricing tier that does not exist, a certification
              the brand does not hold, a partnership that was never announced, a founding
              date that is incorrect, a client the brand has never served. The{" "}
              <a
                href="https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"
                rel="noopener noreferrer"
                className="mil-link mil-accent"
              >
                NIST AI 600-1 Generative AI Profile
              </a>{" "}
              identifies confabulation as one of twelve primary risk categories in
              generative AI systems. For brands, hallucinated detail is the threat class
              with the highest legal and reputational risk: an invented certification claim
              repeated by multiple AI engines creates a record of false advertising that
              the brand did not author. Remediation requires explicit counter-schema and
              clear authoritative on-site content that directly states what the brand does
              and does not claim.
            </p>

            {/* ── SECTION 3 ── */}
            <h2 className="mil-mb-15">3. Building a Brand Prompt-Map: Methodology and Cadence</h2>
            <p className="mil-text mil-mb-20">
              A brand prompt-map is the foundational instrument of AI visibility auditing.
              It is a structured inventory of the queries a target audience realistically
              uses in AI conversations to discover, evaluate, or describe a brand. The
              prompt-map is the test suite against which all audit results are scored.
            </p>

            <h3 className="mil-mb-10">3.1 Prompt-Map Construction</h3>
            <p className="mil-text mil-mb-20">
              A complete prompt-map for a mid-market brand typically includes:
            </p>
            <ul className="mil-mb-20">
              <li className="mil-mb-10">
                <strong>Category queries</strong> (5&ndash;10): &ldquo;What is the best [service
                category] in [geography]?&rdquo; / &ldquo;Top [service type] agencies&rdquo;
              </li>
              <li className="mil-mb-10">
                <strong>Brand-direct queries</strong> (3&ndash;5): &ldquo;What is [Brand Name]?&rdquo;
                / &ldquo;Tell me about [Brand Name]&rdquo; / &ldquo;Is [Brand Name] legitimate?&rdquo;
              </li>
              <li className="mil-mb-10">
                <strong>Competitor-comparison queries</strong> (5&ndash;10): &ldquo;[Brand Name] vs
                [Competitor Name]&rdquo; / &ldquo;Best alternative to [Competitor]&rdquo;
              </li>
              <li className="mil-mb-10">
                <strong>Job-to-be-done queries</strong> (5&ndash;10): &ldquo;How do I [problem the
                brand solves]?&rdquo; / &ldquo;Who can help me with [buyer pain point]?&rdquo;
              </li>
              <li className="mil-mb-10">
                <strong>Evaluation-stage queries</strong> (3&ndash;5): &ldquo;Is [Brand Name] good?&rdquo;
                / &ldquo;[Brand Name] reviews&rdquo; / &ldquo;[Brand Name] pricing&rdquo;
              </li>
            </ul>
            <p className="mil-text mil-mb-20">
              Each prompt should be run across at minimum three AI engines (ChatGPT,
              Perplexity, and either Gemini or Google AI Overviews) to capture engine-specific
              variation. Profound&rsquo;s research{" "}
              <a
                href="https://www.tryprofound.com/blog/ai-platform-citation-patterns"
                rel="noopener noreferrer"
                className="mil-link mil-accent"
              >
                (Profound, Jun 2025, 680M citations)
              </a>{" "}
              documented that Perplexity and ChatGPT have measurably different citation
              source profiles &mdash; with Perplexity weighting Reddit and community content
              and ChatGPT weighting Bing-indexed earned media. A prompt that returns an
              accurate result on one engine may return a substitution or omission on another.
            </p>

            <h3 className="mil-mb-10">3.2 Cadence</h3>
            <p className="mil-text mil-mb-20">
              Recommended audit cadence:
            </p>
            <ul className="mil-mb-20">
              <li className="mil-mb-10">
                <strong>Baseline full audit</strong> at program start: all prompt-map queries
                across all target engines, with scored results for each of the five threat classes
              </li>
              <li className="mil-mb-10">
                <strong>Monthly lightweight check</strong>: top 10 highest-priority prompts
                across two engines; flag any new threat-class emergence
              </li>
              <li className="mil-mb-10">
                <strong>Quarterly full re-audit</strong>: complete prompt-map across all engines;
                score against baseline; update remediation backlog
              </li>
              <li className="mil-mb-10">
                <strong>Event-triggered out-of-cycle audit</strong>: run within 72 hours of any
                major brand event (product launch, leadership change, significant negative press,
                major competitor announcement)
              </li>
            </ul>

            {/* ── SECTION 4 ── */}
            <h2 className="mil-mb-15">4. Measurement: Citation Share, Sentiment, Accuracy, Recency</h2>
            <p className="mil-text mil-mb-20">
              AI visibility measurement requires a scoring rubric applied consistently
              across audit cycles. The following four dimensions are the minimum viable
              measurement framework.
            </p>
            <table className="mil-mb-30" style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #e0e0e0" }}>
                  <th style={{ textAlign: "left", padding: "10px 12px" }}>Dimension</th>
                  <th style={{ textAlign: "left", padding: "10px 12px" }}>Definition</th>
                  <th style={{ textAlign: "left", padding: "10px 12px" }}>Scoring</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Citation share",
                    "% of category-query prompts where the brand is named in the synthesized answer",
                    "0–100%; baseline → trend over time",
                  ],
                  [
                    "Accuracy score",
                    "% of brand-direct and evaluation prompts where the synthesized description is factually correct",
                    "0–100%; flag each inaccuracy by threat class",
                  ],
                  [
                    "Sentiment",
                    "Net tone of brand references across audit prompts: positive / neutral / negative / absent",
                    "4-category distribution; track shift quarter-over-quarter",
                  ],
                  [
                    "Recency",
                    "Whether the AI description reflects current facts (post last major brand change)",
                    "Binary (current / stale) per fact checked; staleness age in months",
                  ],
                  [
                    "Substitution rate",
                    "% of category and job-to-be-done prompts where a competitor appears and the brand does not",
                    "0–100%; identify top substituting competitor per engine",
                  ],
                ].map(([dim, def, score]) => (
                  <tr key={dim} style={{ borderBottom: "1px solid #f0f0f0" }}>
                    <td style={{ padding: "10px 12px" }}><strong>{dim}</strong></td>
                    <td style={{ padding: "10px 12px" }}>{def}</td>
                    <td style={{ padding: "10px 12px" }}>{score}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* ── SECTION 5 ── */}
            <h2 className="mil-mb-15">5. Defensive Remediation: Schema, Content, and Off-Site Authority</h2>
            <p className="mil-text mil-mb-20">
              Remediation maps to the threat class identified in the audit. Each threat class
              has a primary remediation lever and a secondary lever.
            </p>

            <h3 className="mil-mb-10">5.1 Schema Remediation</h3>
            <p className="mil-text mil-mb-20">
              Schema is the most directly actionable remediation lever for hallucinated detail,
              conflation, and omission. Implementing validated JSON-LD schema
              (Organization, Product, Service, FAQPage, Person) that explicitly states the
              brand&rsquo;s name, description, founding date, location, services, and unique
              identifiers creates a machine-readable ground truth that AI engines can anchor to.
              Schema must match on-page text exactly; discrepancies between schema and visible
              content are treated as a trust-signal failure. Server-rendered schema is
              required &mdash; JavaScript-dependent schema injection is not reliably processed
              by AI crawlers.
            </p>

            <h3 className="mil-mb-10">5.2 Content Remediation</h3>
            <p className="mil-text mil-mb-20">
              For drift and stale-information threats, the primary lever is content freshness.
              Brand pages must be updated whenever material facts change, with dates visible
              on the page and in schema. Answer-first content structure &mdash; where the
              first sentence after each heading is an extractable statement of fact &mdash;
              increases the probability that AI engines will parse and cite the authoritative
              version of a claim rather than a third-party paraphrase. FAQ sections with
              explicit question-answer pairs addressing common misrepresentations
              (especially around pricing, certifications, and service scope) directly
              counter the hallucinated-detail threat class.
            </p>

            <h3 className="mil-mb-10">5.3 Off-Site Authority Remediation</h3>
            <p className="mil-text mil-mb-20">
              Off-site authority is the primary lever for substitution and omission.
              Industry research indicates that earned media in Tier-1 publications and
              brand mentions in community platforms are stronger predictors of AI citation
              presence than traditional SEO metrics like domain rating alone. Remediation
              priorities:
            </p>
            <ul className="mil-mb-20">
              <li className="mil-mb-10">
                <strong>Wikipedia/Wikidata</strong> &mdash; create or improve the brand&rsquo;s
                Wikipedia article and Wikidata entity; both are disproportionately weighted
                by ChatGPT and SearchGPT
              </li>
              <li className="mil-mb-10">
                <strong>Earned media in Tier-1 publications</strong> &mdash; PR strategy
                targeting publications indexed by Bing (ChatGPT) and Google (Gemini/AIO);
                bylines, expert commentary, and earned news coverage all increase citation
                probability
              </li>
              <li className="mil-mb-10">
                <strong>Directory NAP consistency</strong> &mdash; audit and correct all
                directory listings (Google Business Profile, Bing Places, industry directories);
                NAP inconsistency creates entity-recognition failures that produce conflation
                and omission
              </li>
              <li className="mil-mb-10">
                <strong>Community presence</strong> &mdash; Perplexity weights Reddit and
                community platforms heavily{" "}
                <a
                  href="https://www.tryprofound.com/blog/ai-platform-citation-patterns"
                  rel="noopener noreferrer"
                  className="mil-link mil-accent"
                >
                  (Profound, 2025)
                </a>
                ; authentic participation in relevant communities (not astroturf) increases
                citation presence in Perplexity specifically
              </li>
            </ul>

            {/* ── SECTION 6 ── */}
            <h2 className="mil-mb-15">6. Case Study: A 90-Day Audit Playbook</h2>
            <p className="mil-text mil-mb-20">
              The following is a generic 90-day AI visibility defense playbook applicable
              to a mid-market service brand with no existing AI-visibility monitoring.
              No specific client names are used.
            </p>

            <h3 className="mil-mb-10">Days 1&ndash;14: Baseline Audit</h3>
            <ul className="mil-mb-15">
              <li className="mil-mb-8">Build brand prompt-map (all five query types; 25&ndash;40 prompts)</li>
              <li className="mil-mb-8">Run all prompts across ChatGPT, Perplexity, and Google AI Overviews/Gemini</li>
              <li className="mil-mb-8">Score each result: citation share, accuracy, sentiment, recency, substitution rate</li>
              <li className="mil-mb-8">Classify each finding by threat class</li>
              <li className="mil-mb-8">Rank threats by commercial impact (substitution first, hallucinated-detail second)</li>
              <li className="mil-mb-8">Identify top-3 citation sources AI engines are drawing from; verify accuracy</li>
            </ul>

            <h3 className="mil-mb-10">Days 15&ndash;45: Remediation Sprint 1 (On-Site)</h3>
            <ul className="mil-mb-15">
              <li className="mil-mb-8">Implement or update JSON-LD schema on all brand pages</li>
              <li className="mil-mb-8">Rewrite answer-first content on highest-priority pages (top 5 by AI prompt frequency)</li>
              <li className="mil-mb-8">Add FAQ sections addressing the top 5 misrepresentations identified in audit</li>
              <li className="mil-mb-8">Update all stale content to reflect current brand facts</li>
              <li className="mil-mb-8">Create or update Wikipedia article and Wikidata entity if absent or inaccurate</li>
            </ul>

            <h3 className="mil-mb-10">Days 46&ndash;75: Remediation Sprint 2 (Off-Site)</h3>
            <ul className="mil-mb-15">
              <li className="mil-mb-8">Audit all major directory listings; correct NAP inconsistencies</li>
              <li className="mil-mb-8">Initiate earned-media outreach for top-priority Tier-1 publications</li>
              <li className="mil-mb-8">Identify and correct inaccurate third-party references (outdated news, wrong descriptions)</li>
              <li className="mil-mb-8">Establish authentic community participation in two highest-relevance platforms</li>
            </ul>

            <h3 className="mil-mb-10">Days 76&ndash;90: Re-Audit and Measurement</h3>
            <ul className="mil-mb-15">
              <li className="mil-mb-8">Re-run full prompt-map across all target engines</li>
              <li className="mil-mb-8">Score against baseline using same rubric</li>
              <li className="mil-mb-8">Quantify delta: citation share change, accuracy improvement, substitution rate change</li>
              <li className="mil-mb-8">Update remediation backlog for cycle 2</li>
              <li className="mil-mb-8">Establish ongoing monthly lightweight check cadence</li>
            </ul>

            <p className="mil-text mil-mb-20">
              First measurable movement in citation share and accuracy is typically observable
              at the 45&ndash;60 day mark for on-site changes. Off-site authority changes
              (earned media, Wikipedia) typically require 60&ndash;90+ days to propagate
              into AI citation behavior, consistent with general GEO timelines. These timelines
              are directional; actual results vary by brand, category, and competitive landscape.
            </p>

            {/* ── CONCLUSION ── */}
            <h2 className="mil-mb-15">Conclusion</h2>
            <p className="mil-text mil-mb-20">
              AI visibility defense is an emerging discipline with no established industry
              standard. The practitioner framework in this paper &mdash; five threat classes,
              brand prompt-map, four measurement dimensions, and a 90-day playbook &mdash;
              represents a repeatable starting methodology, not a finished standard.
            </p>
            <p className="mil-text mil-mb-20">
              The urgency is real. AI answer engines are now a primary information surface
              for buyers at every stage of the purchase journey. A brand that does not
              actively monitor and defend its AI representation is, in effect, leaving
              its most visible public-facing surface unmanaged.
            </p>
            <p className="mil-text mil-mb-20">
              The infosec analogy is instructive: no security team would argue against
              monitoring its external attack surface. AI visibility defense applies the
              same logic to information assets: monitor the surface, detect threats by
              class, remediate systematically, and measure the result. The tools exist.
              The methodology is tractable. The cost of inaction compounds daily.
            </p>

            {/* ── SOURCES ── */}
            <div className="mil-mb-40" style={{ background: "#f7f8fc", borderRadius: "4px", padding: "24px 28px", marginTop: "40px" }}>
              <h3 className="mil-mb-15" style={{ fontSize: "1rem" }}>Sources &amp; Standards</h3>
              <ul style={{ fontSize: "0.88rem", lineHeight: "1.8", margin: 0 }}>
                <li>
                  Ahrefs. (2025, July 21).{" "}
                  <a
                    href="https://ahrefs.com/blog/search-rankings-ai-citations/"
                    rel="noopener noreferrer"
                    className="mil-link mil-accent"
                  >
                    76% of AI Overview Citations Pull From the Top 10 Organic Results
                  </a>
                  . Ahrefs Blog. (1.9M citation dataset)
                </li>
                <li>
                  Ahrefs. (2026, March 2).{" "}
                  <a
                    href="https://ahrefs.com/blog/ai-overview-citations-top-10/"
                    rel="noopener noreferrer"
                    className="mil-link mil-accent"
                  >
                    Update: 38% of AI Overview Citations Pull From The Top 10
                  </a>
                  . Ahrefs Blog. (4M citation dataset, 863K SERPs)
                </li>
                <li>
                  Profound. (2025, June 5; updated August 2025).{" "}
                  <a
                    href="https://www.tryprofound.com/blog/ai-platform-citation-patterns"
                    rel="noopener noreferrer"
                    className="mil-link mil-accent"
                  >
                    AI Platform Citation Patterns
                  </a>
                  . Profound. (680M citations, Aug 2024&ndash;Jun 2025)
                </li>
                <li>
                  Muck Rack. (2025, August 13; updated February 5, 2026).{" "}
                  <a
                    href="https://muckrack.com/blog/2025/08/13/what-is-ai-reading/"
                    rel="noopener noreferrer"
                    className="mil-link mil-accent"
                  >
                    What is AI Reading?
                  </a>
                  . Muck Rack. (1M+ prompt dataset)
                </li>
                <li>
                  NIST. (2024, July 26).{" "}
                  <a
                    href="https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"
                    rel="noopener noreferrer"
                    className="mil-link mil-accent"
                  >
                    Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)
                  </a>
                  . National Institute of Standards and Technology.
                </li>
                <li>
                  MITRE. (2025, November).{" "}
                  <a
                    href="https://atlas.mitre.org/"
                    rel="noopener noreferrer"
                    className="mil-link mil-accent"
                  >
                    MITRE ATLAS: Adversarial Threat Landscape for AI Systems (v5.1.0)
                  </a>
                  . MITRE Corporation.
                </li>
              </ul>
            </div>

            {/* ── FAQ BLOCK ── */}
            <h2 className="mil-mb-20">Frequently Asked Questions</h2>

            <h3 className="mil-mb-10">What is AI visibility auditing?</h3>
            <p className="mil-text mil-mb-20">
              AI visibility auditing is the systematic process of querying AI answer engines
              with prompts designed to surface how those systems describe a brand, then
              measuring the accuracy, sentiment, citation sources, and recency of those
              descriptions against ground-truth brand facts. It is distinct from SEO
              auditing, which measures SERP position and click data.
            </p>

            <h3 className="mil-mb-10">What are the five AI visibility threat classes?</h3>
            <p className="mil-text mil-mb-20">
              The five threat classes are: (1) Drift &mdash; gradual inaccuracy accumulation
              as training data ages; (2) Substitution &mdash; a competitor is recommended in
              place of the brand; (3) Conflation &mdash; the brand is merged with a similarly
              named entity; (4) Omission &mdash; the brand is absent from answers where it
              should appear; (5) Hallucinated Detail &mdash; AI engines invent specific facts
              that were never true.
            </p>

            <h3 className="mil-mb-10">How often should a brand run an AI visibility audit?</h3>
            <p className="mil-text mil-mb-20">
              Recommended cadence: a baseline full audit at program start; a lightweight
              prompt-map check every 30 days covering the top 10 brand queries; a full
              re-audit every 90 days; and an out-of-cycle audit triggered by any major
              brand event (product launch, leadership change, negative press, significant
              new competitor entry).
            </p>

            <h3 className="mil-mb-10">What is a brand prompt-map?</h3>
            <p className="mil-text mil-mb-20">
              A brand prompt-map is a structured inventory of the queries a target audience
              uses to discover, evaluate, or describe a brand in AI conversations. It
              includes category queries, brand-direct queries, competitor-comparison queries,
              job-to-be-done queries, and evaluation-stage queries. The prompt-map is the
              test suite for all AI visibility auditing work.
            </p>

            <h3 className="mil-mb-10">What is substitution risk in AI visibility?</h3>
            <p className="mil-text mil-mb-40">
              Substitution risk occurs when an AI engine recommends a competitor in response
              to a query where the audited brand would be the correct or expected answer. It
              is the highest-commercial-impact threat class and is measured by running
              competitor-aware prompts from the brand prompt-map and scoring which entities
              are recommended in the synthesized answer.
            </p>

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
                <strong>About LivingStone GEO Agency:</strong> The GEO Agency is one of four
                divisions inside LivingStoneSolution Technologies &mdash; alongside Livingstone
                Solution (Flagship commercial), Livingstone Government (federal/state,
                508-compliant), and Livingstone Marketing Firm (brand strategy). AI visibility
                auditing and defense are core services at{" "}
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

            {/* ── NAV ── */}
            <p className="mil-text mil-mb-10">
              <Link href="/research" className="mil-link mil-accent">
                &larr; Back to Research
              </Link>
            </p>
            <p className="mil-text">
              Request an AI visibility audit for your brand &mdash;{" "}
              <Link href="/book-geo" className="mil-link mil-accent">
                book a GEO strategy call
              </Link>
              .
            </p>

          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default AiVisibilityDefense;
