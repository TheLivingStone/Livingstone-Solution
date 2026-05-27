import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import SEO from "@components/SEO";

const PrivacyPolicy = () => {
    return (
        <Layouts>
            <SEO title="Privacy Policy" description="Privacy Policy for The Livingstone Solution." canonical="https://thelivingstonesolution.com/privacy-policy" />
            <PageBanner pageTitle={"Privacy <span className=\"mil-thin\">Policy</span>"} breadTitle={"Privacy Policy"} anchorLabel={"Read Policy"} anchorLink={"#policy"} />
            <section id="policy">
                <div className="container mil-p-120-90">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="mil-text mil-up mil-mb-30">
                                <h2>Privacy Policy</h2>
                                <p className="mil-mt-30">
                                    Your privacy is important to us. It is The Livingstone Solution's policy to respect your privacy regarding any information we may collect from you across our website, <a href="https://thelivingstonesolution.com/">thelivingstonesolution.com</a>, and other sites we own and operate.
                                </p>
                                <p className="mil-mt-30">
                                    We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
                                </p>
                                <p className="mil-mt-30">
                                    We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.
                                </p>
                                <p className="mil-mt-30">
                                    This policy is effective as of 2023.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layouts>
    );
};
export default PrivacyPolicy;
