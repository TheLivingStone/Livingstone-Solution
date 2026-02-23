import { getSortedProjectsData } from "@library/projects";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import React from "react";
import SEO from "@components/SEO";
import Link from "next/link";

const ProjectsSlider = dynamic(() => import("@components/sliders/Projects"), { ssr: false });

const Projects3 = (props) => {
  return (
    <Layouts noFooter>
      <SEO
        title="Digital Marketing Agency"
        description="Grow your business with our data-driven digital marketing strategies. SEO, PPC, Social Media, and more."
        keywords="Digital Marketing, SEO, Search Engine Optimization, PPC, Social Media Marketing, Content Marketing"
        canonical="https://solution.thelivingstonefoundation.com/DigitalMarketing"
      />
      <ProjectsSlider projects={props.projects} />

      {/* Related Services Links */}
      <div className="container mil-p-0-120">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="mil-mb-30">Complete Your Digital Strategy</h3>
            <p className="mil-mb-30">
              A great marketing campaign needs a powerful platform. Enhance your conversions with our <Link href="/WebDevelopment" className="mil-link mil-accent">Web Development</Link> or <Link href="/AppDevelopment" className="mil-link mil-accent">App Development</Link> solutions, and ensure a consistent message with our <Link href="/Branding" className="mil-link mil-accent">Branding</Link> services.
            </p>
          </div>
        </div>
      </div>

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