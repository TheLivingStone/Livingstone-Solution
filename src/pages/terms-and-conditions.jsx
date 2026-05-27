import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import SEO from "@components/SEO";

const TermsAndConditions = () => {
    return (
        <Layouts>
            <SEO title="Terms and Conditions" description="Terms and Conditions for The Livingstone Solution." canonical="https://thelivingstonesolution.com/terms-and-conditions" />
            <PageBanner pageTitle={"Terms and <span className=\"mil-thin\">Conditions</span>"} breadTitle={"Terms & Conditions"} anchorLabel={"Read Terms"} anchorLink={"#terms"} />
            <section id="terms">
                <div className="container mil-p-120-90">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="mil-text mil-up mil-mb-30">
                                <h2>Terms and Conditions</h2>
                                <p className="mil-mt-30">
                                    Welcome to The Livingstone Solution.
                                </p>
                                <p className="mil-mt-30">
                                    By accessing this website we assume you accept these terms and conditions. Do not continue to use The Livingstone Solution if you do not agree to take all of the terms and conditions stated on this page.
                                </p>
                                <p className="mil-mt-30">
                                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layouts>
    );
};
export default TermsAndConditions;
