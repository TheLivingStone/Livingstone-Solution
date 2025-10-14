import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollAnimation } from "../../common/scrollAnims";
import { useEffect } from "react";
import Link from "next/link";

// Premium centered slider styles
if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
        .centered-slider .swiper-slide {
            opacity: 0.4;
            transform: scale(0.85);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            filter: blur(2px);
        }
        .centered-slider .swiper-slide-active {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
            z-index: 2;
        }
        .centered-slider .swiper-slide-prev,
        .centered-slider .swiper-slide-next {
            opacity: 0.5;
            filter: blur(1px);
        }
        .centered-pagination .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: rgba(0,0,0,0.2);
            opacity: 1;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            margin: 0 5px !important;
        }
        .centered-pagination-0 .swiper-pagination-bullet-active {
            background: #667eea;
            width: 24px;
            border-radius: 4px;
        }
        .centered-pagination-1 .swiper-pagination-bullet-active {
            background: #ff6b6b;
            width: 24px;
            border-radius: 4px;
        }
        .centered-pagination-2 .swiper-pagination-bullet-active {
            background: #00a8ff;
            width: 24px;
            border-radius: 4px;
        }
        .centered-nav-btn {
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .centered-slider-wrapper:hover .centered-nav-btn {
            opacity: 1;
        }
        @media (max-width: 768px) {
            .centered-nav-btn {
                opacity: 0.7;
            }
            .centered-slider .swiper-slide {
                transform: scale(0.9);
            }
            .centered-slider .swiper-slide-active {
                transform: scale(1);
            }
        }
    `;
    if (!document.getElementById('centered-slider-styles')) {
        style.id = 'centered-slider-styles';
        document.head.appendChild(style);
    }
}

const CenteredCategorySlider = ({ projects, category, displayName, index }) => {
    useEffect(() => {
        ScrollAnimation();
    }, []);

    const filteredProjects = projects.filter(project => {
        if (!project.category) return false;
        return project.category.toLowerCase().includes(category.toLowerCase());
    });

    if (filteredProjects.length === 0) return null;

    const accentColors = {
        0: '#667eea',
        1: '#ff6b6b',
        2: '#00a8ff'
    };

    const bgGradients = {
        0: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        1: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        2: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)'
    };

    const accentColor = accentColors[index] || '#667eea';
    const bgGradient = bgGradients[index] || bgGradients[0];

    return (
        <section style={{ 
            padding: '120px 0',
            background: bgGradient,
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Section Header */}
            <div className="container" style={{ 
                marginBottom: '80px',
                textAlign: 'center'
            }}>
                <span style={{
                    display: 'inline-block',
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: accentColor,
                    marginBottom: '20px'
                }}>
                    {displayName}
                </span>
                <h2 style={{
                    fontSize: '48px',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '16px',
                    lineHeight: '1.2'
                }}>
                    Featured Work
                </h2>
                <p style={{
                    fontSize: '18px',
                    color: '#666',
                    lineHeight: '1.6',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    Discover our latest projects and creative solutions
                </p>
            </div>

            {/* Centered Slider */}
            <div className="centered-slider-wrapper" style={{ position: 'relative' }}>
                <Swiper
                    slidesPerView={1.5}
                    spaceBetween={30}
                    centeredSlides={true}
                    speed={800}
                    loop={filteredProjects.length > 2}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    navigation={{
                        nextEl: `.centered-next-${index}`,
                        prevEl: `.centered-prev-${index}`,
                    }}
                    pagination={{
                        el: `.centered-pagination-${index}`,
                        clickable: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1.3,
                            spaceBetween: 25,
                        },
                        1024: {
                            slidesPerView: 1.5,
                            spaceBetween: 30,
                        },
                        1440: {
                            slidesPerView: 1.6,
                            spaceBetween: 40,
                        },
                    }}
                    className="centered-slider"
                >
                    {filteredProjects.map((item, key) => (
                        <SwiperSlide key={`${category}-${key}`}>
                            <Link href={`/projects/${item.id}`}>
                                <div style={{
                                    position: 'relative',
                                    background: '#fff',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 30px 80px rgba(0,0,0,0.12)',
                                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer',
                                    height: '550px'
                                }}
                                onMouseEnter={(e) => {
                                    if (e.currentTarget.closest('.swiper-slide-active')) {
                                        e.currentTarget.style.transform = 'scale(1.02)';
                                        e.currentTarget.style.boxShadow = '0 40px 100px rgba(0,0,0,0.15)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.12)';
                                }}>
                                    {/* Project Image */}
                                    <div style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '380px',
                                        overflow: 'hidden',
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                                    }}>
                                        <img 
                                            src={item.image} 
                                            alt={item.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                                            }}
                                        />
                                        
                                        {/* Light gradient overlay */}
                                        <div style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: '40%',
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)',
                                            pointerEvents: 'none'
                                        }} />
                                    </div>

                                    {/* Project Info */}
                                    <div style={{
                                        padding: '40px 35px',
                                        background: '#fff'
                                    }}>
                                        {/* Category Badge */}
                                        <span style={{
                                            display: 'inline-block',
                                            padding: '6px 16px',
                                            background: `${accentColor}15`,
                                            color: accentColor,
                                            borderRadius: '20px',
                                            fontSize: '11px',
                                            fontWeight: '700',
                                            letterSpacing: '1.5px',
                                            textTransform: 'uppercase',
                                            marginBottom: '16px'
                                        }}>
                                            {item.category}
                                        </span>

                                        {/* Project Title */}
                                        <h3 style={{
                                            fontSize: '26px',
                                            fontWeight: '600',
                                            color: '#1a1a1a',
                                            marginBottom: '10px',
                                            lineHeight: '1.3'
                                        }}>
                                            {item.title}
                                        </h3>

                                        {/* Project Subtitle */}
                                        <p style={{
                                            fontSize: '15px',
                                            color: '#888',
                                            lineHeight: '1.5',
                                            fontWeight: '400',
                                            letterSpacing: '0.3px'
                                        }}>
                                            {item.date}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Minimal Navigation Arrows */}
                <button 
                    className={`centered-prev-${index} centered-nav-btn`}
                    style={{
                        position: 'absolute',
                        left: '40px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.9)',
                        backdropFilter: 'blur(10px)',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                        e.currentTarget.style.background = accentColor;
                        e.currentTarget.querySelector('svg').style.stroke = '#fff';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.9)';
                        e.currentTarget.querySelector('svg').style.stroke = '#1a1a1a';
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s ease' }}>
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <button 
                    className={`centered-next-${index} centered-nav-btn`}
                    style={{
                        position: 'absolute',
                        right: '40px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.9)',
                        backdropFilter: 'blur(10px)',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                        e.currentTarget.style.background = accentColor;
                        e.currentTarget.querySelector('svg').style.stroke = '#fff';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.9)';
                        e.currentTarget.querySelector('svg').style.stroke = '#1a1a1a';
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s ease' }}>
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>

                {/* Centered Pagination Dots */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '50px'
                }}>
                    <div 
                        className={`centered-pagination-${index} centered-pagination`}
                        style={{
                            display: 'flex',
                            gap: '6px'
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

const CenteredProjectSlider = ({ projects }) => {
    if (!projects || projects.length === 0) return null;

    const categories = [
        { name: 'Web Development', searchTerm: 'web' },
        { name: 'App Development', searchTerm: 'app' },
        { name: 'AI Automation', searchTerm: 'ai' }
    ];

    return (
        <>
            {categories.map((category, index) => (
                <CenteredCategorySlider
                    key={category.name}
                    projects={projects}
                    category={category.searchTerm}
                    displayName={category.name}
                    index={index}
                />
            ))}
        </>
    );
};

export default CenteredProjectSlider;
