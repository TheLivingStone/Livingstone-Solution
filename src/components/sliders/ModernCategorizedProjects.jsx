import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollAnimation } from "../../common/scrollAnims";
import { useEffect } from "react";
import Link from "next/link";
import ProjectShowcaseCard from "@components/ProjectShowcaseCard";

// Add custom styles for pagination and animations
if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .project-card-overlay:hover .accent-line {
            transform: scaleX(1) !important;
        }
        
        .mil-pagination-0,
        .mil-pagination-1,
        .mil-pagination-2 {
            display: flex !important;
            align-items: center;
            justify-content: center;
        }
        
        .mil-pagination-0 .swiper-pagination-bullet,
        .mil-pagination-1 .swiper-pagination-bullet,
        .mil-pagination-2 .swiper-pagination-bullet {
            width: 12px !important;
            height: 12px !important;
            background: rgba(0,0,0,0.3) !important;
            opacity: 1 !important;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
            border-radius: 12px !important;
            margin: 0 6px !important;
            display: inline-block !important;
        }
        .mil-pagination-0 .swiper-pagination-bullet-active {
            background: #667eea !important;
            width: 36px !important;
            border-radius: 6px !important;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.5) !important;
        }
        .mil-pagination-1 .swiper-pagination-bullet-active {
            background: #ff6b6b !important;
            width: 36px !important;
            border-radius: 6px !important;
            box-shadow: 0 4px 15px rgba(255, 107, 107, 0.5) !important;
        }
        .mil-pagination-2 .swiper-pagination-bullet-active {
            background: #00a8ff !important;
            width: 36px !important;
            border-radius: 6px !important;
            box-shadow: 0 4px 15px rgba(0, 168, 255, 0.5) !important;
        }
    `;
    if (!document.getElementById('modern-projects-pagination-styles')) {
        style.id = 'modern-projects-pagination-styles';
        document.head.appendChild(style);
    }
}

const CategorySlider = ({ projects, category, displayName, bgColor, accentColor, index }) => {
    useEffect(() => {
        ScrollAnimation();
    }, []);

    const filteredProjects = projects.filter(project => {
        if (!project.category) return false;
        return project.category.toLowerCase().includes(category.toLowerCase());
    }).reverse();

    if (filteredProjects.length === 0) return null;

    return (
        <section style={{ 
            backgroundColor: bgColor,
            padding: '100px 0 80px',
            position: 'relative'
        }}>
            <div className="container" style={{ maxWidth: '1400px' }}>
                {/* Section Header */}
                <div className="row" style={{ marginBottom: '60px' }}>
                    <div className="col-12">
                        <div style={{ textAlign: 'center' }}>
                            <span style={{
                                display: 'inline-block',
                                padding: '8px 24px',
                                background: accentColor,
                                color: '#fff',
                                borderRadius: '30px',
                                fontSize: '12px',
                                fontWeight: '700',
                                letterSpacing: '2.5px',
                                textTransform: 'uppercase',
                                marginBottom: '20px',
                                boxShadow: `0 4px 15px ${accentColor}40`
                            }}>
                                {displayName}
                            </span>
                            <h2 className="mil-up" style={{
                                fontSize: '42px',
                                fontWeight: '500',
                                marginBottom: '15px',
                                color: '#1a1a1a'
                            }}>
                                Featured <span className="mil-thin">Projects</span>
                            </h2>
                            <p style={{
                                fontSize: '16px',
                                color: '#666',
                                maxWidth: '650px',
                                margin: '0 auto',
                                lineHeight: '1.6'
                            }}>
                                Explore our latest work in {displayName.toLowerCase()}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Projects Slider */}
                <div className="row">
                    <div className="col-12">
                        <div style={{ position: 'relative', padding: '0 80px' }}>
                            {/* Navigation Arrows - Positioned on sides at center height */}
                            <button 
                                className={`mil-prev-${index}`}
                                style={{
                                    position: 'absolute',
                                    left: '0',
                                    top: '240px',
                                    transform: 'translateY(-50%)',
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: '#fff',
                                    border: 'none',
                                    color: accentColor,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
                                    zIndex: 10
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.15)';
                                    e.currentTarget.style.background = accentColor;
                                    e.currentTarget.style.boxShadow = `0 12px 35px ${accentColor}50`;
                                    e.currentTarget.querySelector('svg').style.stroke = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                                    e.currentTarget.style.background = '#fff';
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.12)';
                                    e.currentTarget.querySelector('svg').style.stroke = accentColor;
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s ease', marginRight: '2px' }}>
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                            
                            <button 
                                className={`mil-next-${index}`}
                                style={{
                                    position: 'absolute',
                                    right: '0',
                                    top: '240px',
                                    transform: 'translateY(-50%)',
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: '#fff',
                                    border: 'none',
                                    color: accentColor,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
                                    zIndex: 10
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.15)';
                                    e.currentTarget.style.background = accentColor;
                                    e.currentTarget.style.boxShadow = `0 12px 35px ${accentColor}50`;
                                    e.currentTarget.querySelector('svg').style.stroke = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                                    e.currentTarget.style.background = '#fff';
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.12)';
                                    e.currentTarget.querySelector('svg').style.stroke = accentColor;
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s ease', marginLeft: '2px' }}>
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>

                            <Swiper
                                slidesPerView={1}
                                spaceBetween={25}
                                speed={1000}
                                loop={filteredProjects.length > 1}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                navigation={{
                                    nextEl: `.mil-next-${index}`,
                                    prevEl: `.mil-prev-${index}`,
                                }}
                                pagination={{
                                    el: `.mil-pagination-${index}`,
                                    clickable: true,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1.5,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 25,
                                    },
                                    1024: {
                                        slidesPerView: 2.5,
                                        spaceBetween: 30,
                                    },
                                    1280: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                                className="mil-up"
                            >
                                {filteredProjects.map((item, key) => (
                                    <SwiperSlide key={`${category}-${key}`} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Link href={`/projects/${item.id}`} style={{ width: '100%', display: 'block' }}>
                                            <ProjectShowcaseCard item={item} accentColor={accentColor} />
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            
                            {/* Pagination Dots - Centered Below */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '50px'
                            }}>
                                <div 
                                    className={`mil-pagination-${index}`}
                                    style={{
                                        display: 'flex !important',
                                        justifyContent: 'center',
                                        gap: '10px',
                                        position: 'relative',
                                        zIndex: 5
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ModernCategorizedProjects = ({ projects }) => {
    if (!projects || projects.length === 0) return null;

    const categories = [
        {
            name: 'Web Development',
            searchTerm: 'web',
            bgColor: '#f8f9fa',
            accentColor: '#667eea'
        },
        {
            name: 'App Development',
            searchTerm: 'app',
            bgColor: '#fff8f0',
            accentColor: '#ff6b6b'
        },
        {
            name: 'AI Automation',
            searchTerm: 'ai',
            bgColor: '#f0f9ff',
            accentColor: '#00a8ff'
        }
    ];

    return (
        <>
            {categories.map((category, index) => (
                <CategorySlider
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

export default ModernCategorizedProjects;
