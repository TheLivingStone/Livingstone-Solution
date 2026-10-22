import Data from "@data/sections/ai-training.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { BOOKING_URL } from "@library/site";

const AiTrainingSection = () => {
  return (
    <>
        {/* ai training */}
        <section id="ai-training">
            <div className="container mil-p-120-90">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6 mil-mb-30">
                        <span className="mil-suptitle mil-suptitle-dark mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                        <h2 className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : Data.title}} />
                        <p className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : Data.description}} />
                        <div className="mil-up mil-mb-30">
                            <Link href={Data.button.link} className="mil-button mil-arrow-place mil-btn-space">
                                <span>{Data.button.label}</span>
                                <ArrowIcon />
                            </Link>
                            <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="mil-link mil-dark mil-arrow-place">
                                <span>{Data.booking.label}</span>
                                <ArrowIcon />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5 mil-mb-30">
                        <ul className="mil-service-list mil-dark">
                            {Data.items.map((item, key) => (
                                <li className="mil-up" key={`ai-training-item-${key}`} dangerouslySetInnerHTML={{__html : item}} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/* ai training end */}
    </>
  );
};

export default AiTrainingSection;
