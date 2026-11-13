import Data from "@data/sections/services.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import Pentagon from "@layouts/pentagon/Index";

const ServicesSection = () => {
  return (
    <>
        {/* services */}
        <section id="pillars" className="mil-dark-bg">
            <div className="mi-invert-fix">
                <div className="mil-animation-frame">
                    <div className="mil-animation mil-position-1 mil-scale" data-value-1="2.4" data-value-2="1.4" style={{"top": "300px", "right": "-100px"}}>
                        <Pentagon />
                    </div>
                    <div className="mil-animation mil-position-2 mil-scale" data-value-1="2" data-value-2="1" style={{"left": "150px"}}>
                        <Pentagon />
                    </div>
                </div>
                <div className="container mil-p-120-60">

                    <h2 className="mil-h2 mil-muted mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : Data.title}} />

                    <div className="row mil-services-grid m-0">
                        {Data.items.map((item, key) => (
                        <div key={`services-item-${key}`} className="col-md-6 col-lg-3 mil-services-grid-item p-0">

                            <Link href={item.link} className="mil-service-card-sm mil-up">
                                <h5 className="mil-muted mil-mb-30" dangerouslySetInnerHTML={{__html : item.title}} />
                                <p className="mil-light-soft mil-mb-30">{item.text}</p>
                                <div className="mil-button mil-icon-button-sm mil-arrow-place">
                                    <ArrowIcon />
                                </div>
                            </Link>

                        </div>
                        ))}
                    </div>

                    <p className="mil-light-soft mil-text-sm mil-up mil-mt-60" dangerouslySetInnerHTML={{__html : Data.note}} />
                </div>
            </div>
        </section>
        {/* services end */}
    </>
  );
};

export default ServicesSection;
