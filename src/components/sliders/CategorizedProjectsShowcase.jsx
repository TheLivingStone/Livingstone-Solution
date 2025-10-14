import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollAnimation } from "../../common/scrollAnims";
import { useEffect } from "react";

import Link from "next/link";

import ArrowIcon from "@layouts/svg-icons/Arrow";
import Pentagon from "@layouts/pentagon/Index";

const CategorySection = ({ projects, category, displayName, bgColor, accentColor, index }) => {
    useEffect(() => {
        ScrollAnimation();
    }, []);

    // Filter projects by category using simple search term
    const filteredProjects = projects.filter(project => {
        if (!project.category) return false;
        return project.category.toLowerCase().includes(category.toLowerCase());
    });

    console.log(`${displayName || category} projects:`, filteredProjects.length);

    if (filteredProjects.length === 0) {
        console.log(`No projects found for ${displayName || category}`);
        return null;
    }

    return (
        <section className="mil-portfolio-slider-frame" style={{ backgroundColor: bgColor }}>
            <div className="mil-animation-frame">
                <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="1" data-value-2="2" style={{ "top": "-60px", "right": "-4px" }}>
                    <Pentagon />
                </div>
            </div>
            <div className="container mil-p-120-60">
                {/* Category Header */}
                <div className="row">
                    <div className="col-12">
                        <div className="mil-mb-90">
                            <span className="mil-suptitle mil-upper mil-up mil-mb-30" style={{
                                color: accentColor,
                                fontSize: '14px',
                                fontWeight: '600',
                                letterSpacing: '2px',
                                display: 'block'
                            }}>
                                {displayName || category}
                            </span>
                            <h2 className="mil-upper mil-up" style={{
                                fontSize: '48px',
                                fontWeight: '400',
                                lineHeight: '1.2'
                            }}>
                                Featured <span className="mil-thin">Projects</span>
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Slider */}
                <div className="row align-items-end">
                    <div className="col-lg-9">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            speed={800}
                            parallax={true}
                            mousewheel={{
                                enable: true
                            }}
                            navigation={{
                                nextEl: `.mil-portfolio-next-${index}`,
                                prevEl: `.mil-portfolio-prev-${index}`,
                            }}
                            pagination={{
                                el: `.swiper-portfolio-pagination-${index}`,
                                type: 'fraction',
                            }}
                            className="swiper-container mil-portfolio-slider mil-up"
                        >
                            {filteredProjects.map((item, key) => (
                                <SwiperSlide className="swiper-slide" key={`${category}-project-${key}`}>
                                    <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                        <div className="mil-cover-frame mil-drag">
                                            <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                        </div>
                                        <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                            <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                                <div className="mil-labels mil-mb-15">
                                                    <div className="mil-label mil-upper mil-accent">{item.category}</div>
                                                    <div className="mil-label mil-upper">{item.date}</div>
                                                </div>
                                                <h5>{item.title}</h5>
                                            </div>
                                            <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                                <Link href={`/projects/${item.id}`} className="mil-button mil-arrow-place">
                                                    <span>View Project</span>
                                                    <ArrowIcon />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="col-lg-3 mil-relative">
                        <div className="mil-portfolio-nav">
                            <div className="mil-portfolio-btns-frame">
                                <div className={`swiper-portfolio-pagination swiper-portfolio-pagination-${index}`} />
                                <div className="mil-slider-nav">
                                    <div className={`mil-slider-arrow mil-prev mil-portfolio-prev mil-portfolio-prev-${index} mil-arrow-place`}>
                                        <ArrowIcon />
                                    </div>
                                    <div className={`mil-slider-arrow mil-portfolio-next mil-portfolio-next-${index} mil-arrow-place`}>
                                        <ArrowIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CategorizedProjectsShowcase = ({ projects }) => {
    // Debug: Check if projects are being passed
    if (!projects || projects.length === 0) {
        console.log('No projects found');
        return null;
    }

    console.log('Total projects:', projects.length);
    console.log('Project categories:', projects.map(p => p.category));

    const categories = [
        {
            name: 'Web Development',
            searchTerm: 'web', // Simple search term
            bgColor: '#f5f5f7',
            accentColor: '#667eea'
        },
        {
            name: 'AI Automation',
            searchTerm: 'ai',
            bgColor: '#fef7f8',
            accentColor: '#f5576c'
        },
        {
            name: 'iOS App Development',
            searchTerm: 'ios',
            bgColor: '#f0f9ff',
            accentColor: '#00a8ff'
        }
    ];

    return (
        <>
            {categories.map((category, index) => (
                <CategorySection
                    key={category.name}
                    projects={projects}
                    category={category.searchTerm}
                    displayName={category.name}
                    bgColor={category.bgColor}
                    accentColor={category.accentColor}
                    index={index}
                />
            ))}
        </>
    );
};

export default CategorizedProjectsShowcase;
