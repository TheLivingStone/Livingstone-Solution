import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import SEO from "@components/SEO";
import { SITE_URL } from "@library/site";

const PrivacyPolicy = () => {
    return (
        <Layouts>
            <SEO title="Privacy Policy" description="Privacy Policy for The Livingstone Solution." canonical={`${SITE_URL}/privacy-policy`} />
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
                                <h3 id="sms" className="mil-mt-60">Text messaging (SMS)</h3>
                                <p className="mil-mt-30">
                                    If you agree to receive text messages from The Livingstone Solution, for example by ticking the text-consent box on one of our forms, we collect your mobile phone number and a record of your consent. We use them only to send the messages you asked for, such as follow-up on your AI visibility check and scheduling your call.
                                </p>
                                <p className="mil-mt-30">
                                    No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent are excluded from every other use in this policy and will not be shared with any third parties. Sharing with subcontractors that support our messaging, such as our SMS delivery provider, is permitted only to deliver those messages.
                                </p>
                                <p className="mil-mt-30">
                                    You can opt out at any time by replying STOP to any message. Reply HELP for help, or email <a href="mailto:oliyad@thelivingstonefoundation.com">oliyad@thelivingstonefoundation.com</a>. Message and data rates may apply. See our <a href="/terms-and-conditions#sms">messaging terms</a>.
                                </p>
                                <p className="mil-mt-30">
                                    This policy is effective as of 2023 and was last updated on October 19, 2026.
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
