import Layouts from "@layouts/Layouts";
import React from "react";
import SEO from "@components/SEO";
import PageSchema from "@components/PageSchema";
import Link from "next/link";

/* ─── Certifications page schema ─────────────────────────────────────────────
 * Lists verifiable third-party certifications that LivingStoneSolution holds.
 * The Organization itself is declared in SEO.jsx; this page adds an ItemList
 * of CredentialOrCertification entries.
 *
 * No-invention rule: every entry must link to a public verification URL.
 * If the verification fails, the entry is removed — not relabeled.
 * ──────────────────────────────────────────────────────────────────────────*/

const CERTIFICATIONS_SERVICE = {
  id: "https://thelivingstonesolution.com/certifications#page",
  url: "https://thelivingstonesolution.com/certifications",
  name: "LivingStoneSolution Technologies — Certifications and Credentials",
  serviceType: "Certified Business Credentials",
  description:
    "LivingStoneSolution Technologies holds verifiable third-party business certifications, including Certified Business Enterprise (CBE) status from the District of Columbia Department of Small and Local Business Development. Each credential is publicly verifiable.",
  areaServed: ["Washington, D.C.", "United States"],
};

const CERTIFICATIONS_FAQ = [
  {
    question: "What is a Certified Business Enterprise (CBE)?",
    answer:
      "A Certified Business Enterprise (CBE) is a business certified by the District of Columbia Department of Small and Local Business Development (DSLBD) as a small, local, disadvantaged, or resident-owned business eligible to participate in D.C. government procurement set-asides. CBE status is established under the District of Columbia's Small, Local, and Disadvantaged Business Enterprise Development and Assistance Act of 2005 and is renewed periodically by DSLBD review.",
  },
  {
    question: "How can I verify LivingStoneSolution's CBE status?",
    answer:
      "CBE certifications are publicly verifiable through the D.C. Department of Small and Local Business Development (DSLBD) certified business directory. Search for 'LivingStoneSolution' or 'The Livingstone Solution' at dslbd.dc.gov to confirm current certification status and expiration date.",
  },
  {
    question:
      "Does CBE certification mean LivingStoneSolution only works with the D.C. government?",
    answer:
      "No. CBE certification establishes LivingStoneSolution's eligibility for D.C. government set-aside contracts, but the company operates as a full-service commercial agency serving startups, enterprises, and government clients nationally and internationally. CBE status is one credential among several that signal LivingStoneSolution's standing as a verified D.C.-anchored business.",
  },
  {
    question:
      "Which division of LivingStoneSolution carries the CBE certification?",
    answer:
      "The CBE certification is held by the parent entity, LivingStoneSolution Technologies. The four operating divisions — Livingstone Solution (Flagship), Livingstone Government, Livingstone GEO Agency, and Livingstone Marketing Firm — operate under the parent organization and inherit CBE eligibility for D.C. government contracting through it.",
  },
];

const CERTIFICATIONS_BREADCRUMB = [
  { name: "Home", url: "https://thelivingstonesolution.com/" },
  { name: "Certifications", url: "https://thelivingstonesolution.com/certifications" },
];

const Certifications = () => {
  return (
    <Layouts>
      <SEO
        title="Certifications and Credentials — CBE Certified | LivingStoneSolution"
        description="LivingStoneSolution Technologies is a Certified Business Enterprise (CBE) verified by the District of Columbia Department of Small and Local Business Development. Verifiable third-party credentials for D.C.-anchored software, GEO, and marketing services."
        keywords="CBE Certified, Certified Business Enterprise, DSLBD, D.C. Certified Small Business, Washington DC CBE, Local Business Certification"
        canonical="https://thelivingstonesolution.com/certifications"
      />
      <PageSchema
        service={CERTIFICATIONS_SERVICE}
        faq={CERTIFICATIONS_FAQ}
        breadcrumb={CERTIFICATIONS_BREADCRUMB}
      />

      {/* Inline JSON-LD for the credential itself — ItemList of EducationalOccupationalCredential */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "LivingStoneSolution Technologies — Certifications",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Certified Business Enterprise (CBE)",
                  "credentialCategory": "Government Business Certification",
                  "recognizedBy": {
                    "@type": "GovernmentOrganization",
                    "name": "District of Columbia Department of Small and Local Business Development",
                    "url": "https://dslbd.dc.gov",
                  },
                  "url": "https://dslbd.dc.gov",
                  "about": {
                    "@id": "https://thelivingstonesolution.com/#organization",
                  },
                },
              },
            ],
          }),
        }}
      />

      <section className="container mil-p-120-90">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="mil-mb-30">
              Certifications and Credentials
            </h1>

            {/* Answer-first definition — 40-60 words */}
            <p className="mil-text mil-mb-30">
              LivingStoneSolution Technologies holds verifiable third-party business
              certifications, including Certified Business Enterprise (CBE) status
              from the District of Columbia Department of Small and Local Business
              Development. Each credential listed below is publicly verifiable through
              the issuing authority. This page is the canonical source of truth for
              LivingStoneSolution&rsquo;s credentialed status.
            </p>

            <div className="mil-divider mil-mb-60" />

            {/* ── CBE BADGE ── */}
            <h2 className="mil-mb-20">D.C. Certified Business Enterprise (CBE)</h2>

            <div
              className="mil-mb-40"
              style={{
                background: "linear-gradient(135deg, #1a2b5e 0%, #0c1b3a 100%)",
                color: "#fff",
                borderRadius: "12px",
                padding: "36px 32px",
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "28px",
                alignItems: "center",
              }}
            >
              {/* Text-only badge — no logo invented. Visually distinct, schema-anchored. */}
              <div
                role="img"
                aria-label="Certified Business Enterprise (CBE) badge — LivingStoneSolution Technologies, issued by the D.C. Department of Small and Local Business Development"
                style={{
                  background: "#c9a961",
                  color: "#1a2b5e",
                  borderRadius: "10px",
                  padding: "20px",
                  textAlign: "center",
                  fontFamily: "Georgia, serif",
                }}
              >
                <div style={{ fontSize: "11px", letterSpacing: "0.18em", fontWeight: 700, textTransform: "uppercase", marginBottom: "6px" }}>
                  Certified
                </div>
                <div style={{ fontSize: "44px", fontWeight: 700, lineHeight: 1, margin: "4px 0" }}>
                  CBE
                </div>
                <div style={{ fontSize: "11px", letterSpacing: "0.14em", fontWeight: 600, textTransform: "uppercase", marginTop: "6px" }}>
                  District of Columbia
                </div>
              </div>

              <div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: 400, color: "#fff", margin: "0 0 12px" }}>
                  Certified Business Enterprise
                </h3>
                <p style={{ color: "#c8d0e4", fontSize: "15px", lineHeight: 1.55, margin: "0 0 14px" }}>
                  Issued by the D.C. Department of Small and Local Business
                  Development (DSLBD) under the District&rsquo;s Small, Local, and
                  Disadvantaged Business Enterprise Development and Assistance Act
                  of 2005.
                </p>
                <a
                  href="https://dslbd.dc.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    background: "#c9a961",
                    color: "#1a2b5e",
                    padding: "10px 22px",
                    borderRadius: "999px",
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "0.04em",
                    textDecoration: "none",
                  }}
                >
                  Verify at dslbd.dc.gov →
                </a>
              </div>
            </div>

            {/* ── WHAT THIS MEANS ── */}
            <h2 className="mil-mb-20">What CBE Status Means for Clients</h2>
            <p className="mil-text mil-mb-20">
              CBE certification establishes LivingStoneSolution as a D.C.-anchored,
              verified small business eligible for D.C. government set-aside contracts.
              For commercial clients, CBE status is independent third-party
              verification of the company&rsquo;s D.C. operational footprint and small-
              business standing &mdash; useful for supplier diversity programs and
              federal/state vendor portfolios.
            </p>
            <ul className="mil-mb-40">
              <li className="mil-mb-10">
                <strong>D.C. government contracting</strong> &mdash; eligible for
                set-aside procurement opportunities
              </li>
              <li className="mil-mb-10">
                <strong>Supplier diversity programs</strong> &mdash; recognized
                small-business credential for enterprise procurement
              </li>
              <li className="mil-mb-10">
                <strong>Federal subcontracting</strong> &mdash; CBE status is one of
                several credentials that strengthen federal subcontracting positions
              </li>
              <li className="mil-mb-10">
                <strong>Verified D.C. anchor</strong> &mdash; third-party validation
                of the company&rsquo;s Washington, D.C. headquarters and operations
              </li>
            </ul>

            {/* ── HOW TO VERIFY ── */}
            <h2 className="mil-mb-20">How to Verify This Certification</h2>
            <p className="mil-text mil-mb-20">
              All CBE certifications are publicly searchable through the D.C.
              Department of Small and Local Business Development. To independently
              confirm LivingStoneSolution&rsquo;s current status:
            </p>
            <ol className="mil-mb-40">
              <li className="mil-mb-10">
                Visit{" "}
                <a href="https://dslbd.dc.gov" target="_blank" rel="noopener noreferrer" className="mil-link mil-accent">
                  dslbd.dc.gov
                </a>
              </li>
              <li className="mil-mb-10">
                Use the certified business directory or vendor search
              </li>
              <li className="mil-mb-10">
                Search for &ldquo;LivingStoneSolution&rdquo; or &ldquo;The Livingstone
                Solution&rdquo;
              </li>
              <li className="mil-mb-10">
                Confirm current certification status and expiration date
              </li>
            </ol>

            {/* ── FAQ ── */}
            <h2 className="mil-mb-20">Frequently Asked Questions</h2>

            {CERTIFICATIONS_FAQ.map((qa) => (
              <div key={qa.question} className="mil-mb-30">
                <h3 className="mil-mb-10">{qa.question}</h3>
                <p className="mil-text">{qa.answer}</p>
              </div>
            ))}

            {/* ── ECOSYSTEM NOTE ── */}
            <div className="mil-mb-40 mil-mt-30" style={{background:"#f7f8fc", borderLeft:"4px solid #c9a961", padding:"18px 24px", borderRadius:"4px"}}>
              <p className="mil-text" style={{margin:0}}>
                <strong>About LivingStoneSolution Technologies:</strong> CBE
                certification is held by the parent organization. Services delivered
                under the four operating divisions &mdash;{" "}
                <Link href="/" className="mil-link mil-accent">Flagship</Link>,{" "}
                <Link href="/government" className="mil-link mil-accent">Government</Link>,{" "}
                <Link href="/geo-ai-visibility" className="mil-link mil-accent">GEO Agency</Link>, and Marketing Firm &mdash; all
                operate under this credential.
              </p>
            </div>

            {/* ── CTA ── */}
            <h2 className="mil-mb-20">Work with a Verified D.C. Partner</h2>
            <p className="mil-text mil-mb-30">
              For procurement teams evaluating LivingStoneSolution for set-aside
              contracts or supplier-diversity programs,{" "}
              <Link href="/book-geo" className="mil-link mil-accent">book a strategy call</Link>{" "}
              and we&rsquo;ll bring a capabilities statement and current certification documentation.
              For commercial engagements,{" "}
              <Link href="/book-geo" className="mil-link mil-accent">book a strategy call</Link>.
            </p>

          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default Certifications;
