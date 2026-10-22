import React, { useEffect } from "react";
import Layouts from "@layouts/Layouts";
import PageBannerDark from "@components/PageBannerDark";
import CallToActionSection from "@components/sections/CallToAction";
import PageSchema from "@components/PageSchema";
import SEO from "@components/SEO";
import { SITE_URL, BOOKING_URL } from "@library/site";
import { Accordion } from "../common/utilits";

/* ─── AI Training — page-level schema data ──────────────────────────────────
 * Everything here mirrors visible copy on this page. No client names, stats,
 * testimonials or certifications are claimed; add them only once they can be
 * proven.
 * ──────────────────────────────────────────────────────────────────────────*/
const AI_TRAINING_SERVICE = {
  id: `${SITE_URL}/ai-training#service`,
  url: `${SITE_URL}/ai-training`,
  name: "AI Training and Custom AI Modules",
  serviceType: "Workforce AI training",
  description:
    "Workforce AI training and custom AI modules for companies and government. The Livingstone Solution trains employees on their own use cases, builds a custom AI module for each repetitive task, and posts every module to the organization's own AI module platform.",
  areaServed: ["Washington, D.C.", "United States"],
};

const AI_TRAINING_FAQ = [
  {
    question: "What is workforce AI training?",
    answer:
      "Workforce AI training teaches employees to use AI on their own day-to-day tasks, not a general overview of what AI can do. We sit down with your team, find the repetitive tasks in their work, and train them on a custom AI module built for each one.",
  },
  {
    question: "What is a custom AI module?",
    answer:
      "A custom AI module is an AI solution built for one specific pain point, such as a task a team repeats every day. Each module targets one task, so it can be released quickly. It is posted to your organization's AI module platform so staff can look it up whenever the issue comes back.",
  },
  {
    question: "Do you offer AI training and AI solutions for government?",
    answer:
      "Yes. Government AI solutions are built for a specific department and the work it does, not as one-size-fits-all modules. The Livingstone Solution is registered for federal work under UEI GGUGKJTEMU73 and CAGE 16SZ9.",
  },
  {
    question: "How do you make sure employees keep using AI after the training?",
    answer:
      "Through continuous everyday use, not one-time workshops. Staff go back to their AI module platform whenever an issue comes up, and we keep adding new modules as new needs appear.",
  },
];

const AI_TRAINING_BREADCRUMB = [
  { name: "Home", url: `${SITE_URL}/` },
  { name: "AI Training", url: `${SITE_URL}/ai-training` },
];

const STEPS = [
  {
    title: "Sit down with your team",
    text: "We come in and sit with your employees to see how the work really gets done.",
  },
  {
    title: "Find the repetitive tasks",
    text: "We pinpoint the tasks that repeat every day and slow your team down.",
  },
  {
    title: "Build a custom AI module",
    text: "Each pain point gets its own AI module, focused on one task and released quickly.",
  },
  {
    title: "Train staff on their own work",
    text: "Your people learn each module on the exact task it was built for.",
  },
];

const PLATFORM_LOOP = [
  "An issue comes up",
  "We build the solution",
  "We post it to your platform",
  "Your staff look it up next time",
];

const OFFERINGS = [
  {
    title: "AI <span class=\"mil-thin\">Training</span>",
    text: "Hands-on AI training for companies and teams, taught on each team's own use cases.",
  },
  {
    title: "Custom <span class=\"mil-thin\">AI Modules</span>",
    text: "One custom AI module per pain point. Specific to the task and quick to release.",
  },
  {
    title: "Government <span class=\"mil-thin\">AI Solutions</span>",
    text: "AI solutions and training built for each government department, not one-size-fits-all.",
  },
  {
    title: "Workforce <span class=\"mil-thin\">AI Training &amp; Modules</span>",
    text: "Ongoing workforce AI training and new modules as issues come up, so AI becomes part of everyday work.",
  },
];

const CTA = {
  subtitle: "Workforce AI training and custom AI modules <br> for companies and government agencies.",
  title: "Train your team <span class=\"mil-thin\">on AI.</span> <br> Let&rsquo;s <span class=\"mil-thin\">talk.</span>",
  button: {
    label: "Book a consultation",
    link: BOOKING_URL,
  },
};

const cardStyle = {
  border: "1px solid rgba(0, 0, 0, 0.1)",
  padding: "40px",
  height: "100%",
};

const AiTraining = () => {
  useEffect(() => {
    Accordion();
  }, []);

  return (
    <Layouts>
      <SEO
        title="AI Training & Custom AI Modules for Companies and Government"
        description="Workforce AI training and custom AI modules for companies and government. We train employees on their own use cases and build a custom AI module for every repetitive task."
        keywords="AI Training, Workforce AI Training, AI Training for Employees, Corporate AI Training, Custom AI Modules, Government AI Solutions, AI Training for Government, AI Training Washington D.C."
        canonical={`${SITE_URL}/ai-training`}
      />
      <PageSchema
        service={AI_TRAINING_SERVICE}
        faq={AI_TRAINING_FAQ}
        breadcrumb={AI_TRAINING_BREADCRUMB}
      />

      <div className="mil-dark-bg">
        <PageBannerDark
          pageTitle={"AI Training <span class=\"mil-thin\">&amp;</span><br> Custom <span class=\"mil-thin\">AI Modules</span>"}
          breadTitle={"AI Training"}
          anchorLabel={"How it works"}
          anchorLink={"#approach"}
        />
      </div>

      {/* problem */}
      <section id="approach">
        <div className="container mil-p-120-60">
          <div className="row justify-content-between">
            <div className="col-lg-5 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-dark mil-upper mil-up mil-mb-30">Workforce AI training</span>
              <h2 className="mil-up">
                AI training <span className="mil-thin">built on</span> your use case.
              </h2>
            </div>
            <div className="col-lg-6 mil-mb-60">
              <p className="mil-text-lg mil-up mil-mb-30">
                Most AI training stops at &ldquo;this is AI, and this is what it can do.&rdquo; That isn&rsquo;t enough.
                We train your people on their own use case: the tasks they do every day.
              </p>
              <p className="mil-up">
                At a conference we attended in October 2026, everyone said the same thing:
                AI implementation and AI training are the hardest part. That&rsquo;s what we solve.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* problem end */}

      {/* how it works */}
      <section className="mil-soft-bg">
        <div className="container mil-p-120-60">
          <div className="row">
            <div className="col-lg-8 mil-mb-90">
              <span className="mil-suptitle mil-suptitle-dark mil-upper mil-up mil-mb-30">How it works</span>
              <h2 className="mil-up">
                How our AI training <span className="mil-thin">works</span>
              </h2>
            </div>
          </div>
          <div className="row">
            {STEPS.map((step, key) => (
              <div className="col-md-6 col-lg-3 mil-mb-60" key={`ai-training-step-${key}`}>
                <h3 className="mil-accent mil-thin mil-up mil-mb-30">{String(key + 1).padStart(2, "0")}</h3>
                <h5 className="mil-up mil-mb-15">{step.title}</h5>
                <p className="mil-up">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* how it works end */}

      {/* module platform */}
      <section className="mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="container mil-p-120-60">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 mil-mb-60">
                <span className="mil-suptitle mil-light-soft mil-upper mil-up mil-mb-30">AI module platform</span>
                <h2 className="mil-muted mil-up mil-mb-60">
                  Your own <span className="mil-thin">AI module</span> platform
                </h2>
                <p className="mil-light-soft mil-up mil-mb-30">
                  We build each organization its own AI module platform. Whenever an issue comes up, we create a solution
                  and post it there. The next time your staff face that issue, they look it up.
                </p>
                <p className="mil-muted mil-up">
                  That&rsquo;s how organizations see growth and real change.
                </p>
              </div>
              <div className="col-lg-5 mil-mb-60">
                <ul className="mil-service-list mil-light">
                  {PLATFORM_LOOP.map((item, key) => (
                    <li className="mil-up" key={`ai-training-loop-${key}`}>
                      <span className="mil-accent">{String(key + 1).padStart(2, "0")}</span>&nbsp;&nbsp;{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* module platform end */}

      {/* offerings */}
      <section id="offerings" className="mil-soft-bg">
        <div className="container mil-p-120-90">
          <div className="row">
            <div className="col-lg-8 mil-mb-90">
              <span className="mil-suptitle mil-suptitle-dark mil-upper mil-up mil-mb-30">Services</span>
              <h2 className="mil-up">
                AI training <span className="mil-thin">services</span>
              </h2>
            </div>
          </div>
          <div className="row">
            {OFFERINGS.map((item, key) => (
              <div className="col-md-6 mil-mb-30" key={`ai-training-offering-${key}`}>
                <div className="mil-up" style={cardStyle}>
                  <span className="mil-upper mil-accent mil-mb-30" style={{ display: "block" }}>
                    {String(key + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mil-mb-30" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* offerings end */}

      {/* faq */}
      <section>
        <div className="container mil-p-120-90">
          <div className="row justify-content-between">
            <div className="col-lg-4 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-dark mil-upper mil-up mil-mb-30">FAQ</span>
              <h2 className="mil-up">
                AI training <span className="mil-thin">FAQ</span>
              </h2>
            </div>
            <div className="col-lg-7">
              {AI_TRAINING_FAQ.map((item, key) => (
                <div className="mil-accordion-group mil-up" key={`ai-training-faq-${key}`}>
                  <div className="mil-accordion-menu">
                    <p className="mil-accordion-head">{item.question}</p>
                    <div className="mil-symbol mil-h3">
                      <div className="mil-plus">+</div>
                      <div className="mil-minus">-</div>
                    </div>
                  </div>
                  <div className="mil-accordion-content mil-text">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* faq end */}

      <CallToActionSection id="book" data={CTA} />
    </Layouts>
  );
};

export default AiTraining;
