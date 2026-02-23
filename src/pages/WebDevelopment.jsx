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
        title="Custom Web Development Services"
        description="Expert web development services. We build scalable, modern websites and web applications tailored to your business needs."
        keywords="Web Development, Custom Websites, Web Applications, Frontend, Backend, Software Development"
        canonical="https://solution.thelivingstonefoundation.com/WebDevelopment"
      />
      <ProjectsSlider projects={props.projects} />

      {/* Related Services Links */}
      <div className="container mil-p-0-120">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="mil-mb-30">Enhance Your Digital Experience</h3>
            <p className="mil-mb-30">
              A robust website is just the beginning. Extend your reach with our custom <Link href="/AppDevelopment" className="mil-link mil-accent">App Development</Link> solutions, or drive targeted traffic to your new site through our data-driven <Link href="/DigitalMarketing" className="mil-link mil-accent">Digital Marketing</Link> services. Don't forget to establish a strong identity with our <Link href="/Branding" className="mil-link mil-accent">Branding</Link> experts.
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