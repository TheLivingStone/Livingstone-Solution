import { SliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollAnimation } from "../../common/scrollAnims";
import { useEffect } from "react";

import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import Pentagon from "@layouts/pentagon/Index";

const ProjectsSlider = ( { projects } ) => {
    useEffect(() => {
        ScrollAnimation();
    }, []);

  return (
    <>
        {/* portfolio */}
        <section className="mil-portfolio-slider-frame">
            <div className="mil-animation-frame">
                <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="1" data-value-2="2" style={{"top": "-60px", "right": "-4px"}}>
                    <Pentagon />
                </div>
            </div>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-9">
                        <Swiper
                            {...SliderProps.milPortfolioSlider}
                            className="swiper-container mil-portfolio-slider mil-up"
                        >
                            
                            <SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/1.png" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Flutter Based Finance App</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>1Percent Finance Ap</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={`https://play.google.com/store/apps/details?id=com.onepercent.one_percent`} className="mil-button mil-arrow-place">
                                            <span>View App</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            
                            
                            <SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/2.png" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Social Media App for Rider</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>Bicrrysta Social Media App</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={`https://play.google.com/store/apps/details?id=com.bicrrysta.bicrrysta`} className="mil-button mil-arrow-place">
                                            <span>View App</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide><SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/cw.png" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">App</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>Eye Space</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={`https://play.google.com/store/apps/details?id=com.onepercent.one_percent`} className="mil-button mil-arrow-place">
                                            <span>View App</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide><SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/cb.png" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">E Commerce App for Opthalmologists</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>1 percent App</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={`https://drive.google.com/file/d/1_L5ovbA3xRq9C_ccOPIoqhqIy4v4XHoc/view?usp=sharing`} className="mil-button mil-arrow-place">
                                            <span>View App</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide><SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/em.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Medicine Delivery App</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>Easy Meds</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={`https://drive.google.com/drive/folders/1k39cVdSTAOPdyvxPNbL88wyBHNRgxHjb?usp=sharing`} className="mil-button mil-arrow-place">
                                            <span>View App</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/mw.png" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Further Information cannot be revealed due to NDA</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>Mental Wellness App</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={`https://www.figma.com/file/KBXui45wFT8mcB6aw8xnjN/Life-App-Final-Version?type=design&node-id=0%3A1&t=c3TflIv1qEGqRH9r-1`} className="mil-button mil-arrow-place">
                                            <span>View App</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> <SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/j.png" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Further Information cannot be revealed due to NDA</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>A U.S NGO App</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={`https://www.figma.com/file/UpTXGsq5fOrDveS0eovLKL/Untitled?node-id=0%3A1&t=tgFN1DCz6qxshfAs-1`} className="mil-button mil-arrow-place">
                                            <span>View App</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> <SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/4.png" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Further Information cannot be revealed due to NDA</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>A Construction App</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={`https://www.figma.com/file/UvZX94oceFNhhcx7kJDRpS/GRYC-Constructions?node-id=0%3A1&t=HVqV9VxdKdLrkz57-1`} className="mil-button mil-arrow-place">
                                            <span>View App</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                         
                        </Swiper>
                    </div>
                    <div className="col-lg-3 mil-relative">
                        <div className="mil-portfolio-nav">
                            <div className="mil-portfolio-btns-frame">
                                <div className="swiper-portfolio-pagination" />
                                <div className="mil-slider-nav">
                                    <div className="mil-slider-arrow mil-prev mil-portfolio-prev mil-arrow-place">
                                        <ArrowIcon />
                                    </div>
                                    <div className="mil-slider-arrow mil-portfolio-next mil-arrow-place">
                                        <ArrowIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* portfolio end */}
    </>
  );
};
export default ProjectsSlider;
