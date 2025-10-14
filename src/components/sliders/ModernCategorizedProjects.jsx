import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollAnimation } from "../../common/scrollAnims";
import { useEffect } from "react";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";

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
    });

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
                                            <div 
                                                className="project-card-overlay"
                                                style={{
                                                    position: 'relative',
                                                    borderRadius: '24px',
                                                    overflow: 'hidden',
                                                    boxShadow: '0 15px 50px rgba(0,0,0,0.12)',
                                                    transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                                    cursor: 'pointer',
                                                    height: '480px',
                                                    width: '100%',
                                                    margin: '0 auto',
                                                    transform: 'translateY(0) scale(1)',
                                                    transformOrigin: 'center center',
                                                    zIndex: 1
                                                }}
                                                onMouseEnter={(e) => {
                                                    // Lift the card
                                                    e.currentTarget.style.transform = 'translateY(-15px)';
                                                    e.currentTarget.style.boxShadow = `0 30px 80px ${accentColor}50`;
                                                    e.currentTarget.style.zIndex = '100';
                                                    
                                                    // Image - no zoom
                                                    const img = e.currentTarget.querySelector('img');
                                                    if (img) img.style.transform = 'scale(1)';
                                                    
                                                    // Overlay - slightly darker
                                                    const overlay = e.currentTarget.querySelector('.overlay-gradient');
                                                    if (overlay) overlay.style.opacity = '0.92';
                                                    
                                                    // Content - slide up
                                                    const content = e.currentTarget.querySelector('.content-overlay');
                                                    if (content) content.style.transform = 'translateY(0)';
                                                    
                                                    // Badge - no change
                                                    const badge = e.currentTarget.querySelector('.category-badge');
                                                    if (badge) badge.style.transform = 'scale(1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                    e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.12)';
                                                    e.currentTarget.style.zIndex = '1';
                                                    
                                                    const img = e.currentTarget.querySelector('img');
                                                    if (img) img.style.transform = 'scale(1)';
                                                    
                                                    const overlay = e.currentTarget.querySelector('.overlay-gradient');
                                                    if (overlay) overlay.style.opacity = '0.85';
                                                    
                                                    const content = e.currentTarget.querySelector('.content-overlay');
                                                    if (content) content.style.transform = 'translateY(15px)';
                                                    
                                                    const badge = e.currentTarget.querySelector('.category-badge');
                                                    if (badge) badge.style.transform = 'scale(1)';
                                                }}
                                            >
                                                {/* Full Image Background */}
                                                <img 
                                                    src={item.image} 
                                                    alt={item.title}
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                                                        transform: 'scale(1)'
                                                    }}
                                                />
                                                
                                                {/* Gradient Overlay */}
                                                <div 
                                                    className="overlay-gradient"
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: `linear-gradient(to bottom, 
                                                            rgba(0,0,0,0.1) 0%, 
                                                            rgba(0,0,0,0.4) 40%,
                                                            rgba(0,0,0,0.8) 100%)`,
                                                        opacity: 0.9,
                                                        transition: 'opacity 0.5s ease',
                                                        pointerEvents: 'none'
                                                    }}
                                                />

                                                {/* Category Badge - Top */}
                                                <div 
                                                    className="category-badge"
                                                    style={{
                                                        position: 'absolute',
                                                        top: '24px',
                                                        left: '24px',
                                                        background: 'rgba(255,255,255,0.2)',
                                                        backdropFilter: 'blur(15px)',
                                                        border: '1px solid rgba(255,255,255,0.3)',
                                                        color: '#ffffff',
                                                        padding: '10px 20px',
                                                        borderRadius: '30px',
                                                        fontSize: '11px',
                                                        fontWeight: '700',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '1.8px',
                                                        boxShadow: '0 8px 25px rgba(0,0,0,0.25)',
                                                        animation: 'fadeInDown 0.6s ease-out',
                                                        transform: 'translateY(0) scale(1)',
                                                        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                                        zIndex: 2
                                                    }}>
                                                    {item.category}
                                                </div>

                                                {/* Content Overlay - Bottom */}
                                                <div 
                                                    className="content-overlay"
                                                    style={{
                                                        position: 'absolute',
                                                        bottom: 0,
                                                        left: 0,
                                                        right: 0,
                                                        padding: '36px',
                                                        color: '#ffffff',
                                                        transform: 'translateY(15px)',
                                                        transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                                        zIndex: 2
                                                    }}
                                                >
                                                    {/* Date */}
                                                    <div style={{
                                                        fontSize: '13px',
                                                        fontWeight: '700',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '2.5px',
                                                        marginBottom: '14px',
                                                        color: '#ffffff',
                                                        opacity: 0.95,
                                                        animation: 'fadeInUp 0.6s ease-out 0.1s backwards',
                                                        textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                                                    }}>
                                                        {item.date}
                                                    </div>

                                                    {/* Title */}
                                                    <h3 style={{
                                                        fontSize: '28px',
                                                        fontWeight: '700',
                                                        lineHeight: '1.25',
                                                        marginBottom: '20px',
                                                        color: '#ffffff',
                                                        textShadow: '0 4px 20px rgba(0,0,0,0.4)',
                                                        animation: 'fadeInUp 0.6s ease-out 0.2s backwards'
                                                    }}>
                                                        {item.title}
                                                    </h3>

                                                    {/* View Project Link */}
                                                    <div style={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '12px',
                                                        fontSize: '14px',
                                                        fontWeight: '700',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '1.5px',
                                                        padding: '14px 28px',
                                                        background: 'rgba(255,255,255,0.2)',
                                                        backdropFilter: 'blur(15px)',
                                                        border: '2px solid rgba(255,255,255,0.4)',
                                                        borderRadius: '35px',
                                                        color: '#ffffff',
                                                        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                                        animation: 'fadeInUp 0.6s ease-out 0.3s backwards',
                                                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
                                                        e.currentTarget.style.transform = 'translateX(8px) scale(1.05)';
                                                        e.currentTarget.style.gap = '16px';
                                                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.3)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                                                        e.currentTarget.style.transform = 'translateX(0) scale(1)';
                                                        e.currentTarget.style.gap = '12px';
                                                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
                                                    }}>
                                                        View Project
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                                            <polyline points="12 5 19 12 12 19"></polyline>
                                                        </svg>
                                                    </div>
                                                </div>

                                                {/* Accent Line */}
                                                <div style={{
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    left: 0,
                                                    right: 0,
                                                    height: '4px',
                                                    background: accentColor,
                                                    transform: 'scaleX(0)',
                                                    transformOrigin: 'left',
                                                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    zIndex: 3
                                                }}
                                                className="accent-line"
                                                />
                                            </div>
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
