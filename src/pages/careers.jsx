import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import SEO from "@components/SEO";

const Careers = () => {
    return (
        <Layouts>
            <SEO title="Careers" description="Explore career opportunities at The Livingstone Solution." canonical="https://solution.thelivingstonefoundation.com/careers" />
            <PageBanner pageTitle={"Join Our <span className=\"mil-thin\">Team</span>"} breadTitle={"Careers"} anchorLabel={"View Roles"} anchorLink={"#careers"} />
            <section id="careers">
                <div className="container mil-p-120-90">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="mil-text mil-up mil-mb-30">
                                <h2>Careers at The Livingstone Solution</h2>
                                <p className="mil-mt-30">
                                    We are always looking for talented individuals to join our growing team. While we do not have any open positions at this exact moment, we are always accepting applications from passionate developers, designers, and digital marketers.
                                </p>
                                <p className="mil-mt-30">
                                    Please reach out to us via our <a href="/contact">contact page</a> to submit your resume and cover letter.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layouts>
    );
};
export default Careers;
