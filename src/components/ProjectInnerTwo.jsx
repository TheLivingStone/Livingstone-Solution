import Link from "next/link";
import ImageView from "@components/ImageView";

const ProjectInner2 = ({ postData, prev, next }) => {
    return (
    <>
    {/* project */}
    <section className="mil-p-120-0">
        <div className="container mil-p-0-120" id="project">
            {typeof postData.fullImage != "undefined" &&
            <div className="mil-image-frame mil-horizontal mil-up">
                <img src={postData.fullImage} alt={postData.title} />
                <a data-fancybox="gallery" data-no-swup href={postData.fullImage} className="mil-zoom-btn">
                    <img src="/img/icons/zoom.svg" alt="zoom" />
                </a>
            </div>
            }
            {typeof postData.details != "undefined" &&
            <div className="mil-info mil-up">
                {postData.details.map((item, key) => (
                <div key={`project-details-item-${key}`}>{item.label} &nbsp;<span className="mil-dark">{item.value}</span></div>
                
                ))}   <a style={{marginLeft:"-120px"}} data-no-swup href={postData.website} target="_blank" className="mil-link mil-dark mil-up mil-arrow-place">
                <span>Visit website</span>
            </a>
            </div>
            }

         

            <div className="mil-works-nav mil-up">
                <Link href={(prev.id != 0 && prev.id != undefined) ? `/projects/${prev.id}` : ""} className={(prev.id != 0 && prev.id != undefined) ? "mil-link mil-dark mil-arrow-place mil-icon-left" : "mil-link mil-dark mil-arrow-place mil-icon-left mil-disabled"}>
                    <span>Prev project</span>
                </Link>
                <Link href="/projects" className="mil-link mil-dark">
                    <span>All projects</span>
                </Link>
                <Link href={(next.id != 0 && next.id != undefined) ? `/projects/${next.id}` : ""} className={(next.id != 0 && next.id != undefined) ? "mil-link mil-dark mil-arrow-place" : "mil-link mil-dark mil-arrow-place mil-disabled"}>
                    <span>Next project</span>
                </Link>
            </div>
        </div>

        <ImageView />
    </section>
    {/* project end */}
    </>
    )
};
export default ProjectInner2;