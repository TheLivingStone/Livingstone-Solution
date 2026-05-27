import { getSortedProjectsData } from "@library/projects";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import React from "react";
import SEO from "@components/SEO";
import ExpertNote from "@components/ExpertNote";
import Link from "next/link";
import PageSchema from "@components/PageSchema";

/* ─── App Development — page-level schema data ──────────────────────────────
 * All values are derived verbatim from the visible on-page text above.
 * No prices are asserted (pricing is industry-benchmarked, not LivingStone's
 * own published list prices). No AggregateRating is emitted — no compliant
 * review set exists yet.
 * ──────────────────────────────────────────────────────────────────────────*/
const APP_DEV_SERVICE = {
  id: "https://thelivingstonesolution.com/AppDevelopment#service",
  url: "https://thelivingstonesolution.com/AppDevelopment",
  name: "Mobile App Development",
  serviceType: "Mobile App Development",
  description:
    "LivingStoneSolution Technologies develops iOS, Android, and cross-platform mobile applications for startups, enterprises, and government clients. React Native is used for projects requiring a shared codebase across both platforms; Swift and Kotlin are used for native-only builds. Service coverage spans architecture design, API integration, App Store submission, and post-launch monitoring.",
  areaServed: [
    "Washington, D.C.",
    "Chicago, IL",
    "New York, NY",
    "United States",
    "Worldwide",
  ],
};

const APP_DEV_FAQ = [
  {
    question:
      "What is the difference between React Native and native iOS/Android development?",
    answer:
      "React Native uses a single JavaScript codebase that compiles to both iOS and Android. This reduces development time and cost when feature parity is required across both platforms. Native Swift (iOS) or Kotlin (Android) development delivers maximum hardware access and performance. Native is preferable for graphics-intensive, fintech, or healthcare applications with strict platform-specific guidelines.",
  },
  {
    question: "Do you handle App Store and Google Play submission?",
    answer:
      "Yes. LivingStoneSolution manages the full compliance approval process for both the Apple App Store and Google Play Store, including policy review, metadata preparation, and resubmissions if required. App Store Optimization (ASO) consulting for keyword targeting is also included.",
  },
  {
    question: "Can you integrate AI features into a mobile app?",
    answer:
      "Yes. AI integration — including custom LLM connections, Retrieval-Augmented Generation (RAG) pipelines, and AI customer support agents — is available as a separate scope item. This work is delivered by the same engineering team under LivingStoneSolution's AI Integration practice.",
  },
  {
    question: "Do you work with government or regulated-industry clients?",
    answer:
      "Yes. LivingStoneSolution operates a dedicated government and regulated-sector division (Livingstone Government) focused on 508-compliant and secure solutions. Mobile projects for federal, state, or regulated clients are scoped under that division's compliance framework.",
  },
  {
    question: "Where is the development team based?",
    answer:
      "The core team is based in Washington, D.C., with team members in Chicago, IL and New York, NY. LivingStoneSolution serves clients nationally and accepts global remote engagements.",
  },
];

const APP_DEV_BREADCRUMB = [
  { name: "Home", url: "https://thelivingstonesolution.com/" },
  { name: "Mobile App Development", url: "https://thelivingstonesolution.com/AppDevelopment" },
];

// Slider is client-only; primary content is server-rendered above it
const ProjectsSlider = dynamic(() => import("@components/sliders/AppProjects"), { ssr: false });

const AppDevelopment = (props) => {
  return (
    <Layouts>
      <SEO
        title="Mobile App Development Services — iOS, Android & Cross-Platform | LivingStoneSolution"
        description="LivingStoneSolution Technologies builds iOS, Android, and cross-platform mobile applications using React Native and Swift/Kotlin. Washington, D.C.-based team serving clients nationally and globally."
        keywords="App Development, Mobile Apps, iOS Development, Android Development, React Native, Swift, Kotlin, Washington DC"
        canonical="https://thelivingstonesolution.com/AppDevelopment"
      />
      <PageSchema
        service={APP_DEV_SERVICE}
        faq={APP_DEV_FAQ}
        breadcrumb={APP_DEV_BREADCRUMB}
      />

      {/* ── ANSWER-FIRST HERO (server-rendered, extraction-first) ── */}
      <section className="container mil-p-120-90">
        <div className="row justify-content-center">
          <div className="col-lg-10">

            <h1 className="mil-mb-30">
              Mobile App Development in Washington, D.C.
            </h1>

            {/* Answer-first definition — 40-60 words, extracted by LLMs */}
            <p className="mil-text mil-mb-30">
              LivingStoneSolution Technologies develops iOS, Android, and cross-platform
              mobile applications for startups, enterprises, and government clients.
              React Native is used for projects requiring a shared codebase across both
              platforms; Swift and Kotlin are used for native-only builds. Service
              coverage spans architecture design, API integration, App Store submission,
              and post-launch monitoring.
            </p>

            {/* QUOTE SLOT QS-01 — Oliyad Deyasa on mobile architecture
                Status: pending SME capture. ExpertNote renders an HTML comment
                only until `quote` is set to a real SME-approved string. */}
            <ExpertNote
              slotId="QS-01"
              quote={null}
              smeName="Oliyad Deyasa"
              smeRole="Co-Founder & CTO"
              smeLocation="Washington, D.C."
            />

            <div className="mil-divider mil-mb-60" />

            {/* ── WHAT WE BUILD ── */}
            <h2 className="mil-mb-20">What We Build</h2>
            <p className="mil-text mil-mb-20">
              Our mobile engineering practice covers four core delivery types: cross-platform
              apps that share a single codebase across iOS and Android, native apps built
              in Swift or Kotlin for maximum hardware performance, API-integrated apps that
              connect to cloud backends and third-party services, and App Store-ready
              products with full deployment and ASO support.
            </p>
            <ul className="mil-mb-40">
              <li className="mil-mb-10">
                <strong>Cross-platform (React Native)</strong> — single codebase for iOS
                and Android; feature parity with lower long-term maintenance cost
              </li>
              <li className="mil-mb-10">
                <strong>Native iOS (Swift)</strong> — clean, maintainable Swift code for
                performance-intensive fintech, healthcare, and media applications
              </li>
              <li className="mil-mb-10">
                <strong>Native Android (Kotlin)</strong> — memory-efficient Kotlin
                engineering for device-optimized Android delivery
              </li>
              <li className="mil-mb-10">
                <strong>Enterprise and B2G apps</strong> — secure, compliance-aware
                builds for government and regulated-industry clients
              </li>
            </ul>

            {/* ── HOW IT WORKS ── */}
            <h2 className="mil-mb-20">How It Works</h2>
            <p className="mil-text mil-mb-20">
              Each mobile application engagement follows a six-phase delivery process,
              from requirements definition through live monitoring. The phases are
              sequential with defined handoff checkpoints so clients review and approve
              before the project advances.
            </p>
            <ol className="mil-mb-40">
              <li className="mil-mb-10">
                <strong>Discovery and scope</strong> — define user flows, platform targets,
                performance requirements, and compliance constraints
              </li>
              <li className="mil-mb-10">
                <strong>Architecture design</strong> — select framework (React Native vs.
                native), plan offline-first database, design API contracts
              </li>
              <li className="mil-mb-10">
                <strong>Development sprints</strong> — iterative builds with client
                review at each sprint boundary; native modules integrated as needed
              </li>
              <li className="mil-mb-10">
                <strong>Backend and API integration</strong> — connect push notifications
                (Firebase/APNs), OAuth authentication, WebSockets, and third-party APIs
              </li>
              <li className="mil-mb-10">
                <strong>QA and compliance review</strong> — device matrix testing, Apple
                App Store and Google Play Store submission and approval management
              </li>
              <li className="mil-mb-10">
                <strong>Launch and monitoring</strong> — CI/CD pipelines (Fastlane),
                over-the-air updates, and crashlytics monitoring post-launch
              </li>
            </ol>

            {/* ── WHAT'S INCLUDED ── */}
            <h2 className="mil-mb-20">What&rsquo;s Included</h2>
            <p className="mil-text mil-mb-20">
              Standard mobile app engagements with LivingStoneSolution include design,
              development, backend integration, and store submission. The items below
              are included in a full-build contract; items marked &ldquo;separate scope&rdquo;
              are available as add-ons.
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
                  ["Cross-platform or native codebase", "Yes"],
                  ["UI/UX wireframes and design", "Yes"],
                  ["Backend API architecture and integration", "Yes"],
                  ["Offline-first database (SQLite/Realm)", "Yes"],
                  ["Push notifications and OAuth login", "Yes"],
                  ["App Store and Google Play submission", "Yes"],
                  ["App Store Optimization (ASO) consulting", "Yes"],
                  ["CI/CD pipeline setup (Fastlane)", "Yes"],
                  ["Post-launch crashlytics monitoring", "Yes"],
                  ["Ongoing feature development", "Separate scope"],
                  ["Custom LLM or AI feature integration", "Separate scope"],
                ].map(([item, status]) => (
                  <tr key={item} style={{borderBottom:"1px solid #f0f0f0"}}>
                    <td style={{padding:"10px 12px"}}>{item}</td>
                    <td style={{padding:"10px 12px", color: status === "Yes" ? "#2a7a2a" : "#888"}}>{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* ── PRICING ── */}
            <h2 className="mil-mb-20">Pricing and Timelines</h2>
            <p className="mil-text mil-mb-20">
              Mobile app development at LivingStoneSolution is priced per project scope,
              not on a fixed menu. Pricing depends on platform target, feature complexity,
              backend requirements, and compliance needs. Typical engagements range from
              focused MVP builds to multi-platform enterprise products.
            </p>

            {/* Micro-fact box — industry benchmarks. Sources: Clutch Pricing Guide 2026 (clutch.co/directory/mobile-application-developers/pricing); Netguru 2026 Guide (netguru.com/blog/mobile-app-development-cost) */}
            {/* STAT REQUEST — AppDevelopment Pricing: Oliyad to confirm LivingStone's actual starting price for MVP and full-build engagements so the industry ranges below can be replaced with internal figures. Owner: CTO (Oliyad Deyasa) */}
            <div className="mil-mb-30" style={{background:"#f7f8fc", borderLeft:"4px solid #c9a961", padding:"16px 22px", borderRadius:"4px"}}>
              <p className="mil-text" style={{marginBottom:"8px"}}>
                <strong>Industry pricing context:</strong> According to Clutch&rsquo;s 2026 Mobile App Pricing Guide,
                most reviewed mobile app projects cost between{" "}
                <strong>$10,000 and $49,999</strong>, with an overall average of approximately{" "}
                <strong>$90,000</strong>. Netguru&rsquo;s 2026 analysis of 200+ apps reports that
                single-platform MVPs with core features typically land in the{" "}
                <strong>$25,000–$60,000</strong> range, while complex, multi-platform products
                with real-time features and compliance requirements reach{" "}
                <strong>$150,000–$300,000+</strong>. LivingStoneSolution engagements are scoped
                individually — contact us for a project estimate.
              </p>
              <p style={{margin:0, fontSize:"0.82em", color:"#888"}}>
                Sources: Clutch Mobile App Pricing Guide 2026; Netguru &ldquo;Mobile App Development Cost&rdquo; (April 2026)
              </p>
            </div>

            <ul className="mil-mb-30">
              <li className="mil-mb-10">
                <strong>MVP / prototype</strong> — limited feature set, single platform,
                fast time-to-market; industry data indicates{" "}
                <strong>$25,000–$60,000</strong> for a single-platform MVP
                (Netguru, 2026); custom quote required for LivingStone engagements
              </li>
              <li className="mil-mb-10">
                <strong>Full-build (cross-platform)</strong> — React Native, full backend,
                store submission; industry data indicates most U.S. projects fall in the{" "}
                <strong>$50,000–$150,000</strong> range for mid-complexity builds
                (Clutch, 2026); custom quote required
              </li>
              <li className="mil-mb-10">
                <strong>Enterprise / B2G</strong> — multi-platform, compliance review,
                SLA; complex builds with compliance typically exceed{" "}
                <strong>$150,000</strong> (Netguru, 2026); scoped on discovery call
              </li>
            </ul>
            <p className="mil-mb-30">
              To get a scoped estimate,{" "}
              <Link href="/book-geo" className="mil-link mil-accent">
                book a strategy call
              </Link>{" "}
              or reach out directly. AI Visibility for your app is also available —
              see our{" "}
              <Link href="/geo-ai-visibility" className="mil-link mil-accent">
                GEO AI Visibility service
              </Link>.
            </p>

            {/* ── FAQ BLOCK ── [SCHEMA TARGET: FAQPage] */}
            <h2 className="mil-mb-20">Frequently Asked Questions</h2>

            <h3 className="mil-mb-10">What is the difference between React Native and native iOS/Android development?</h3>
            <p className="mil-text mil-mb-20">
              React Native uses a single JavaScript codebase that compiles to both
              iOS and Android. This reduces development time and cost when feature
              parity is required across both platforms. Native Swift (iOS) or Kotlin
              (Android) development delivers maximum hardware access and performance.
              Native is preferable for graphics-intensive, fintech, or healthcare
              applications with strict platform-specific guidelines.
            </p>

            <h3 className="mil-mb-10">Do you handle App Store and Google Play submission?</h3>
            <p className="mil-text mil-mb-20">
              Yes. LivingStoneSolution manages the full compliance approval process for
              both the Apple App Store and Google Play Store, including policy review,
              metadata preparation, and resubmissions if required. App Store Optimization
              (ASO) consulting for keyword targeting is also included.
            </p>

            <h3 className="mil-mb-10">Can you integrate AI features into a mobile app?</h3>
            <p className="mil-text mil-mb-20">
              Yes. AI integration — including custom LLM connections, Retrieval-Augmented
              Generation (RAG) pipelines, and AI customer support agents — is available as
              a separate scope item. This work is delivered by the same engineering team
              under LivingStoneSolution&rsquo;s AI Integration practice.
            </p>

            <h3 className="mil-mb-10">Do you work with government or regulated-industry clients?</h3>
            <p className="mil-text mil-mb-20">
              Yes. LivingStoneSolution operates a dedicated government and regulated-sector
              division (Livingstone Government) focused on 508-compliant and secure
              solutions. Mobile projects for federal, state, or regulated clients are
              scoped under that division&rsquo;s compliance framework.
            </p>

            <h3 className="mil-mb-10">Where is the development team based?</h3>
            <p className="mil-text mil-mb-40">
              The core team is based in Washington, D.C., with team members in Chicago,
              IL and New York, NY. LivingStoneSolution serves clients nationally and
              accepts global remote engagements.
            </p>

            {/* ── SERVICE AREAS ── */}
            <h2 className="mil-mb-20">Service Areas</h2>
            <p className="mil-text mil-mb-20">
              LivingStoneSolution is headquartered in Washington, D.C. and delivers mobile
              app development services remotely to clients across the United States and
              internationally. Primary metropolitan markets served include:
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
                <strong>About LivingStoneSolution Technologies:</strong> The company
                operates four specialized divisions — Livingstone Solution (Flagship
                commercial and AI), Livingstone Government (federal/state missions),
                Livingstone GEO Agency (AI search visibility), and Livingstone Marketing
                Firm (brand strategy). Mobile app development is delivered under the
                Flagship division.
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
            <h3 className="mil-mb-30">Explore More Digital Solutions</h3>
            <p className="mil-mb-30">
              Looking to establish your brand before building an app? See our{" "}
              <Link href="/Branding" className="mil-link mil-accent">Branding</Link>{" "}
              services. Need to drive downloads and user growth after launch? Our{" "}
              <Link href="/DigitalMarketing" className="mil-link mil-accent">Digital Marketing</Link>{" "}
              team covers paid, organic, and social channels. Want your app to appear
              in AI-generated answers?{" "}
              <Link href="/geo-ai-visibility" className="mil-link mil-accent">GEO AI Visibility</Link>{" "}
              is available separately.
            </p>
          </div>
        </div>
      </div>

    </Layouts>
  );
};

export default AppDevelopment;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();
  return {
    props: {
      projects: allProjects,
    },
  };
}
