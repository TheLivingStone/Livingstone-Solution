import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollAnimation } from "../../common/scrollAnims";
import { useEffect, useState } from "react";
import Link from "next/link";

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

const getDetailValue = (project, label) => {
    const detail = project.details?.find((item) => item.label?.toLowerCase().includes(label));
    return detail?.value;
};

const getDomain = (url) => {
    if (!url) return "Private build";

    return url
        .replace(/^https?:\/\//, "")
        .replace(/^www\./, "")
        .replace(/\/$/, "");
};

const getPreviewImage = (project) => {
    if (!project.id) return null;

    const unusableScreenshots = new Set([
        "project-04-duro-design-group",
        "project-07-livingstone-foundation"
    ]);

    if (unusableScreenshots.has(project.id)) return null;

    return `/img/project-previews/${project.id}.png`;
};

const getPreviewLabel = (title) => {
    return title?.split(" - ")[0]?.split(" — ")[0] || title;
};

const ProjectShowcaseCard = ({ item, accentColor }) => {
    const [previewFailed, setPreviewFailed] = useState(false);
    const previewImage = getPreviewImage(item);
    const shouldUsePreview = previewImage && !previewFailed;
    const summary = getDetailValue(item, "outcome") || item.short || "A focused digital product built for business impact, automation, and a stronger customer experience.";

    return (
        <div
            className="project-card-overlay"
            style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                background: '#101010',
                boxShadow: '0 15px 50px rgba(0,0,0,0.12)',
                transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
                cursor: 'pointer',
                height: '520px',
                width: '100%',
                margin: '0 auto',
                transform: 'translateY(0) scale(1)',
                transformOrigin: 'center center',
                zIndex: 1
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px)';
                e.currentTarget.style.boxShadow = `0 30px 80px ${accentColor}45`;
                e.currentTarget.style.zIndex = '100';

                const img = e.currentTarget.querySelector('.project-preview-image');
                if (img) img.style.transform = 'translateY(-18px) scale(1.02)';

                const accent = e.currentTarget.querySelector('.accent-line');
                if (accent) accent.style.transform = 'scaleX(1)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.12)';
                e.currentTarget.style.zIndex = '1';

                const img = e.currentTarget.querySelector('.project-preview-image');
                if (img) img.style.transform = 'translateY(0) scale(1)';

                const accent = e.currentTarget.querySelector('.accent-line');
                if (accent) accent.style.transform = 'scaleX(0)';
            }}
        >
            <div style={{
                position: 'absolute',
                inset: '0',
                background: shouldUsePreview
                    ? 'linear-gradient(180deg, #f5f5f5 0%, #e9e9e9 100%)'
                    : `linear-gradient(135deg, ${accentColor} 0%, #111 82%)`
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '0 16px',
                    background: '#151515',
                    zIndex: 4
                }}>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ff5f57' }} />
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#febc2e' }} />
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#28c840' }} />
                    <span style={{
                        marginLeft: '10px',
                        overflow: 'hidden',
                        color: 'rgba(255,255,255,.72)',
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '.08em',
                        textOverflow: 'ellipsis',
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap'
                    }}>{getDomain(item.website)}</span>
                </div>

                {shouldUsePreview ? (
                    <img
                        className="project-preview-image"
                        src={previewImage}
                        alt={`${item.title} website preview`}
                        onError={() => setPreviewFailed(true)}
                        style={{
                            position: 'absolute',
                            top: '38px',
                            left: 0,
                            width: '100%',
                            height: '310px',
                            objectFit: 'cover',
                            objectPosition: 'top center',
                            transition: 'transform .7s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    />
                ) : (
                    <div style={{
                        position: 'absolute',
                        top: '58px',
                        left: '22px',
                        right: '22px',
                        height: '260px',
                        padding: '24px',
                        border: '1px solid rgba(255,255,255,.2)',
                        borderRadius: '18px',
                        background: 'linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,.06))',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,.2)',
                        color: '#fff',
                        backdropFilter: 'blur(12px)'
                    }}>
                        <div style={{
                            display: 'inline-flex',
                            padding: '8px 12px',
                            borderRadius: '999px',
                            background: 'rgba(255,255,255,.16)',
                            fontSize: '10px',
                            fontWeight: 800,
                            letterSpacing: '.14em',
                            textTransform: 'uppercase'
                        }}>{item.category}</div>
                        <h3 style={{
                            margin: '26px 0 18px',
                            color: '#fff',
                            fontSize: '26px',
                            lineHeight: 1.08
                        }}>{getPreviewLabel(item.title)}</h3>
                        <div style={{ display: 'grid', gap: '9px', width: '68%' }}>
                            <span style={{ height: '7px', borderRadius: '999px', background: 'rgba(255,255,255,.24)' }} />
                            <span style={{ height: '7px', width: '78%', borderRadius: '999px', background: 'rgba(255,255,255,.2)' }} />
                            <span style={{ height: '7px', width: '54%', borderRadius: '999px', background: 'rgba(255,255,255,.18)' }} />
                        </div>
                    </div>
                )}
            </div>

            <div style={{
                position: 'absolute',
                top: shouldUsePreview ? '244px' : '232px',
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 5,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '118px 28px 28px',
                background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(10,10,10,.78) 34%, rgba(10,10,10,.96) 100%)',
                color: '#fff'
            }}>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '16px'
                }}>
                    <span style={{
                        padding: '8px 12px',
                        borderRadius: '999px',
                        background: 'rgba(255,255,255,.18)',
                        border: '1px solid rgba(255,255,255,.22)',
                        color: '#fff',
                        fontSize: '10px',
                        fontWeight: 800,
                        letterSpacing: '.12em',
                        textTransform: 'uppercase'
                    }}>{item.category}</span>
                    <span style={{
                        padding: '8px 12px',
                        borderRadius: '999px',
                        background: accentColor,
                        color: '#fff',
                        fontSize: '10px',
                        fontWeight: 800,
                        letterSpacing: '.12em',
                        textTransform: 'uppercase'
                    }}>{item.date}</span>
                </div>

                <h3 style={{
                    margin: '0 0 12px',
                    color: '#fff',
                    fontSize: '25px',
                    fontWeight: 800,
                    lineHeight: 1.15,
                    textShadow: '0 4px 20px rgba(0,0,0,.38)'
                }}>{item.title}</h3>

                <p style={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    margin: '0 0 20px',
                    color: 'rgba(255,255,255,.82)',
                    fontSize: '13px',
                    lineHeight: 1.5,
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3
                }}>{summary}</p>

                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    alignSelf: 'flex-start',
                    gap: '12px',
                    padding: '13px 24px',
                    border: '1px solid rgba(255,255,255,.36)',
                    borderRadius: '999px',
                    background: 'rgba(255,255,255,.12)',
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: 800,
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    backdropFilter: 'blur(14px)'
                }}>
                    View Project
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </div>

            <div
                className="accent-line"
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: accentColor,
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 6
                }}
            />
        </div>
    );
};

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
