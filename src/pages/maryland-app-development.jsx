import Layouts from "@layouts/Layouts";
import React from "react";
import SEO from "@components/SEO";
import PageSchema from "@components/PageSchema";
import ExpertNote from "@components/ExpertNote";
import Link from "next/link";

const MD_APP_SERVICE = {
  id: "https://thelivingstonesolution.com/maryland-app-development#service",
  url: "https://thelivingstonesolution.com/maryland-app-development",
  name: "Maryland Mobile App Development",
  serviceType: "Mobile App Development",
  description:
    "LivingStoneSolution Technologies builds iOS, Android, and cross-platform mobile applications for Maryland businesses, startups, and institutions. The team is headquartered in neighboring Washington, D.C., and serves the entire Maryland market — Bethesda, Silver Spring, Rockville, Baltimore, Annapolis, and statewide remote — with React Native, Swift, and Kotlin engineering.",
  areaServed: [
    "Bethesda, MD",
    "Silver Spring, MD",
    "Rockville, MD",
    "Baltimore, MD",
    "Annapolis, MD",
    "Maryland",
  ],
};

const MD_APP_FAQ = [
  {
    question: "Does LivingStoneSolution serve Maryland mobile app development clients?",
    answer:
      "Yes. LivingStoneSolution Technologies, headquartered in Washington, D.C., serves the entire Maryland market for mobile app development. On-site engagement is available for clients in Bethesda, Silver Spring, and Rockville; statewide Maryland clients are served via remote or hybrid delivery.",
  },
  {
    question:
      "What types of mobile apps does the team build for Maryland clients?",
    answer:
      "The team builds iOS apps (Swift), Android apps (Kotlin), and cross-platform apps (React Native) for Maryland startups, established enterprises, regulated-industry clients (healthcare, fintech), and government-adjacent organizations. Full lifecycle from architecture through App Store and Google Play deployment.",
  },
  {
    question:
      "Does LivingStoneSolution work with Maryland state government agencies?",
    answer:
      "Through the Livingstone Government division, LivingStoneSolution provides 508-compliant mobile applications suitable for Maryland state agency procurement. The parent organization is a Certified Business Enterprise (CBE) of the District of Columbia, which strengthens its position for Maryland state contracting that prioritizes regional small businesses.",
  },
  {
    question: "How do Maryland clients typically engage LivingStoneSolution?",
    answer:
      "Maryland clients typically begin with a strategy call to scope the application, define platform targets, and outline budget and timeline. Engagements then proceed through discovery, architecture, sprints, QA, store submission, and post-launch monitoring. Pricing is per-project and confirmed during discovery.",
  },
];

const MD_APP_BREADCRUMB = [
  { name: "Home", url: "https://thelivingstonesolution.com/" },
  { name: "Maryland App Development", url: "https://thelivingstonesolution.com/maryland-app-development" },
];

const MarylandAppDevelopment = () => {
  return (
    <Layouts>
      <SEO
        title="Maryland Mobile App Development — iOS, Android & React Native | LivingStoneSolution"
        description="LivingStoneSolution Technologies builds iOS, Android, and cross-platform mobile apps for Maryland clients. Headquartered in neighboring Washington, D.C. Serving Bethesda, Silver Spring, Rockville, Baltimore, Annapolis, and statewide."
        keywords="Maryland app development, Bethesda mobile app developer, Silver Spring iOS development, Baltimore app developer, Rockville Android development"
        canonical="https://thelivingstonesolution.com/maryland-app-development"
      />
      <PageSchema
        service={MD_APP_SERVICE}
        faq={MD_APP_FAQ}
        breadcrumb={MD_APP_BREADCRUMB}
      />

      <section className="container mil-p-120-90">
        <div className="row justify-content-center">
          <div className="col-lg-10">

            <h1 className="mil-mb-30">
              Maryland Mobile App Development
            </h1>

            <p className="mil-text mil-mb-30">
              LivingStoneSolution Technologies builds iOS, Android, and
              cross-platform mobile applications for Maryland businesses,
              startups, and institutions. The team is headquartered in neighboring
              Washington, D.C., and serves the entire Maryland market &mdash;
              Bethesda, Silver Spring, Rockville, Baltimore, Annapolis, and
              statewide remote &mdash; with React Native, Swift, and Kotlin
              engineering.
            </p>

            <ExpertNote
              slotId="QS-01-MD"
              quote={null}
              smeName="Oliyad Deyasa"
              smeRole="Co-Founder & CTO"
              smeLocation="Washington, D.C."
            />

            <div className="mil-divider mil-mb-60" />

            <h2 className="mil-mb-20">Service Coverage Across Maryland</h2>
            <p className="mil-text mil-mb-20">
              Maryland clients are served from LivingStoneSolution&rsquo;s
              Washington, D.C. headquarters. On-site engagement is available for
              the close-in Maryland metro; remote and hybrid delivery covers the
              full state.
            </p>
            <ul className="mil-mb-40">
              <li><strong>Bethesda, MD</strong> &mdash; on-site available</li>
              <li><strong>Silver Spring, MD</strong> &mdash; on-site available</li>
              <li><strong>Rockville, MD</strong> &mdash; on-site available</li>
              <li><strong>College Park, MD</strong> &mdash; on-site available</li>
              <li><strong>Baltimore, MD</strong> &mdash; remote or scheduled on-site</li>
              <li><strong>Annapolis, MD</strong> &mdash; remote or scheduled on-site</li>
              <li><strong>Statewide Maryland</strong> &mdash; remote delivery</li>
            </ul>

            <h2 className="mil-mb-20">Mobile Engineering Capabilities</h2>
            <p className="mil-text mil-mb-20">
              The mobile practice covers cross-platform and native engineering,
              full backend integration, and App Store and Google Play submission.
              For the complete capability matrix and pricing details, see the
              main{" "}
              <Link href="/AppDevelopment" className="mil-link mil-accent">App Development service page</Link>.
            </p>
            <ul className="mil-mb-40">
              <li className="mil-mb-10">
                <strong>Cross-platform (React Native)</strong> &mdash; single
                codebase, faster time-to-market for Maryland startups
              </li>
              <li className="mil-mb-10">
                <strong>Native iOS (Swift)</strong> &mdash; performance-critical
                applications, fintech, healthcare
              </li>
              <li className="mil-mb-10">
                <strong>Native Android (Kotlin)</strong> &mdash; memory-efficient,
                device-optimized
              </li>
              <li className="mil-mb-10">
                <strong>API and backend integration</strong> &mdash; cloud
                synchronization, push notifications, OAuth, WebSockets
              </li>
              <li className="mil-mb-10">
                <strong>508-compliant builds</strong> &mdash; for Maryland state
                agencies and federal-adjacent clients via{" "}
                <Link href="/government" className="mil-link mil-accent">Livingstone Government</Link>
              </li>
            </ul>

            <h2 className="mil-mb-20">Frequently Asked Questions</h2>

            {MD_APP_FAQ.map((qa) => (
              <div key={qa.question} className="mil-mb-30">
                <h3 className="mil-mb-10">{qa.question}</h3>
                <p className="mil-text">{qa.answer}</p>
              </div>
            ))}

            <div className="mil-mb-40 mil-mt-30" style={{background:"#f7f8fc", borderLeft:"4px solid #c9a961", padding:"18px 24px", borderRadius:"4px"}}>
              <p className="mil-text" style={{margin:0}}>
                <strong>Verified D.C. Business serving Maryland:</strong>{" "}
                LivingStoneSolution Technologies is a Certified Business Enterprise
                (CBE) of the District of Columbia. See{" "}
                <Link href="/certifications" className="mil-link mil-accent">certifications</Link>{" "}
                for verification.
              </p>
            </div>

            <h2 className="mil-mb-20">Start a Maryland App Project</h2>
            <p className="mil-text mil-mb-30">
              To scope a Maryland mobile app engagement,{" "}
              <Link href="/book-geo" className="mil-link mil-accent">book a 30-minute strategy call</Link>{" "}
              and we&rsquo;ll respond within one business day.
            </p>

          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default MarylandAppDevelopment;
