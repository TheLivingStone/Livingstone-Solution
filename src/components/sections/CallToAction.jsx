import DefaultData from "@data/sections/call-to-action.json";
import Link from "next/link";

import ArrowIcon from "@layouts/svg-icons/Arrow";

// `data` lets a page swap in its own copy; it defaults to the site-wide CTA.
const CallToActionSection = ( { bg, id, data = DefaultData } ) => {
  const isExternal = data.button.link.startsWith("http");

  return (
    <>
        {/* call to action */}
        <section id={id} className="mil-soft-bg">
            <div className="container mil-p-120-120">
                <div className="row">
                    <div className="col-lg-10">
                        <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up" dangerouslySetInnerHTML={{__html : data.subtitle}} />
                    </div>
                </div>
                <div className="mil-center">
                    <h2 className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : data.title}} />
                    <div className="mil-up">
                        <Link
                            href={data.button.link}
                            className="mil-button mil-arrow-place"
                            {...(isExternal && { target: "_blank", rel: "noreferrer" })}
                        >
                            <span>{data.button.label}</span>
                            <ArrowIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        {/* call to action end */}
    </>
  );
};

export default CallToActionSection;
