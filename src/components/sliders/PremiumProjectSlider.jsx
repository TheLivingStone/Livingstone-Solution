import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollAnimation } from "../../common/scrollAnims";
import { useEffect, useState } from "react";
import Link from "next/link";

// Custom styles for premium slider
if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
        .premium-slider-pagination .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: rgba(0,0,0,0.15);
            opacity: 1;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            margin: 0 6px !important;
        }
        .premium-slider-pagination .swiper-pagination-bullet-active {
            background: #1a1a1a;
            width: 32px;
            border-radius: 5px;
        }
        .premium-nav-btn {
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .premium-slider-container:hover .premium-nav-btn {
            opacity: 1;
        }
        @media (max-width: 768px) {
            .premium-nav-btn {
                opacity: 1;
            }
        }
    `;
    if (!document.getElementById('premium-slider-styles')) {
        style.id = 'premium-slider-styles';
        document.head.appendChild(style);
    }
}

const PremiumCategorySlider = ({ projects, category, displayName, index }) => {
    const [hoveredSlide, setHoveredSlide] = useState(null);
    
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

    const accentColor = accentColors[index] || '#667eea';

    return (
        <section style={{ 
            padding: '100px 0',
            background: '#fafafa',
            position: 'relative'
        }}>
            {/* Section Header */}
            <div className="container" style={{ marginBottom: '60px' }}>
                <div style={{ 
                    textAlign: 'center',
                    maxWidth: '700px',
                    margin: '0 auto'
                }}>
                    <span style={{
                        display: 'inline-block',
                        fontSize: '11px',
                        fontWeight: '700',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        color: accentColor,
                        marginBottom: '16px'
                    }}>
                        {displayName}
                    </span>
                    <h2 style={{
                        fontSize: '42px',
                        fontWeight: '600',
                        color: '#1a1a1a',
                        marginBottom: '16px',
                        lineHeight: '1.2'
                    }}>
                        Featured Projects
                    </h2>
                    <p style={{
                        fontSize: '16px',
                        color: '#666',
                        lineHeight: '1.6',
                        fontWeight: '400'
                    }}>
                        Explore our latest work and creative solutions
                    </p>
                </div>
            </div>

            {/* Premium Slider */}
            <div className="premium-slider-container" style={{ position: 'relative' }}>
                <div className="container" style={{ maxWidth: '1400px' }}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        speed={1200}
                        loop={filteredProjects.length > 1}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            nextEl: `.premium-next-${index}`,
                            prevEl: `.premium-prev-${index}`,
                        }}
                        pagination={{
                            el: `.premium-pagination-${index}`,
                            clickable: true,
                        }}
                        effect="slide"
                        className="mil-up"
                    >
                        {filteredProjects.map((item, key) => (
                            <SwiperSlide key={`${category}-${key}`}>
                                <Link href={`/projects/${item.id}`}>
                                    <div 
                                        style={{
                                            position: 'relative',
                                            background: '#fff',
                                            borderRadius: '20px',
                                            overflow: 'hidden',
                                            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                            cursor: 'pointer',
                                            minHeight: '500px'
                                        }}
                                        onMouseEnter={() => setHoveredSlide(key)}
                                        onMouseLeave={() => setHoveredSlide(null)}
                                    >
                                        {/* Full-width Image */}
                                        <div style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '500px',
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
                                                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    transform: hoveredSlide === key ? 'scale(1.05)' : 'scale(1)'
                                                }}
                                            />
                                            
                                            {/* Subtle gradient overlay */}
                                            <div style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                height: '60%',
                                                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                                                pointerEvents: 'none'
                                            }} />

                                            {/* Text Overlay */}
                                            <div style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                padding: '50px 60px',
                                                color: '#fff',
                                                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                                transform: hoveredSlide === key ? 'translateY(-10px)' : 'translateY(0)'
                                            }}>
                                                {/* Category Badge */}
                                                <div style={{
                                                    display: 'inline-block',
                                                    padding: '6px 18px',
                                                    background: 'rgba(255,255,255,0.2)',
                                                    backdropFilter: 'blur(10px)',
                                                    borderRadius: '20px',
                                                    fontSize: '11px',
                                                    fontWeight: '700',
                                                    letterSpacing: '2px',
                                                    textTransform: 'uppercase',
                                                    marginBottom: '20px',
                                                    border: '1px solid rgba(255,255,255,0.3)'
                                                }}>
                                                    {item.category}
                                                </div>

                                                {/* Project Title */}
                                                <h3 style={{
                                                    fontSize: '32px',
                                                    fontWeight: '600',
                                                    marginBottom: '12px',
                                                    lineHeight: '1.3',
                                                    textShadow: '0 2px 20px rgba(0,0,0,0.3)'
                                                }}>
                                                    {item.title}
                                                </h3>

                                                {/* Project Date */}
                                                <p style={{
                                                    fontSize: '14px',
                                                    fontWeight: '400',
                                                    opacity: 0.9,
                                                    letterSpacing: '1px',
                                                    textTransform: 'uppercase',
                                                    marginBottom: '20px'
                                                }}>
                                                    {item.date}
                                                </p>

                                                {/* View Project Link */}
                                                <div style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    fontSize: '14px',
                                                    fontWeight: '600',
                                                    letterSpacing: '1px',
                                                    textTransform: 'uppercase',
                                                    opacity: hoveredSlide === key ? 1 : 0.8,
                                                    transition: 'all 0.3s ease'
                                                }}>
                                                    View Project
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                        <polyline points="12 5 19 12 12 19"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Minimalist Navigation Arrows */}
                    <button 
                        className={`premium-prev-${index} premium-nav-btn`}
                        style={{
                            position: 'absolute',
                            left: '30px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.95)',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                            transition: 'all 0.3s ease',
                            backdropFilter: 'blur(10px)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                            e.currentTarget.style.background = accentColor;
                            e.currentTarget.querySelector('svg').style.stroke = '#fff';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                            e.currentTarget.style.background = 'rgba(255,255,255,0.95)';
                            e.currentTarget.querySelector('svg').style.stroke = '#1a1a1a';
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s ease' }}>
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    <button 
                        className={`premium-next-${index} premium-nav-btn`}
                        style={{
                            position: 'absolute',
                            right: '30px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.95)',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                            transition: 'all 0.3s ease',
                            backdropFilter: 'blur(10px)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                            e.currentTarget.style.background = accentColor;
                            e.currentTarget.querySelector('svg').style.stroke = '#fff';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                            e.currentTarget.style.background = 'rgba(255,255,255,0.95)';
                            e.currentTarget.querySelector('svg').style.stroke = '#1a1a1a';
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s ease' }}>
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>

                {/* Progress Indicators */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '40px'
                }}>
                    <div 
                        className={`premium-pagination-${index} premium-slider-pagination`}
                        style={{
                            display: 'flex',
                            gap: '8px'
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

const PremiumProjectSlider = ({ projects }) => {
    if (!projects || projects.length === 0) return null;

    const categories = [
        { name: 'Web Development', searchTerm: 'web' },
        { name: 'App Development', searchTerm: 'app' },
        { name: 'AI Automation', searchTerm: 'ai' }
    ];

    return (
        <>
            {categories.map((category, index) => (
                <PremiumCategorySlider
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

export default PremiumProjectSlider;
