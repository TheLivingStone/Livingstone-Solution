import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ProjectsGrid from "@components/ProjectsGrid";
import CallToActionSection from "@components/sections/CallToAction";

import { getSortedProjectsData } from "@library/projects";
import SEO from "@components/SEO";

const Projects2 = (props) => {
  return (
    <Layouts>
      <SEO title="Portfolio Variant" description="Explore our enterprise portfolio" canonical="https://solution.thelivingstonefoundation.com/Portfolio" />
      <PageBanner pageTitle={"Living Stone Solution... <br> Better <span className=\"mil-thin\">Your Partner in Digital Transformation</span>"} breadTitle={"Portfolio"} anchorLabel={"Our works"} anchorLink={"#portfolio"} />

      <ProjectsGrid projects={props.projects} />

      <CallToActionSection />

    </Layouts>
  );
};
export default Projects2;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}