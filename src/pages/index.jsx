import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import SEO from "@components/SEO";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";

import HeroOneSection from "@components/sections/HeroOne"
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import EcosystemSection from "@components/sections/Ecosystem";
import HonorsAndMentions from "../components/sections/HonorsAndMentions";
import TeamSection from "@components/sections/Team";
import LatestPostsSection from "@components/sections/LatestPosts";

const TestimonialSlider = dynamic(() => import("@components/sliders/Testimonial"), { ssr: false });
const PartnersSlider = dynamic(() => import("@components/sliders/Partners"), { ssr: false });
const ModernCategorizedProjects = dynamic(() => import("@components/sliders/ModernCategorizedProjects"), { ssr: false });

const Home1 = (props) => {
  return (
    <Layouts>
      <SEO
        title="GEO, Software, Marketing & Government — The Livingstone Solution"
        description="Washington, D.C.-based, CBE-certified partner for Generative Engine Optimization (GEO), Software (web, mobile, cloud, AI), Marketing, and Government work. Be the answer ChatGPT, Claude, Perplexity, and Google AI Overviews recommend."
        keywords="Generative Engine Optimization, GEO, AI Visibility, Software Development, Web Development, Mobile Apps, Digital Marketing, Government Software, CBE Certified, Washington D.C."
        canonical="https://thelivingstonesolution.com/"
      />
      <HeroOneSection />
      <AboutSection />
      <ServicesSection />
      <EcosystemSection />
      {/* Stacked Project Slider */}
      <ModernCategorizedProjects projects={props.projects} />
      <TeamSection />
      <HonorsAndMentions />
      <TestimonialSlider />

      <PartnersSlider />
      <LatestPostsSection posts={props.posts} />
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const allProjects = getSortedProjectsData();

  return {
    props: {
      posts: allPosts,
      projects: allProjects
    }
  }
}