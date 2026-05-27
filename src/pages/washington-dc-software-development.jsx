import Layouts from "@layouts/Layouts";
import React from "react";
import SEO from "@components/SEO";
import PageSchema from "@components/PageSchema";
import ExpertNote from "@components/ExpertNote";
import Link from "next/link";

const DC_SOFTWARE_SERVICE = {
  id: "https://thelivingstonesolution.com/washington-dc-software-development#service",
  url: "https://thelivingstonesolution.com/washington-dc-software-development",
  name: "Washington, D.C. Software Development Agency",
  serviceType: "Software Development",
  description:
    "LivingStoneSolution Technologies is a Washington, D.C.-headquartered software development agency serving D.C., federal, and commercial clients across the DMV region. The company is a Certified Business Enterprise (CBE) of the District of Columbia and operates four specialized divisions covering commercial, government, GEO, and marketing engagements.",
  areaServed: [
    "Washington, D.C.",
    "Arlington, VA",
    "Alexandria, VA",
    "Bethesda, MD",
    "Silver Spring, MD",
    "DMV Metro Area",
  ],
};

const DC_SOFTWARE_FAQ = [
  {
    question: "Is LivingStoneSolution based in Washington, D.C.?",
    answer:
      "Yes. LivingStoneSolution Technologies is headquartered in Washington, D.C., with additional team members in Chicago, IL and New York, NY. The company is a Certified Business Enterprise (CBE) verified by the D.C. Department of Small and Local Business Development, eligible for D.C. government set-aside contracts.",
  },
  {
    question: "What types of software does the Washington D.C. team build?",
    answer:
      "The Washington D.C. team builds web applications (Next.js, React), mobile apps (iOS, Android, React Native), enterprise B2B SaaS platforms, custom government and 508-compliant solutions, and AI/LLM integrations. The Livingstone Government division handles federal and state agency work; the Flagship division handles commercial clients.",
  },
  {
    question: "Does LivingStoneSolution work with federal government agencies in D.C.?",
    answer:
      "Yes. Through the Livingstone Government division, LivingStoneSolution provides 508-compliant, secure software for federal and D.C. government clients. The company's CBE status enables participation in D.C. government set-aside procurement.",
  },
  {
    question: "Where in the DMV area do clients hire LivingStoneSolution?",
    answer:
      "LivingStoneSolution serves clients across the District of Columbia, Northern Virginia (Arlington, Alexandria, Tysons, Reston), and suburban Maryland (Bethesda, Silver Spring, Rockville). All engagements are delivered remotely or hybrid; on-site visits are available for D.C. and immediate-metro clients.",
  },
  {
    question: "How is LivingStoneSolution different from other D.C. software agencies?",
    answer:
      "LivingStoneSolution operates as a four-division ecosystem — commercial software (Flagship), federal/state-compliant work (Government), AI search visibility (GEO Agency), and brand strategy (Marketing Firm). The integrated structure lets a single client engage one or all divisions under one CBE-certified parent organization.",
  },
];

const DC_SOFTWARE_BREADCRUMB = [
  { name: "Home", url: "https://thelivingstonesolution.com/" },
  { name: "Washington D.C. Software Development", url: "https://thelivingstonesolution.com/washington-dc-software-development" },
];

const DCSoftwareDevelopment = () => {
  return (
    <Layouts>
      <SEO
        title="Washington D.C. Software Development Agency — CBE Certified | LivingStoneSolution"
        description="LivingStoneSolution Technologies is a Washington D.C.-headquartered software development agency. CBE certified by the D.C. DSLBD, serving federal, commercial, and DMV-area clients. Web, mobile, enterprise software, and AI integration."
        keywords="Washington DC software development, DMV software agency, D.C. software developers, federal software contractor D.C., CBE software development"
        canonical="https://thelivingstonesolution.com/washington-dc-software-development"
      />
      <PageSchema
        service={DC_SOFTWARE_SERVICE}
        faq={DC_SOFTWARE_FAQ}
        breadcrumb={DC_SOFTWARE_BREADCRUMB}
      />

      <section className="container mil-p-120-90">
        <div className="row justify-content-center">
          <div className="col-lg-10">

            <h1 className="mil-mb-30">
              Washington, D.C. Software Development Agency
            </h1>

            {/* Answer-first definition — 40-60 words */}
            <p className="mil-text mil-mb-30">
              LivingStoneSolution Technologies is a Washington, D.C.-headquartered
              software development agency serving D.C., federal, and DMV-area
              commercial clients. The company is a Certified Business Enterprise
              (CBE) of the District of Columbia and operates four specialized
              divisions covering commercial software, government and 508-compliant
              work, generative engine optimization, and brand strategy.
            </p>

            {/* Quote slot reuses QS-01 SME (Oliyad) */}
            <ExpertNote
              slotId="QS-01-DC"
              quote={null}
              smeName="Oliyad Deyasa"
              smeRole="Co-Founder & CTO"
              smeLocation="Washington, D.C."
            />

            <div className="mil-divider mil-mb-60" />

            <h2 className="mil-mb-20">What We Build in the D.C. Region</h2>
            <p className="mil-text mil-mb-20">
              LivingStoneSolution&rsquo;s Washington D.C. engineering practice covers
              the full software stack for both commercial and government clients.
              Engagements range from single-page React applications to multi-tenant
              enterprise platforms and 508-compliant federal portals.
            </p>
            <ul className="mil-mb-40">
              <li className="mil-mb-10">
                <strong>Web applications</strong> &mdash; Next.js, React, Node.js,
                serverless on AWS and Azure
              </li>
              <li className="mil-mb-10">
                <strong>Mobile applications</strong> &mdash; iOS (Swift), Android
                (Kotlin), and cross-platform React Native &mdash;{" "}
                <Link href="/AppDevelopment" className="mil-link mil-accent">App Development service</Link>
              </li>
              <li className="mil-mb-10">
                <strong>Enterprise software</strong> &mdash; B2B SaaS, microservices,
                multi-tenant architecture
              </li>
              <li className="mil-mb-10">
                <strong>Government and 508-compliant platforms</strong> &mdash; through{" "}
                <Link href="/government" className="mil-link mil-accent">Livingstone Government</Link>
              </li>
              <li className="mil-mb-10">
                <strong>AI and LLM integration</strong> &mdash; custom GPT-class
                integration, RAG pipelines, AI customer support agents
              </li>
            </ul>

            <h2 className="mil-mb-20">Service Areas Across the DMV</h2>
            <p className="mil-text mil-mb-20">
              The Washington D.C. headquarters serves clients across the District,
              Northern Virginia, and suburban Maryland. On-site engagement is available
              for the immediate D.C. metro; all other markets are served via remote
              or hybrid delivery.
            </p>
            <ul className="mil-mb-40">
              <li><strong>District of Columbia</strong> &mdash; all wards, on-site available</li>
              <li><strong>Northern Virginia</strong> &mdash; Arlington, Alexandria, Tysons, Reston, McLean</li>
              <li><strong>Suburban Maryland</strong> &mdash; Bethesda, Silver Spring, Rockville, College Park</li>
              <li><strong>U.S. nationwide</strong> &mdash; remote delivery</li>
            </ul>

            <h2 className="mil-mb-20">Frequently Asked Questions</h2>

            {DC_SOFTWARE_FAQ.map((qa) => (
              <div key={qa.question} className="mil-mb-30">
                <h3 className="mil-mb-10">{qa.question}</h3>
                <p className="mil-text">{qa.answer}</p>
              </div>
            ))}

            <div className="mil-mb-40 mil-mt-30" style={{background:"#f7f8fc", borderLeft:"4px solid #c9a961", padding:"18px 24px", borderRadius:"4px"}}>
              <p className="mil-text" style={{margin:0}}>
                <strong>Verified D.C. Business:</strong> LivingStoneSolution
                Technologies is a Certified Business Enterprise (CBE) of the
                District of Columbia. See the{" "}
                <Link href="/certifications" className="mil-link mil-accent">certifications page</Link>{" "}
                for credential details and the DSLBD verification link.
              </p>
            </div>

            <h2 className="mil-mb-20">Get Started</h2>
            <p className="mil-text mil-mb-30">
              For commercial software engagements,{" "}
              <Link href="/book-geo" className="mil-link mil-accent">book a strategy call</Link>.
              For federal/state procurement and capabilities statement requests,{" "}
              <Link href="/government" className="mil-link mil-accent">visit the Government division</Link>{" "}
              or{" "}
              <Link href="/contact" className="mil-link mil-accent">contact us directly</Link>.
            </p>

          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default DCSoftwareDevelopment;
