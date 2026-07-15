import React from "react";
import Link from "next/link";

const ProjectsMasonry = ({ projects }) => {
    const displayProjects = [...projects].reverse();

    const getDetailValue = (project, label) => {
        const detail = project.details?.find((item) => item.label?.toLowerCase().includes(label));
        return detail?.value;
    };

    const getProjectSummary = (project) => {
        return getDetailValue(project, "outcome") || project.short || "A focused digital product built to turn strategy, design, automation, and execution into measurable business momentum.";
    };

    const getDomain = (url) => {
        if (!url) return "Private case study";

        return url
            .replace(/^https?:\/\//, "")
            .replace(/^www\./, "")
            .replace(/\/$/, "");
    };

    const getVisualClass = (project) => {
        const category = project.category?.toLowerCase() || "";

        if (category.includes("app")) return "mil-case-preview-app";
        if (category.includes("ai")) return "mil-case-preview-ai";

        return "mil-case-preview-web";
    };

    const getPreviewTitle = (title) => {
        return title?.split(" - ")[0]?.split(" — ")[0] || title;
    };

    const getPreviewImage = (project) => {
        const unusableScreenshots = new Set([
            "project-04-duro-design-group",
            "project-07-livingstone-foundation"
        ]);

        if (!project.id || unusableScreenshots.has(project.id)) return null;

        return `/img/project-previews/${project.id}.png`;
    };
    
    return (
      <>
        {/* portfolio */}
        <section id="portfolio" className="mil-case-studies">
            <div className="container">
                <div className="mil-case-hero">
                    <div>
                        <div className="mil-case-kicker">Portfolio</div>
                        <h1>Featured <span>case studies</span></h1>
                    </div>
                    <p>
                        A focused look at the platforms, AI systems, commerce experiences, mobile apps, and operating systems we have built for brands, founders, nonprofits, and internal ventures.
                    </p>
                </div>

                <div className="mil-case-grid">
                    {displayProjects.map((item, key) => (
                        <Link href={`/projects/${item.id}`} className={key < 2 ? "mil-case-card mil-case-card-featured" : "mil-case-card"} key={`projects-item-${item.id}`}>
                            <div className={`mil-case-card-media ${getVisualClass(item)}`}>
                                <div className="mil-case-browser-bar">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <em>{getDomain(item.website)}</em>
                                </div>
                                {getPreviewImage(item) ? (
                                    <div className="mil-case-screenshot">
                                        <img src={getPreviewImage(item)} alt={`${item.title} website preview`} />
                                        <div className="mil-case-screenshot-shade"></div>
                                    </div>
                                ) : (
                                    <div className="mil-case-preview">
                                        <div className="mil-case-preview-top">
                                            <span>{getDomain(item.website)}</span>
                                            <span>{item.category}</span>
                                        </div>
                                        <strong>{getPreviewTitle(item.title)}</strong>
                                        <div className="mil-case-preview-lines">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div className="mil-case-preview-panels">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                )}
                                <div className="mil-case-card-glow"></div>
                            </div>
                            <div className="mil-case-card-body">
                                <div className="mil-case-card-meta">
                                    <span>{item.category}</span>
                                    <span>{item.date}</span>
                                </div>
                                <h2>{item.title}</h2>
                                <p>{getProjectSummary(item)}</p>
                                <div className="mil-case-card-footer">
                                    <span>{getDomain(item.website)}</span>
                                    <span>View case study</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
        {/* portfolio end */}
      </>
    );
};
export default ProjectsMasonry;
  
