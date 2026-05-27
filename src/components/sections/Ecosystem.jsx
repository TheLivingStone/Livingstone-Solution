import Data from "@data/sections/ecosystem.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const EcosystemSection = () => {
    return (
        <>
            <section className="mil-dark-bg">
                <div className="mi-invert-fix">
                    <div className="container mil-p-120-0">
                        <div className="row justify-content-between align-items-center mil-mb-120">
                            <div className="col-lg-6">
                                <span className="mil-suptitle mil-light-soft mil-suptitle-right mil-up" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                <h2 className="mil-h2 mil-muted mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                            </div>
                            <div className="col-lg-5">
                                <p className="mil-light-soft mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                            </div>
                        </div>

                        <div className="row mil-services-grid m-0">
                            {Data.items.map((item, key) => (
                            <div key={`ecosystem-item-${key}`} className="col-md-6 col-lg-3 mil-services-grid-item p-0">
                                <Link 
                                    href={item.link} 
                                    target={item.link === "/" ? "_self" : "_blank"} 
                                    rel="noopener noreferrer" 
                                    className="mil-service-card-sm mil-up"
                                >
                                    <h5 className="mil-muted mil-mb-30" dangerouslySetInnerHTML={{__html : item.title}} />
                                    <p className="mil-light-soft mil-mb-30">{item.text}</p>
                                    <div className="mil-button mil-icon-button-sm mil-arrow-place">
                                        <ArrowIcon />
                                    </div>
                                </Link>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EcosystemSection;
