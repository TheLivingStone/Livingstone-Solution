import Layouts from "@layouts/Layouts";
import SEO from "@components/SEO";
import ProjectsMasonry from "@components/ProjectsMasonry";
import CallToActionSection from "@components/sections/CallToAction";
import { SITE_URL } from "@library/site";

import { getSortedProjectsData } from "@library/projects";

const Projects = (props) => {
  return (
    <Layouts>
      <SEO title="Past Performance" description="Past performance: the platforms, AI systems, mobile apps and websites The Livingstone Solution has built for businesses, nonprofits and organizations." canonical={`${SITE_URL}/projects`} />
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
