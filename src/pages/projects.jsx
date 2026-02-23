import { useState } from 'react';

import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import SEO from "@components/SEO";
import ProjectsMasonry from "@components/ProjectsMasonry";
import CallToActionSection from "@components/sections/CallToAction";

import { getSortedProjectsData } from "@library/projects";

const Projects = (props) => {
  return (
    <Layouts>
      <SEO title="Portfolio" description="View our latest enterprise software, app, and web development projects in the Washington D.C. and DMV area." canonical="https://solution.thelivingstonefoundation.com/projects" />
      <PageBanner pageTitle={"Designing a <br> Better <span className=\"mil-thin\">World Today</span>"} breadTitle={"Portfolio"} anchorLabel={"Our works"} anchorLink={"#portfolio"} />

      <ProjectsMasonry projects={props.projects} />

      <CallToActionSection />

    </Layouts>
  );
};
export default Projects;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}