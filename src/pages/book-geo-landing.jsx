import { useState, useEffect, useRef } from "react";
import { Formik } from "formik";
import Layouts from "@/src/layouts/Layouts";
import SEO from "@components/SEO";
import PageBannerDark from "@/src/components/PageBannerDark";
import AppData from "@data/app.json";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const NAVY = "#1a2b5e";
const GOLD = "#c9a961";
const INK = "#0c1b3a";

const TIERS = [
  {
    key: "starter",
    eyebrow: "STARTER",
    name: "ChatGPT Visibility",
    price: "$1,300",
    period: "/mo",
    timeline: "First movement at 3 months · Full results at 6 months",
    blurb: "Get your brand named inside ChatGPT — the fastest-growing answer engine in the market.",
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
    eyebrow: "FULL",
    name: "All Major AI Surfaces",
    price: "$6,500",
    period: "/mo",
    timeline: "First movement at 3 months · Full optimization at 7–9 months",
    blurb: "Total category ownership across every AI surface your customers use to decide.",
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
    eyebrow: "CUSTOM",
    name: "Enterprise & Multi-Brand",
    price: "Custom",
    period: "",
    timeline: "Scoped on the strategy call",
    blurb: "For multi-location brands, multi-region rollouts, agencies, or unique scopes.",
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

const CAL_URL = "https://cal.com/oliyad-deyasa-oiiybc/30min";

const BookGEOLanding = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedTier, setSelectedTier] = useState("full");
  const formRef = useRef(null);
  const calRef = useRef(null);

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
        canonical="https://thelivingstonesolution.com/book-geo-landing"
      />

      <PageBannerDark
        pageTitle={"Book Your GEO Strategy Call"}
        breadTitle={"GEO Service"}
        anchorLabel={"Pick a time"}
        anchorLink={"#book"}
        paddingBottom={1}
        align={"center"}
      />

      {/* LEAD FORM + CAL EMBED — moved to top so visitors book first */}
      <section id="book" className="geo-book geo-book--top" ref={formRef}>
        <div className="container">
          <div className="geo-top-intro">
            <span className="geo-eyebrow">★ FREE AI VISIBILITY + COMPETITOR REPORT WITH EVERY CALL</span>
            <h1 className="geo-h1 geo-center">
              Book your <span className="geo-italic">strategy call</span> — see exactly where you stand in AI.
            </h1>
            <p className="geo-sub geo-center geo-top-sub">
              Tell us about your business, then pick a time. Before the meeting we&rsquo;ll
              scan your visibility across ChatGPT, Claude, Perplexity, and Google AI Overviews
              — and walk you through the results live.
            </p>
          </div>
          <div className="geo-book-grid">
            {/* LEFT: form */}
            <div className="geo-form-wrap">
              <span className="geo-eyebrow">STEP 1 · TELL US ABOUT YOU</span>
              <h2 className="geo-h2">Get your free visibility report.</h2>
              <p className="geo-sub">
                We need a few details so we can scan your business and prep your
                custom report before the call.
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
                  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
                    errors.email = "Invalid email";
                  if (!values.website) errors.website = "We need your site to run the scan";
                  return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  const data = new FormData();
                  Object.entries(values).forEach(([k, v]) => data.append(k, v));
                  data.append("_subject", `New GEO lead — ${values.company || values.name}`);

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
                        alert("There was a problem submitting your form. Please email oliyad@thelivingstonesolution.com.");
                      }
                    })
                    .catch(() => {
                      alert("There was a problem submitting your form. Please email oliyad@thelivingstonesolution.com.");
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
                  <form onSubmit={handleSubmit} className="geo-form">
                    <div className="geo-field-row">
                      <div className="geo-field">
                        <label>Name *</label>
                        <input
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                        />
                        {errors.name && touched.name && (
                          <span className="geo-err">{errors.name}</span>
                        )}
                      </div>
                      <div className="geo-field">
                        <label>Work email *</label>
                        <input
                          name="email"
                          type="email"
                          placeholder="you@company.com"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                        />
                        {errors.email && touched.email && (
                          <span className="geo-err">{errors.email}</span>
                        )}
                      </div>
                    </div>

                    <div className="geo-field-row">
                      <div className="geo-field">
                        <label>Company</label>
                        <input
                          name="company"
                          type="text"
                          placeholder="Company name"
                          value={values.company}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="geo-field">
                        <label>Website *</label>
                        <input
                          name="website"
                          type="text"
                          placeholder="yourcompany.com"
                          value={values.website}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                        />
                        {errors.website && touched.website && (
                          <span className="geo-err">{errors.website}</span>
                        )}
                      </div>
                    </div>

                    <div className="geo-field-row">
                      <div className="geo-field">
                        <label>Phone</label>
                        <input
                          name="phone"
                          type="tel"
                          placeholder="(optional but speeds things up)"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="geo-field">
                        <label>Monthly budget</label>
                        <select
                          name="budget"
                          value={values.budget}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">Select a range</option>
                          <option>Under $1,300/mo</option>
                          <option>$1,300 – $3,000/mo</option>
                          <option>$3,000 – $6,500/mo</option>
                          <option>$6,500+/mo</option>
                          <option>Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    <div className="geo-field">
                      <label>Interested in</label>
                      <select
                        name="tier"
                        value={values.tier}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="starter">Starter — ChatGPT Visibility ($1,300/mo)</option>
                        <option value="full">Full — All Major AI Surfaces ($6,500/mo)</option>
                        <option value="custom">Custom / Enterprise</option>
                        <option value="not-sure">Not sure — help me figure it out</option>
                      </select>
                    </div>

                    <div className="geo-field">
                      <label>Anything we should know? (optional)</label>
                      <textarea
                        name="notes"
                        rows={3}
                        placeholder="Top competitors, current SEO setup, key markets, etc."
                        value={values.notes}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div className="geo-form-foot">
                      <p className="geo-fine">
                        <span className="geo-accent">★</span> We never share
                        your information with third parties.
                      </p>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="geo-btn geo-btn--gold geo-btn--lg"
                      >
                        {isSubmitting ? "Sending…" : "Send & continue to booking →"}
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>

            {/* RIGHT: Cal.com embed */}
            <div className="geo-cal-wrap" ref={calRef}>
              <span className="geo-eyebrow">STEP 2 · PICK A TIME</span>
              <h2 className="geo-h2">Book your 30-minute strategy call.</h2>
              <p className="geo-sub">
                Pick any open slot. We&rsquo;ll bring your visibility report and
                a live walkthrough.
              </p>
              <div className="geo-cal-frame">
                <iframe
                  src={CAL_URL}
                  title="Book a GEO strategy call"
                  loading="lazy"
                  allow="camera; microphone; autoplay; fullscreen"
                />
              </div>
              <p className="geo-cal-fallback">
                Can&rsquo;t see the booking widget?{" "}
                <a href={CAL_URL} target="_blank" rel="noreferrer">
                  Open it in a new tab →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HERO VALUE PROP */}
      <section className="geo-hero">
        <div className="container">
          <div className="geo-hero-grid">
            <div className="geo-hero-copy">
              <span className="geo-eyebrow">★ BE THE ANSWER. LEAD THE FUTURE.</span>
              <h1 className="geo-h1">
                Make your business the <span className="geo-italic">answer</span>{" "}
                when customers ask AI.
              </h1>
              <p className="geo-lede">
                80% of high-intent search is moving to AI assistants. Customers
                get <strong>one definitive answer</strong>, not ten links. If
                your business isn&rsquo;t named in that answer, you&rsquo;re
                invisible at the moment of decision.
              </p>
              <p className="geo-lede geo-lede--muted">
                Generative Engine Optimization (GEO) engineers your site,
                content, and reputation so AI models trust and cite you first.
              </p>
              <div className="geo-cta-row">
                <button className="geo-btn geo-btn--gold" onClick={scrollToCal}>
                  Book a strategy call
                </button>
                <a href="#pricing" className="geo-btn geo-btn--ghost">
                  See pricing
                </a>
              </div>
            </div>
            <div className="geo-hero-card">
              <div className="geo-gift-badge">FREE WITH EVERY CALL</div>
              <h3 className="geo-card-title">
                Your AI Visibility + Competitor Report
              </h3>
              <p className="geo-card-sub">
                Before our meeting, we run your business through our proprietary
                AI Visibility Scanner and walk you through the results live.
              </p>
              <ul className="geo-check-list">
                <li>
                  <strong>Your visibility score</strong> across ChatGPT, Claude,
                  Perplexity, and Google AI Overviews
                </li>
                <li>
                  <strong>The exact prompts</strong> where your business should
                  be named but isn&rsquo;t
                </li>
                <li>
                  <strong>Your top competitors</strong> who <em>are</em> getting
                  cited — and why
                </li>
                <li>
                  <strong>Your biggest gaps</strong> and the fastest wins to
                  close them
                </li>
              </ul>
              <p className="geo-card-foot">
                No cost. No obligation. Yours to keep whether you hire us or
                not.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY STRIP */}
      <section className="geo-method">
        <div className="container">
          <h2 className="geo-h2 geo-center">Our Core Methodology</h2>
          <div className="geo-divider" />
          <div className="geo-method-grid">
            {[
              ["1", "AI Visibility Audit", "Mapping your standing and identifying real customer prompts."],
              ["2", "Source & Content Optimization", "Restructuring your site for AI trust and quoting."],
              ["3", "SEO & Authority Building", "Off-site signals that build AI confidence."],
              ["4", "Prompt-Map Coverage", "Tracking real questions — not just keywords."],
            ].map(([n, t, d]) => (
              <div className="geo-method-card" key={n}>
                <div className="geo-method-num">{n}</div>
                <div>
                  <h4 className="geo-method-title">{t}</h4>
                  <p className="geo-method-desc">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="geo-pricing">
        <div className="container">
          <h2 className="geo-h2 geo-center">Choose Your AI Dominance Path</h2>
          <p className="geo-sub geo-center">
            Two proven paths plus a custom option. One destination: market
            leadership.
          </p>
          <div className="geo-divider" />

          <div className="geo-pricing-grid">
            {TIERS.map((tier) => (
              <div
                key={tier.key}
                className={`geo-tier ${tier.recommended ? "geo-tier--recommended" : ""}`}
              >
                {tier.recommended && (
                  <div className="geo-tier-flag">★ RECOMMENDED</div>
                )}
                <div className="geo-tier-eyebrow">{tier.eyebrow}</div>
                <h3 className="geo-tier-name">{tier.name}</h3>
                <div className="geo-tier-price">
                  <span className="geo-tier-amount">{tier.price}</span>
                  {tier.period && (
                    <span className="geo-tier-period">{tier.period}</span>
                  )}
                </div>
                <p className="geo-tier-blurb">{tier.blurb}</p>
                <div className="geo-tier-timeline">
                  <span className="geo-cal-icon">📅</span> {tier.timeline}
                </div>
                <ul className="geo-tier-features">
                  {tier.features.map((f, i) => (
                    <li key={i}>
                      <span className="geo-check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`geo-btn ${tier.recommended ? "geo-btn--gold" : "geo-btn--navy"} geo-btn--full`}
                  onClick={() => scrollToForm(tier.key)}
                >
                  Book strategy call
                </button>
                <p className="geo-tier-foot">
                  + Free AI Visibility Report included
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="geo-who">
        <div className="container">
          <h2 className="geo-h2 geo-center">Who This Is For</h2>
          <p className="geo-sub geo-center">
            GEO is built for businesses that already have something worth
            finding.
          </p>
          <div className="geo-divider" />
          <div className="geo-who-grid">
            {[
              "You sell something people ask AI about.",
              "You&rsquo;ve already invested in your business.",
              "You&rsquo;re not being named by ChatGPT today.",
              "You understand the next decade is different.",
              "You&rsquo;re tired of outdated SEO playbooks.",
              "You want to be the recommendation — not the runner-up.",
            ].map((t, i) => (
              <div key={i} className="geo-who-card">
                <span className="geo-who-num">{i + 1}</span>
                <p dangerouslySetInnerHTML={{ __html: t }} />
              </div>
            ))}
          </div>
          <div className="geo-who-banner">
            The window to claim your category is open right now —{" "}
            <em>don&rsquo;t let a competitor take your spot.</em>
          </div>
        </div>
      </section>

      {/* SUCCESS TOAST */}
      {showSuccess && (
        <div className="geo-toast" onClick={() => setShowSuccess(false)}>
          <div className="geo-toast-card" onClick={(e) => e.stopPropagation()}>
            <div className="geo-toast-icon">✓</div>
            <h3>You&rsquo;re in.</h3>
            <p>
              We&rsquo;ve received your details and started your AI Visibility
              Report. Now pick a time below and we&rsquo;ll see you on the call.
            </p>
            <button
              className="geo-btn geo-btn--gold"
              onClick={() => setShowSuccess(false)}
            >
              Got it — pick a time
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        :global(:root) {
          --geo-navy: ${NAVY};
          --geo-gold: ${GOLD};
          --geo-ink: ${INK};
        }
        .geo-eyebrow {
          display: inline-block;
          color: ${GOLD};
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .geo-h1 {
          font-family: Georgia, "Times New Roman", serif;
          color: ${NAVY};
          font-size: clamp(36px, 5vw, 64px);
          line-height: 1.05;
          margin: 0 0 24px;
          font-weight: 400;
        }
        .geo-italic {
          font-style: italic;
          color: ${GOLD};
        }
        .geo-h2 {
          font-family: Georgia, "Times New Roman", serif;
          color: ${NAVY};
          font-size: clamp(28px, 3.5vw, 44px);
          margin: 0 0 12px;
          font-weight: 400;
        }
        .geo-center {
          text-align: center;
        }
        .geo-sub {
          color: #5a6378;
          font-size: 18px;
          line-height: 1.5;
          margin: 0 0 24px;
        }
        .geo-divider {
          width: 80px;
          height: 3px;
          background: ${GOLD};
          margin: 16px auto 48px;
          border-radius: 2px;
        }
        .geo-lede {
          color: #3b4660;
          font-size: 18px;
          line-height: 1.65;
          margin: 0 0 16px;
        }
        .geo-lede--muted {
          color: #6b7388;
          font-size: 16px;
        }

        /* HERO */
        .geo-hero {
          background: linear-gradient(180deg, #fafbff 0%, #fff 100%);
          padding: 80px 0 60px;
        }
        .geo-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 56px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .geo-hero-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }
        .geo-cta-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 28px;
        }
        .geo-hero-card {
          background: ${NAVY};
          color: #fff;
          border-radius: 18px;
          padding: 36px 32px;
          box-shadow: 0 24px 60px rgba(26, 43, 94, 0.25);
          position: relative;
        }
        .geo-gift-badge {
          position: absolute;
          top: -14px;
          left: 32px;
          background: ${GOLD};
          color: ${NAVY};
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.1em;
          padding: 8px 14px;
          border-radius: 999px;
        }
        .geo-card-title {
          font-family: Georgia, serif;
          font-size: 26px;
          margin: 6px 0 12px;
          color: #fff;
          font-weight: 400;
        }
        .geo-card-sub {
          color: #c8d0e4;
          font-size: 15px;
          line-height: 1.55;
          margin: 0 0 18px;
        }
        .geo-check-list {
          list-style: none;
          padding: 0;
          margin: 0 0 18px;
        }
        .geo-check-list li {
          position: relative;
          padding: 8px 0 8px 26px;
          font-size: 15px;
          line-height: 1.5;
          color: #e8eaf3;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .geo-check-list li:last-child {
          border-bottom: none;
        }
        .geo-check-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 8px;
          color: ${GOLD};
          font-weight: 700;
        }
        .geo-card-foot {
          color: ${GOLD};
          font-size: 13px;
          font-weight: 600;
          margin: 0;
          text-align: center;
          padding-top: 6px;
        }

        /* BUTTONS */
        .geo-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.02em;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.15s ease, box-shadow 0.15s ease,
            background 0.15s ease;
        }
        .geo-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
        }
        .geo-btn--gold {
          background: ${GOLD};
          color: ${NAVY};
        }
        .geo-btn--gold:hover {
          background: #b9994f;
        }
        .geo-btn--navy {
          background: ${NAVY};
          color: #fff;
        }
        .geo-btn--ghost {
          background: transparent;
          color: ${NAVY};
          border: 2px solid ${NAVY};
          padding: 12px 26px;
        }
        .geo-btn--full {
          width: 100%;
        }
        .geo-btn--lg {
          padding: 16px 32px;
          font-size: 16px;
        }

        /* METHODOLOGY */
        .geo-method {
          background: #fff;
          padding: 80px 0;
        }
        .geo-method-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 700px) {
          .geo-method-grid {
            grid-template-columns: 1fr;
          }
        }
        .geo-method-card {
          background: #fafbff;
          border: 1px solid #e6e9f4;
          border-radius: 14px;
          padding: 26px 28px;
          display: flex;
          gap: 18px;
          align-items: flex-start;
        }
        .geo-method-num {
          font-family: Georgia, serif;
          font-size: 32px;
          color: ${GOLD};
          font-weight: 400;
          line-height: 1;
          min-width: 36px;
        }
        .geo-method-title {
          color: ${NAVY};
          font-family: Georgia, serif;
          font-size: 20px;
          margin: 0 0 6px;
          font-weight: 400;
        }
        .geo-method-desc {
          color: #5a6378;
          font-size: 15px;
          line-height: 1.5;
          margin: 0;
        }

        /* PRICING */
        .geo-pricing {
          background: linear-gradient(180deg, #fafbff 0%, #f1f3fb 100%);
          padding: 90px 0;
        }
        .geo-pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: stretch;
        }
        @media (max-width: 1000px) {
          .geo-pricing-grid {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin: 0 auto;
          }
        }
        .geo-tier {
          background: #fff;
          border-radius: 18px;
          padding: 36px 30px 32px;
          box-shadow: 0 12px 36px rgba(26, 43, 94, 0.08);
          display: flex;
          flex-direction: column;
          position: relative;
          border: 1px solid #e6e9f4;
        }
        .geo-tier--recommended {
          background: ${NAVY};
          color: #fff;
          transform: translateY(-8px);
          box-shadow: 0 24px 60px rgba(26, 43, 94, 0.28);
          border-color: ${GOLD};
        }
        @media (max-width: 1000px) {
          .geo-tier--recommended {
            transform: none;
          }
        }
        .geo-tier-flag {
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          background: ${GOLD};
          color: ${NAVY};
          padding: 8px 18px;
          border-radius: 999px;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.12em;
          white-space: nowrap;
        }
        .geo-tier-eyebrow {
          color: ${GOLD};
          font-size: 12px;
          letter-spacing: 0.16em;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .geo-tier--recommended .geo-tier-eyebrow {
          color: ${GOLD};
        }
        .geo-tier-name {
          font-family: Georgia, serif;
          font-size: 26px;
          font-weight: 400;
          margin: 0 0 16px;
          color: inherit;
        }
        .geo-tier:not(.geo-tier--recommended) .geo-tier-name {
          color: ${NAVY};
        }
        .geo-tier-price {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin: 6px 0 14px;
        }
        .geo-tier-amount {
          font-family: Georgia, serif;
          font-size: 44px;
          font-weight: 600;
          color: inherit;
        }
        .geo-tier:not(.geo-tier--recommended) .geo-tier-amount {
          color: ${NAVY};
        }
        .geo-tier-period {
          font-size: 16px;
          color: #8d96b0;
        }
        .geo-tier--recommended .geo-tier-period {
          color: #c8d0e4;
        }
        .geo-tier-blurb {
          font-size: 15px;
          line-height: 1.5;
          margin: 0 0 16px;
          color: #5a6378;
          min-height: 66px;
        }
        .geo-tier--recommended .geo-tier-blurb {
          color: #d3d9ec;
        }
        .geo-tier-timeline {
          font-size: 13px;
          color: ${GOLD};
          font-weight: 600;
          margin-bottom: 18px;
          padding-bottom: 18px;
          border-bottom: 1px solid #e6e9f4;
        }
        .geo-tier--recommended .geo-tier-timeline {
          border-bottom-color: rgba(255, 255, 255, 0.12);
        }
        .geo-cal-icon {
          margin-right: 4px;
        }
        .geo-tier-features {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          flex-grow: 1;
        }
        .geo-tier-features li {
          padding: 9px 0 9px 26px;
          position: relative;
          font-size: 14.5px;
          line-height: 1.5;
          color: #3b4660;
        }
        .geo-tier--recommended .geo-tier-features li {
          color: #e8eaf3;
        }
        .geo-check {
          position: absolute;
          left: 0;
          top: 9px;
          color: ${GOLD};
          font-weight: 700;
        }
        .geo-tier-foot {
          text-align: center;
          font-size: 12px;
          color: ${GOLD};
          margin: 12px 0 0;
          font-weight: 600;
        }

        /* BOOK / FORM + CAL */
        .geo-book {
          background: #fff;
          padding: 90px 0;
        }
        .geo-book--top {
          background: linear-gradient(180deg, #fafbff 0%, #fff 100%);
          padding-top: 64px;
        }
        .geo-top-intro {
          max-width: 880px;
          margin: 0 auto 48px;
          text-align: center;
        }
        .geo-top-sub {
          font-size: 17px;
          margin: 0 auto;
          max-width: 720px;
        }
        .geo-book-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 1000px) {
          .geo-book-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }
        .geo-form {
          margin-top: 18px;
        }
        .geo-field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 600px) {
          .geo-field-row {
            grid-template-columns: 1fr;
          }
        }
        .geo-field {
          margin-bottom: 18px;
          display: flex;
          flex-direction: column;
        }
        .geo-field label {
          color: ${NAVY};
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.04em;
          margin-bottom: 6px;
          text-transform: uppercase;
        }
        .geo-field input,
        .geo-field select,
        .geo-field textarea {
          border: 1px solid #d3d9ec;
          border-radius: 10px;
          padding: 12px 14px;
          font-size: 15px;
          color: ${INK};
          background: #fff;
          font-family: inherit;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
          width: 100%;
        }
        .geo-field input:focus,
        .geo-field select:focus,
        .geo-field textarea:focus {
          outline: none;
          border-color: ${NAVY};
          box-shadow: 0 0 0 3px rgba(26, 43, 94, 0.12);
        }
        .geo-err {
          color: #c0392b;
          font-size: 12px;
          margin-top: 4px;
        }
        .geo-form-foot {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-top: 8px;
          flex-wrap: wrap;
        }
        .geo-fine {
          color: #6b7388;
          font-size: 13px;
          margin: 0;
        }
        .geo-accent {
          color: ${GOLD};
        }

        /* CAL */
        .geo-cal-wrap {
          background: #fafbff;
          border: 1px solid #e6e9f4;
          border-radius: 18px;
          padding: 32px 28px;
        }
        .geo-cal-frame {
          margin-top: 20px;
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
          border: 1px solid #e6e9f4;
        }
        .geo-cal-frame iframe {
          width: 100%;
          height: 720px;
          border: 0;
          display: block;
        }
        .geo-cal-fallback {
          text-align: center;
          font-size: 13px;
          color: #6b7388;
          margin: 14px 0 0;
        }
        .geo-cal-fallback a {
          color: ${NAVY};
          font-weight: 700;
          text-decoration: underline;
        }

        /* WHO */
        .geo-who {
          background: ${NAVY};
          color: #fff;
          padding: 90px 0;
        }
        .geo-who .geo-h2 {
          color: #fff;
        }
        .geo-who .geo-sub {
          color: #c8d0e4;
        }
        .geo-who-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 36px;
        }
        @media (max-width: 900px) {
          .geo-who-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .geo-who-grid {
            grid-template-columns: 1fr;
          }
        }
        .geo-who-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          padding: 22px 22px 22px 26px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .geo-who-num {
          color: ${GOLD};
          font-family: Georgia, serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 1;
        }
        .geo-who-card p {
          margin: 0;
          font-size: 15px;
          line-height: 1.5;
          color: #e8eaf3;
        }
        .geo-who-banner {
          text-align: center;
          font-size: 17px;
          padding: 22px 24px;
          border: 1px solid ${GOLD};
          border-radius: 12px;
          color: #fff;
          background: rgba(201, 169, 97, 0.08);
        }
        .geo-who-banner em {
          color: ${GOLD};
          font-style: italic;
          font-weight: 600;
        }

        /* TOAST */
        .geo-toast {
          position: fixed;
          inset: 0;
          background: rgba(12, 27, 58, 0.78);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: geoFade 0.25s ease;
          padding: 24px;
        }
        .geo-toast-card {
          background: #fff;
          border-radius: 18px;
          padding: 40px 36px;
          max-width: 460px;
          text-align: center;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
        }
        .geo-toast-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: ${GOLD};
          color: ${NAVY};
          font-size: 34px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
        }
        .geo-toast-card h3 {
          font-family: Georgia, serif;
          color: ${NAVY};
          font-size: 26px;
          margin: 0 0 10px;
          font-weight: 400;
        }
        .geo-toast-card p {
          color: #5a6378;
          font-size: 15px;
          line-height: 1.55;
          margin: 0 0 22px;
        }
        @keyframes geoFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </Layouts>
  );
};

export default BookGEOLanding;
