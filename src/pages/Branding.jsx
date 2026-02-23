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
        title="Branding & Identity Services"
        description="Craft a compelling story and visual identity with our expert branding services. Make your brand unforgettable."
        keywords="Branding, visual identity, brand strategy, graphic design, logo design"
      />
      <ProjectsSlider projects={props.projects} />

      {/* Related Services Links */}
      <div className="container mil-p-0-120">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="mil-mb-30">Bring Your Brand to Life</h3>
            <p className="mil-mb-30">
              Once your identity is set, translate it digitally through our <Link href="/WebDevelopment" className="mil-link mil-accent">Web Development</Link> and <Link href="/AppDevelopment" className="mil-link mil-accent">App Development</Link> services, then scale your reach with <Link href="/DigitalMarketing" className="mil-link mil-accent">Digital Marketing</Link>.
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