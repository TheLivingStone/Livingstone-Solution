import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import SEO from "@components/SEO";

const CookiePolicy = () => {
    return (
        <Layouts>
            <SEO title="Cookie Policy" description="Cookie Policy for The Livingstone Solution." canonical="https://solution.thelivingstonefoundation.com/cookie-policy" />
            <PageBanner pageTitle={"Cookie <span className=\"mil-thin\">Policy</span>"} breadTitle={"Cookie Policy"} anchorLabel={"Read Policy"} anchorLink={"#cookie"} />
            <section id="cookie">
                <div className="container mil-p-120-90">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="mil-text mil-up mil-mb-30">
                                <h2>Cookie Policy</h2>
                                <p className="mil-mt-30">
                                    This is the Cookie Policy for The Livingstone Solution, accessible from solution.thelivingstonefoundation.com.
                                </p>
                                <p className="mil-mt-30">
                                    As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.
                                </p>
                                <p className="mil-mt-30">
                                    We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layouts>
    );
};
export default CookiePolicy;
