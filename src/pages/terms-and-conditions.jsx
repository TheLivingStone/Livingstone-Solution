import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import SEO from "@components/SEO";
import { SITE_URL } from "@library/site";

const TermsAndConditions = () => {
    return (
        <Layouts>
            <SEO title="Terms and Conditions" description="Terms and Conditions for The Livingstone Solution." canonical={`${SITE_URL}/terms-and-conditions`} />
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
                                <h3 id="sms" className="mil-mt-60">Text messaging terms</h3>
                                <p className="mil-mt-30">
                                    The Livingstone Solution sends text messages to people who request a free AI visibility check or a call with us and agree to receive texts. Messages cover your request: confirming it, sharing a booking link, and reminders about your call.
                                </p>
                                <p className="mil-mt-30">
                                    Message frequency varies, up to 4 messages per request. Message and data rates may apply. Consent to receive texts is not a condition of any purchase.
                                </p>
                                <p className="mil-mt-30">
                                    Reply STOP at any time to stop receiving messages; you will get one final message confirming you have been unsubscribed. Reply HELP for help, or email <a href="mailto:oliyad@thelivingstonefoundation.com">oliyad@thelivingstonefoundation.com</a>.
                                </p>
                                <p className="mil-mt-30">
                                    Carriers are not liable for delayed or undelivered messages. To learn how we handle your mobile number, see our <a href="/privacy-policy#sms">Privacy Policy</a>.
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
