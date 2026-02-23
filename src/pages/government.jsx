import React from "react";
import Layouts from "@layouts/Layouts";
import PageBannerDark from "@components/PageBannerDark";
import CallToActionSection from "@components/sections/CallToAction";

const GovernmentCapabilities = () => {
    return (
        <Layouts>
            <div className="mil-dark-bg">
                <PageBannerDark
                    pageTitle={"Capabilities <span className=\"mil-thin\">Statement</span>"}
                    breadTitle={"Government"}
                    anchorLabel={"Read Capabilities"}
                    anchorLink={"#capabilities"}
                />
            </div>

            <section id="capabilities" className="mil-p-120-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mil-mb-60">
                            <h3 className="mil-up mil-mb-30">Mission-Ready IT & AI Solutions</h3>
                            <p className="mil-up mil-mb-30" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                                The Livingstone Solution specializes in the design and deployment of AI-assisted systems, custom software, and full-stack development. <strong>We deploy secure, AI-ready infrastructure 60% faster, eliminating technical debt and backlogs without service disruption.</strong> We deliver robust, cloud-based web and mobile platforms tailored for mission-critical operations.
                            </p>

                            <h3 className="mil-up mil-mb-30 mil-mt-60">Core Competencies</h3>
                            <div className="row mil-mb-60">
                                <div className="col-md-6 mil-up mil-mb-15">
                                    <div className="mil-icon-box mil-sm" style={{ padding: '20px', background: '#f8f8f8', borderRadius: '10px', height: '100%' }}>
                                        <h5 className="mil-mb-15" style={{ fontSize: '1.1rem' }}>AI Systems</h5>
                                        <p className="mil-text-sm" style={{ margin: 0 }}>Design and deployment of AI-assisted systems.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mil-up mil-mb-15">
                                    <div className="mil-icon-box mil-sm" style={{ padding: '20px', background: '#f8f8f8', borderRadius: '10px', height: '100%' }}>
                                        <h5 className="mil-mb-15" style={{ fontSize: '1.1rem' }}>Full-Stack Dev</h5>
                                        <p className="mil-text-sm" style={{ margin: 0 }}>Custom Software & Full-Stack Development.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mil-up mil-mb-15">
                                    <div className="mil-icon-box mil-sm" style={{ padding: '20px', background: '#f8f8f8', borderRadius: '10px', height: '100%' }}>
                                        <h5 className="mil-mb-15" style={{ fontSize: '1.1rem' }}>Cloud Platforms</h5>
                                        <p className="mil-text-sm" style={{ margin: 0 }}>Development of secure, cloud-based web and mobile platforms.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mil-up mil-mb-15">
                                    <div className="mil-icon-box mil-sm" style={{ padding: '20px', background: '#f8f8f8', borderRadius: '10px', height: '100%' }}>
                                        <h5 className="mil-mb-15" style={{ fontSize: '1.1rem' }}>Workflow Automation</h5>
                                        <p className="mil-text-sm" style={{ margin: 0 }}>AI-driven workflow optimization with human oversight.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mil-up mil-mb-15">
                                    <div className="mil-icon-box mil-sm" style={{ padding: '20px', background: '#f8f8f8', borderRadius: '10px', height: '100%' }}>
                                        <h5 className="mil-mb-15" style={{ fontSize: '1.1rem' }}>GEO Platforms</h5>
                                        <p className="mil-text-sm" style={{ margin: 0 }}>Digital transformation and Generative Engine Optimization.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mil-up mil-mb-15">
                                    <div className="mil-icon-box mil-sm" style={{ padding: '20px', background: '#f8f8f8', borderRadius: '10px', height: '100%' }}>
                                        <h5 className="mil-mb-15" style={{ fontSize: '1.1rem' }}>Engagement Systems</h5>
                                        <p className="mil-text-sm" style={{ margin: 0 }}>Intelligent Communication & Engagement Systems.</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="mil-up mil-mb-30">Key Differentiators</h3>
                            <div className="row mil-mb-60">
                                <div className="col-md-6 mil-up mil-mb-30">
                                    <div style={{ borderLeft: '4px solid #000', paddingLeft: '20px' }}>
                                        <h3 className="mil-mb-15">60% Faster</h3>
                                        <p className="mil-text-sm">System Delivery through AI-first development architecture.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mil-up mil-mb-30">
                                    <div style={{ borderLeft: '4px solid #000', paddingLeft: '20px' }}>
                                        <h3 className="mil-mb-15">80% Automations</h3>
                                        <p className="mil-text-sm">Repetitive Task Automation with human-in-the-loop oversight.</p>
                                    </div>
                                </div>
                                <div className="col-md-12 mil-up">
                                    <ul className="mil-text-sm mil-mt-15" style={{ paddingLeft: '20px' }}>
                                        <li className="mil-mb-10"><strong>Ownership:</strong> 100% End-to-End lifecycle management from design to deployment.</li>
                                        <li className="mil-mb-10"><strong>Expertise:</strong> Global-Scale, Mission-Critical Systems Experience.</li>
                                        <li className="mil-mb-10"><strong>Future-Proofing:</strong> AI-Ready System Architecture designed for effortless integrations.</li>
                                        <li><strong>Reliability:</strong> Significant Workload Offloading Without Service Disruption.</li>
                                    </ul>
                                </div>
                            </div>

                            <h3 className="mil-up mil-mb-30">Past Performance</h3>
                            <div className="row" id="past-performance-entries">
                                <div className="col-12 mil-up mil-mb-30">
                                    <div style={{ padding: '30px', border: '1px dashed #ccc', borderRadius: '10px', textAlign: 'center' }}>
                                        <p className="mil-text-sm" style={{ color: '#888', margin: 0 }}><em>Awaiting new past performance entries...</em></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mil-mb-60">
                            <div className="mil-sidebar-info mil-up mil-mb-30" style={{ background: '#f8f8f8', padding: '40px', borderRadius: '10px', position: 'sticky', top: '120px' }}>
                                <h4 className="mil-mb-30">Company Data</h4>
                                <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eee' }} className="mil-mb-30">
                                    <p className="mil-mb-10" style={{ fontSize: '18px' }}><strong>UEI:</strong> GGUGKJTEMU73</p>
                                    <p className="mil-mb-10" style={{ fontSize: '18px' }}><strong>CAGE:</strong> 16SZ9</p>
                                    <p style={{ fontSize: '18px', margin: 0 }}><strong>DUNS:</strong> 144857464</p>
                                </div>

                                <a href="mailto:Oliyad@thelivingstonefoundation.com?subject=Capabilities%20Statement%20Request" className="mil-button mil-button-lg mil-arrow-place mil-mb-30" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <span>Download Capability PDF</span>
                                </a>

                                <div className="mil-divider mil-mb-30"></div>

                                <h5 className="mil-mb-15">Point of Contact</h5>
                                <p className="mil-mb-5"><strong>Oliyad Deyasa</strong></p>
                                <p className="mil-mb-5"><a href="mailto:Oliyad@thelivingstonefoundation.com">Oliyad@thelivingstonefoundation.com</a></p>
                                <p className="mil-mb-15">(540) 998-9766</p>
                                <p className="mil-text-sm" style={{ margin: 0 }}>605 P ST NW, APT 12<br />Washington, DC, 20001</p>

                                <div className="mil-divider mil-mb-30 mil-mt-30"></div>

                                <h5 className="mil-mb-15">NAICS Codes</h5>
                                <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, fontSize: '13px', lineHeight: '1.6' }}>
                                    <li className="mil-mb-5"><strong>541511</strong> – Custom Computer Programming</li>
                                    <li className="mil-mb-5"><strong>541512</strong> – Computer Systems Design</li>
                                    <li className="mil-mb-5"><strong>541519</strong> – Other Computer Related Svcs</li>
                                    <li className="mil-mb-5"><strong>541611</strong> – Administrative Mgmt & Consulting</li>
                                    <li><strong>541613</strong> – Marketing Consulting Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CallToActionSection />
        </Layouts>
    );
};

export default GovernmentCapabilities;
