import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import ProjectShowcaseCard from "@components/ProjectShowcaseCard";

// "Past performance" on a pillar page: the real projects listed in that pillar's
// `projects` frontmatter (src/data/services/<id>.md), in that order. Two per row,
// so the site screenshots stay large enough to read.
const PillarProjects = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="past-performance">
      <div className="container mil-p-0-90">
        <div className="mil-mb-60">
          <span className="mil-suptitle mil-suptitle-dark mil-upper mil-up mil-mb-30">Past performance</span>
          <h2 className="mil-up">Work we have <span className="mil-thin">delivered</span></h2>
        </div>

        <div className="row">
          {projects.map((item) => (
            <div className="col-lg-6 mil-mb-30" key={item.id}>
              <Link href={`/projects/${item.id}`} className="mil-up" style={{ display: "block" }}>
                <ProjectShowcaseCard item={item} accentColor="#E92518" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mil-up mil-mt-60">
          <Link href="/projects" className="mil-link mil-dark mil-arrow-place">
            <span>All past performance</span>
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PillarProjects;
