import { useState, useEffect, useRef } from "react";
import { Formik } from "formik";
import Layouts from "@layouts/Layouts";
import SEO from "@components/SEO";
import PageBanner from "@/src/components/PageBanner";
import AppData from "@data/app.json";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { Accordion } from "../common/utilits";
import PageSchema from "@components/PageSchema";

/* ─── book-geo — page-level schema data ─────────────────────────────────────
 * Prices are sourced from the TIERS array on this page:
 *   Starter = $1,300/mo  (priceValue: "1,300", period: "/mo")
 *   Full    = $6,500/mo  (priceValue: "6,500", period: "/mo")
 *   Custom  = no numeric price (priceValue: "Custom", period: "")
 * No FAQPage here — book-geo is conversion-focused and has no visible Q&A block.
 * No AggregateRating — no compliant review set yet.
 * ──────────────────────────────────────────────────────────────────────────*/
const BOOK_GEO_SERVICE = {
  id: "https://thelivingstonesolution.com/book-geo#service",
  url: "https://thelivingstonesolution.com/book-geo",
  name: "Generative Engine Optimization (GEO) Service",
  serviceType: "Generative Engine Optimization",
  description:
    "Generative Engine Optimization (GEO) — make your business the answer ChatGPT, Claude, Perplexity, and Google AI Overviews recommend. Book a strategy call and get a free AI Visibility + Competitor Report.",
  areaServed: [
    "Washington, D.C.",
    "United States",
    "Worldwide",
  ],
  offers: [
    {
      id: "https://thelivingstonesolution.com/book-geo#offer-starter",
      name: "ChatGPT Visibility (Starter)",
      description:
        "Get your brand named inside ChatGPT — the fastest-growing answer engine in the market. Single-engine focus on ChatGPT and SearchGPT; first movement at 3 months, full results at 6 months. Includes: AI Visibility Audit (ChatGPT-focused), source and content optimization for ChatGPT retrieval, prompt-map coverage for your top buyer questions, schema and machine-readability packaging, monthly visibility reporting.",
      price: "1300",
      priceCurrency: "USD",
      unitText: "MON",
      availability: "https://schema.org/InStock",
    },
    {
      id: "https://thelivingstonesolution.com/book-geo#offer-full",
      name: "All Major AI Surfaces (Full)",
      description:
        "Total category ownership across every AI surface your customers use to decide. ChatGPT, Claude, Perplexity, Gemini, and Google AI Overviews. First movement at 3 months, full optimization at 7–9 months. Includes everything in Starter plus: Claude, Perplexity, Gemini, and Google AI Overviews coverage; SEO and off-site authority graph; expert quote attribution and evidence density engineering; full prompt-map tracking across all engines; priority support and dedicated strategist.",
      price: "6500",
      priceCurrency: "USD",
      unitText: "MON",
      availability: "https://schema.org/InStock",
    },
    {
      id: "https://thelivingstonesolution.com/book-geo#offer-custom",
      name: "Enterprise and Multi-Brand (Custom)",
      description:
        "For multi-location brands, multi-region rollouts, agencies, or unique scopes. Includes everything in Full plus multi-brand and multi-region orchestration, custom integrations and data feeds, white-label reporting, SLA, and executive reviews. Pricing scoped on the strategy call.",
      /* No numeric price — page shows 'Custom' with no dollar amount */
      availability: "https://schema.org/InStock",
    },
  ],
};

const BOOK_GEO_BREADCRUMB = [
  { name: "Home", url: "https://thelivingstonesolution.com/" },
  { name: "GEO Service", url: "https://thelivingstonesolution.com/book-geo" },
];

const CAL_URL = "https://cal.com/oliyad-deyasa-oiiybc/30min";

const TIERS = [
  {
    key: "starter",
    eyebrow: "Starter",
    title: "ChatGPT <span class='mil-thin'>Visibility</span>",
    priceSymbol: "$",
    priceValue: "1,300",
    period: "/mo",
    blurb:
      "Get your brand named inside ChatGPT — the fastest-growing answer engine in the market.",
    timeline: "First movement at 3 months · Full results at 6 months",
    features: [
      "AI Visibility Audit (ChatGPT-focused)",
      "Source & content optimization for ChatGPT retrieval",
      "Prompt-map coverage for your top buyer questions",
      "Schema + machine-readability packaging",
      "Monthly visibility reporting",
    ],
    recommended: false,
  },
  {
    key: "full",
    eyebrow: "Full · Recommended",
    title: "All Major <span class='mil-thin'>AI Surfaces</span>",
    priceSymbol: "$",
    priceValue: "6,500",
    period: "/mo",
    blurb:
      "Total category ownership across every AI surface your customers use to decide.",
    timeline: "First movement at 3 months · Full optimization at 7–9 months",
    features: [
      "Everything in Starter",
      "Claude · Perplexity · Gemini · Google AI Overviews coverage",
      "SEO + off-site authority graph (citations, earned media, reviews)",
      "Expert quote attribution + evidence density engineering",
      "Full prompt-map tracking across all engines",
      "Priority support + dedicated strategist",
    ],
    recommended: true,
  },
  {
    key: "custom",
    eyebrow: "Custom",
    title: "Enterprise & <span class='mil-thin'>Multi-Brand</span>",
    priceSymbol: "",
    priceValue: "Custom",
    period: "",
    blurb:
      "For multi-location brands, multi-region rollouts, agencies, or unique scopes.",
    timeline: "Scoped on the strategy call",
    features: [
      "Everything in Full",
      "Multi-brand / multi-region orchestration",
      "Custom integrations + data feeds",
      "White-label reporting available",
      "SLA + executive reviews",
    ],
    recommended: false,
  },
];

const METHOD = [
  {
    label: "01 — AI Visibility Audit",
    value:
      "We map where your brand currently stands across ChatGPT, Claude, Perplexity, and Google AI Overviews — and identify the exact customer prompts where you should be named but aren't.",
  },
  {
    label: "02 — Source & Content Optimization",
    value:
      "We restructure your site and content into the answer-first, evidence-dense format AI models trust and quote. Stats, expert attribution, schema, machine-readability — all engineered for citation.",
  },
  {
    label: "03 — SEO & Authority Building",
    value:
      "Off-site signals — earned media, Wikipedia/Wikidata anchoring, review consensus, NAP consistency — build the authority graph that makes AI models confident enough to recommend you.",
  },
  {
    label: "04 — Prompt-Map Coverage",
    value:
      "We track real customer questions across every major AI engine on an ongoing basis — not just keywords — and feed wins back into the optimization loop month after month.",
  },
];

const WHO = [
  "You sell something people ask AI about.",
  "You've already invested in your business.",
  "You're not being named by ChatGPT today.",
  "You understand the next decade is different.",
  "You're tired of outdated SEO playbooks.",
  "You want to be the recommendation — not the runner-up.",
];

const BookGEO = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedTier, setSelectedTier] = useState("full");
  const formRef = useRef(null);
  const calRef = useRef(null);

  // Wire up the site's existing accordion behavior to our methodology section
  useEffect(() => {
    Accordion();
  }, []);

  useEffect(() => {
    if (showSuccess) {
      const t = setTimeout(() => setShowSuccess(false), 6000);
      return () => clearTimeout(t);
    }
  }, [showSuccess]);

  const scrollToForm = (tierKey) => {
    setSelectedTier(tierKey);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToCal = () => {
    calRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Layouts>
      <SEO
        title="GEO Service — Get Found in AI Answers | The Livingstone Solution"
        description="Generative Engine Optimization (GEO) — make your business the answer ChatGPT, Claude, Perplexity, and Google AI Overviews recommend. Book a strategy call and get a free AI Visibility + Competitor Report."
        canonical="https://thelivingstonesolution.com/book-geo"
      />
      <PageSchema
        service={BOOK_GEO_SERVICE}
        breadcrumb={BOOK_GEO_BREADCRUMB}
      />

      <PageBanner
        pageTitle={"Book Your GEO <span class='mil-thin'>Strategy Call</span>"}
        breadTitle={"GEO Service"}
        anchorLabel={"Pick a time"}
        anchorLink={"#book"}
        align={"center"}
      />

      {/* booking — top of page */}
      <section id="book" ref={formRef} className="mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="container mil-p-120-90">
            <div className="mil-center mil-mb-90">
              <p className="mil-accent mil-up mil-mb-15" style={{ letterSpacing: "2px", textTransform: "uppercase", fontSize: "12px", fontWeight: 500 }}>
                ★ Free AI Visibility + Competitor Report with every call
              </p>
              <h2 className="mil-muted mil-up mil-mb-30">
                Book your <span className="mil-thin">strategy call</span> — see exactly where you stand in AI.
              </h2>
              <p className="mil-light-soft mil-up" style={{ maxWidth: "720px", margin: "0 auto" }}>
                Tell us about your business, then pick a time. Before the meeting we&rsquo;ll
                scan your visibility across ChatGPT, Claude, Perplexity, and Google AI Overviews
                — and walk you through the results live.
              </p>
            </div>

            <div className="row">
              {/* LEFT — form */}
              <div className="col-lg-6 mil-mb-60">
                <p className="mil-accent mil-up mil-mb-15" style={{ letterSpacing: "2px", textTransform: "uppercase", fontSize: "12px", fontWeight: 500 }}>
                  Step 1 — Tell us about you
                </p>
                <h3 className="mil-muted mil-up mil-mb-30">
                  Get your free <span className="mil-thin">visibility report</span>.
                </h3>
                <p className="mil-light-soft mil-up mil-mb-30">
                  A few details so we can scan your business and prep your custom
                  report before the call.
                </p>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    company: "",
                    website: "",
                    phone: "",
                    budget: "",
                    tier: selectedTier,
                    notes: "",
                  }}
                  enableReinitialize
                  validate={(values) => {
                    const errors = {};
                    if (!values.name) errors.name = "Required";
                    if (!values.email) errors.email = "Required";
                    else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    )
                      errors.email = "Invalid email";
                    if (!values.website)
                      errors.website = "We need your site to run the scan";
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    const data = new FormData();
                    Object.entries(values).forEach(([k, v]) =>
                      data.append(k, v)
                    );
                    data.append(
                      "_subject",
                      `New GEO lead — ${values.company || values.name}`
                    );

                    fetch(AppData.settings.formspreeURL, {
                      method: "POST",
                      body: data,
                      headers: { Accept: "application/json" },
                    })
                      .then((response) => {
                        if (response.ok) {
                          resetForm();
                          setShowSuccess(true);
                          scrollToCal();
                        } else {
                          alert(
                            "There was a problem submitting your form. Please email oliyad@thelivingstonefoundation.com."
                          );
                        }
                      })
                      .catch(() => {
                        alert(
                          "There was a problem submitting your form. Please email oliyad@thelivingstonefoundation.com."
                        );
                      })
                      .finally(() => setSubmitting(false));
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit} className="row">
                      <div className="col-md-6 mil-up">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name *"
                          required
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="col-md-6 mil-up">
                        <input
                          type="email"
                          name="email"
                          placeholder="Work email *"
                          required
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="col-md-6 mil-up">
                        <input
                          type="text"
                          name="company"
                          placeholder="Company"
                          value={values.company}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="col-md-6 mil-up">
                        <input
                          type="text"
                          name="website"
                          placeholder="Website (for the scan) *"
                          required
                          value={values.website}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="col-md-6 mil-up">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone (optional)"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="col-md-6 mil-up">
                        <select
                          name="budget"
                          value={values.budget}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={selectStyle}
                        >
                          <option value="">Monthly budget</option>
                          <option>Under $1,300/mo</option>
                          <option>$1,300 – $3,000/mo</option>
                          <option>$3,000 – $6,500/mo</option>
                          <option>$6,500+/mo</option>
                          <option>Not sure yet</option>
                        </select>
                      </div>
                      <div className="col-lg-12 mil-up">
                        <select
                          name="tier"
                          value={values.tier}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={selectStyle}
                        >
                          <option value="starter">
                            Starter — ChatGPT Visibility ($1,300/mo)
                          </option>
                          <option value="full">
                            Full — All Major AI Surfaces ($6,500/mo)
                          </option>
                          <option value="custom">Custom / Enterprise</option>
                          <option value="not-sure">
                            Not sure — help me figure it out
                          </option>
                        </select>
                      </div>
                      <div className="col-lg-12 mil-up">
                        <textarea
                          name="notes"
                          placeholder="Anything we should know? Top competitors, current SEO setup, key markets, etc."
                          value={values.notes}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{ height: "180px" }}
                        />
                      </div>
                      <div className="col-lg-12">
                        <p className="mil-light-soft mil-up mil-mb-30">
                          <span className="mil-accent">★</span> We never share
                          your information with third parties.
                        </p>
                        <div className="mil-up">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mil-button mil-arrow-place"
                          >
                            <span>
                              {isSubmitting
                                ? "Sending…"
                                : "Send & continue to booking"}
                            </span>
                            <ArrowIcon />
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>

              {/* RIGHT — Cal.com */}
              <div className="col-lg-6 mil-mb-60" ref={calRef}>
                <p className="mil-accent mil-up mil-mb-15" style={{ letterSpacing: "2px", textTransform: "uppercase", fontSize: "12px", fontWeight: 500 }}>
                  Step 2 — Pick a time
                </p>
                <h3 className="mil-muted mil-up mil-mb-30">
                  Book your <span className="mil-thin">30-minute</span> strategy call.
                </h3>
                <p className="mil-light-soft mil-up mil-mb-30">
                  Pick any open slot. We&rsquo;ll bring your visibility report and a
                  live walkthrough.
                </p>
                <div
                  className="mil-up"
                  style={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    background: "#fff",
                  }}
                >
                  <iframe
                    src={CAL_URL}
                    title="Book a GEO strategy call"
                    loading="lazy"
                    allow="camera; microphone; autoplay; fullscreen"
                    style={{
                      width: "100%",
                      height: "700px",
                      border: 0,
                      display: "block",
                    }}
                  />
                </div>
                <p className="mil-light-soft mil-up mil-mb-30" style={{ marginTop: "20px", fontSize: "13px" }}>
                  Can&rsquo;t see the booking widget?{" "}
                  <a
                    href={CAL_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mil-accent"
                    style={{ textDecoration: "underline" }}
                  >
                    Open it in a new tab →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* booking end */}

      {/* what is GEO */}
      <section>
        <div className="container mil-p-120-90">
          <div className="row justify-content-between">
            <div className="col-lg-4 mil-relative mil-mb-90">
              <p className="mil-accent mil-up mil-mb-15" style={{ letterSpacing: "2px", textTransform: "uppercase", fontSize: "12px", fontWeight: 500 }}>
                Why GEO
              </p>
              <h3 className="mil-up mil-mb-30">
                Make your business the <span className="mil-thin">answer</span> when customers ask AI.
              </h3>
              <p className="mil-up mil-mb-30">
                80% of high-intent search is moving to AI assistants. Customers get{" "}
                <strong>one definitive answer</strong>, not ten links. If your business
                isn&rsquo;t named in that answer, you&rsquo;re invisible at the moment
                of decision.
              </p>
              <p className="mil-up mil-mb-30">
                Generative Engine Optimization (GEO) engineers your site, content, and
                reputation so AI models trust and cite you first — beyond traditional
                SEO, designed for the way people actually search now.
              </p>
              <div className="mil-up">
                <a
                  href="#pricing"
                  className="mil-link mil-dark mil-arrow-place"
                >
                  <span>See pricing</span>
                  <ArrowIcon />
                </a>
              </div>
            </div>

            {/* methodology accordion — uses site's existing mil-accordion */}
            <div className="col-lg-6">
              <p className="mil-accent mil-up mil-mb-15" style={{ letterSpacing: "2px", textTransform: "uppercase", fontSize: "12px", fontWeight: 500 }}>
                Our methodology
              </p>
              <h4 className="mil-up mil-mb-30">
                Four phases. <span className="mil-thin">One outcome.</span>
              </h4>
              {METHOD.map((item, key) => (
                <div className="mil-accordion-group mil-up" key={`method-${key}`}>
                  <div className="mil-accordion-menu">
                    <p className="mil-accordion-head">{item.label}</p>
                    <div className="mil-symbol mil-h3">
                      <div className="mil-plus">+</div>
                      <div className="mil-minus">-</div>
                    </div>
                  </div>
                  <div className="mil-accordion-content mil-text">
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* pricing — uses mil-dark-bg + mil-price-card to match site Pricing pattern */}
      <section id="pricing" className="mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="container mil-p-120-120">
            <div className="mil-center mil-mb-90">
              <p className="mil-accent mil-up mil-mb-15" style={{ letterSpacing: "2px", textTransform: "uppercase", fontSize: "12px", fontWeight: 500 }}>
                Pricing
              </p>
              <h2 className="mil-muted mil-up mil-mb-30">
                Choose your <span className="mil-thin">AI dominance path</span>.
              </h2>
              <p className="mil-light-soft mil-up">
                Two proven paths plus a custom option. One destination: market leadership.
              </p>
            </div>

            {TIERS.map((tier, key) => (
              <a
                key={`tier-${tier.key}`}
                href="#book"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToForm(tier.key);
                }}
                className="mil-price-card mil-choose mil-accent-cursor mil-up"
                style={tier.recommended ? recommendedStyle : undefined}
              >
                <div className="row align-items-center">
                  <div className="col-lg-2">
                    <div className="mil-price-number mil-mb-30">
                      {tier.priceSymbol && (
                        <span className="mil-muted mil-thin">{tier.priceSymbol}</span>
                      )}
                      <span className="mil-accent">{tier.priceValue}</span>
                      {tier.period && (
                        <span className="mil-muted mil-thin" style={{ fontSize: "16px", marginLeft: "4px" }}>
                          {tier.period}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <p className="mil-accent mil-mb-15" style={{ letterSpacing: "2px", textTransform: "uppercase", fontSize: "11px", fontWeight: 500 }}>
                      {tier.eyebrow}
                    </p>
                    <h5
                      className="mil-muted mil-mb-15"
                      dangerouslySetInnerHTML={{ __html: tier.title }}
                    />
                    <p className="mil-light-soft" style={{ fontSize: "13px" }}>
                      {tier.timeline}
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <p className="mil-light-soft mil-mb-15">{tier.blurb}</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {tier.features.slice(0, 4).map((f, i) => (
                        <li
                          key={i}
                          className="mil-light-soft"
                          style={{
                            fontSize: "13px",
                            padding: "4px 0 4px 18px",
                            position: "relative",
                          }}
                        >
                          <span
                            className="mil-accent"
                            style={{ position: "absolute", left: 0, top: "4px" }}
                          >
                            ✓
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-lg-2">
                    <div className="mil-adaptive-right mil-mb-30">
                      <div className="mil-button mil-icon-button-sm mil-arrow-place">
                        <ArrowIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}

            <div className="mil-center mil-mt-60">
              <a
                href="#book"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToForm("full");
                }}
                className="mil-button mil-arrow-place"
              >
                <span>Book your strategy call</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* who it's for */}
      <section>
        <div className="container mil-p-120-90">
          <div className="mil-center mil-mb-90">
            <p className="mil-accent mil-up mil-mb-15" style={{ letterSpacing: "2px", textTransform: "uppercase", fontSize: "12px", fontWeight: 500 }}>
              Who this is for
            </p>
            <h3 className="mil-up mil-mb-30">
              GEO is built for businesses that have <span className="mil-thin">something worth finding</span>.
            </h3>
          </div>
          <div className="row">
            {WHO.map((line, key) => (
              <div className="col-md-6 col-lg-4 mil-mb-30" key={`who-${key}`}>
                <div
                  className="mil-up"
                  style={{
                    padding: "30px",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "8px",
                    height: "100%",
                  }}
                >
                  <p
                    className="mil-accent mil-mb-15"
                    style={{
                      fontSize: "24px",
                      fontWeight: 500,
                      lineHeight: 1,
                    }}
                  >
                    0{key + 1}
                  </p>
                  <p>{line}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mil-center mil-mt-60">
            <p className="mil-up" style={{ maxWidth: "640px", margin: "0 auto", fontSize: "18px" }}>
              The window to claim your category is open right now —{" "}
              <em className="mil-accent">don&rsquo;t let a competitor take your spot.</em>
            </p>
          </div>
        </div>
      </section>

      {/* final CTA */}
      <section className="mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="container mil-p-120-120">
            <div className="mil-center">
              <h2 className="mil-muted mil-up mil-mb-30">
                Ready to be <span className="mil-thin">the answer?</span>
              </h2>
              <p className="mil-light-soft mil-up mil-mb-60" style={{ maxWidth: "640px", margin: "0 auto 60px" }}>
                Schedule your strategy alignment call. We&rsquo;ll bring your AI Visibility
                Audit, walk you through your competitive position, and map your fastest path
                to category ownership.
              </p>
              <div className="mil-center mil-up">
                <a
                  href="#book"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToForm("full");
                  }}
                  className="mil-button mil-arrow-place"
                >
                  <span>Book your strategy call</span>
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* success toast */}
      {showSuccess && (
        <div
          onClick={() => setShowSuccess(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.78)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "50px 40px",
              maxWidth: "460px",
              textAlign: "center",
              boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "#E92518",
                color: "#fff",
                fontSize: "34px",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              ✓
            </div>
            <h4 className="mil-mb-15">You&rsquo;re in.</h4>
            <p className="mil-mb-30" style={{ color: "rgba(0,0,0,0.6)" }}>
              We&rsquo;ve received your details and started your AI Visibility
              Report. Now pick a time below and we&rsquo;ll see you on the call.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mil-button mil-arrow-place"
            >
              <span>Got it — pick a time</span>
              <ArrowIcon />
            </button>
          </div>
        </div>
      )}
    </Layouts>
  );
};

const selectStyle = {
  height: "70px",
  padding: "0 30px",
  width: "100%",
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "2px",
  fontWeight: 500,
  fontFamily: "inherit",
  color: "#fff",
  border: "none",
  borderBottom: "solid 1px rgba(255,255,255,0.2)",
  marginBottom: "30px",
  background: "transparent",
  appearance: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",
  backgroundImage:
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23E92518'><path d='M7 10l5 5 5-5z'/></svg>\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 20px center",
  backgroundSize: "20px",
  cursor: "pointer",
};

const recommendedStyle = {
  borderTop: "solid 2px #E92518",
  borderBottom: "solid 2px #E92518",
};

export default BookGEO;
