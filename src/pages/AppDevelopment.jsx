import { getSortedProjectsData } from "@library/projects";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import React from "react";
import SEO from "@components/SEO";
import Link from "next/link";

const ProjectsSlider = dynamic(() => import("@components/sliders/AppProjects"), { ssr: false });

const Projects3 = (props) => {
  return (
    <Layouts noFooter>
      <SEO
        title="App Development Services"
        description="We build high-performance mobile applications for iOS and Android. Transform your ideas into engaging mobile experiences."
        keywords="App Development, Mobile Apps, iOS Development, Android Development, React Native"
        canonical="https://solution.thelivingstonefoundation.com/AppDevelopment"
      />
      <ProjectsSlider projects={props.projects} />

      {/* Related Services Links */}
      <div className="container mil-p-0-120">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="mil-mb-30">Explore More Digital Solutions</h3>
            <p className="mil-mb-30">
              Looking to build your online presence? Check out our <Link href="/WebDevelopment" className="mil-link mil-accent">Web Development</Link> services, connect with audiences using <Link href="/DigitalMarketing" className="mil-link mil-accent">Digital Marketing</Link>, and build a unified brand experience with our <Link href="/Branding" className="mil-link mil-accent">Branding</Link> experts.
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