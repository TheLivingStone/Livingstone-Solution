import { getSortedProjectsData } from "@library/projects";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import SEO from "@components/SEO";
import { SITE_URL } from "@library/site";

const ProjectsSlider = dynamic(() => import("@components/sliders/Projects"), { ssr: false });

const Projects3 = (props) => {
  return (
    <Layouts noFooter>
      <SEO title="Portfolio Slides" description="Explore our portfolio of enterprise software and web applications tailored for the DMV region." canonical={`${SITE_URL}/Portfolio`} />
      <ProjectsSlider projects={props.projects} />

    </Layouts>
  );
};
export default Projects3;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}