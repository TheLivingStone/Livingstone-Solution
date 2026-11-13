import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import SEO from "@components/SEO";
import { SITE_URL } from "@library/site";

import { getSortedProjectsData } from "@library/projects";

import HeroOneSection from "@components/sections/HeroOne"
import ServicesSection from "@components/sections/Services";
import CallToActionSection from "@components/sections/CallToAction";

const ModernCategorizedProjects = dynamic(() => import("@components/sliders/ModernCategorizedProjects"), { ssr: false });

// The site-wide CTA re-lists the four pillars, which sit directly above it here.
const HOME_CTA = {
  title: "Let's <span class=\"mil-thin\">talk.</span>",
  subtitle: "Tell us what you need. We'll show you where technology can help.",
  button: {
    label: "Book a consultation",
    link: "https://cal.com/oliyad-deyasa-oiiybc/30min",
  },
};

// Hero, the four pillars, real work, one call to action. Everything else lives
// one click deeper (pillar pages, /team, /video, /blog) so the message reads in seconds.
const Home1 = (props) => {
  return (
    <Layouts>
      <SEO
        title="AI Integration, Software, Marketing & AI Training"
        description="The Livingstone Solution, where technology meets life. We empower businesses and government organizations to serve their customers, their people and their clients more effectively."
        keywords="AI Integration, AI Consulting, Technology Consulting, AI Agents, AI Automation, Government AI Solutions, Software Development, Marketing, GEO, Video Production, AI Training, AI Workshops, Workforce AI Training, Custom AI Modules, CBE Certified, Washington D.C."
        canonical={`${SITE_URL}/`}
      />
      <HeroOneSection />
      <ServicesSection />
      <ModernCategorizedProjects projects={props.projects} />
      <CallToActionSection data={HOME_CTA} />
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}
