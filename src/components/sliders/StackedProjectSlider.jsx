import { ScrollAnimation } from "../../common/scrollAnims";
import { useEffect, useState } from "react";
import Link from "next/link";

const StackedCategorySlider = ({ projects, category, displayName, index }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

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

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    // Auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const getItemStyle = (itemIndex) => {
        const position = (itemIndex - currentIndex + filteredProjects.length) % filteredProjects.length;
        
        if (position === 0) {
            // Active slide - full size with slight scale
            return {
                top: 0,
                left: 0,
                width: '65%',
                height: '100%',
                transform: 'translate(0, 0) scale(1)',
                zIndex: 5,
                opacity: 1,
                borderRadius: '20px 0 0 20px',
                filter: 'brightness(1)'
            };
        } else if (position === 1) {
            // Second slide - large preview on right
            return {
                top: '8%',
                right: '0',
                left: 'auto',
                width: '35%',
                height: '38%',
                transform: 'translate(0, 0) scale(0.98)',
                zIndex: 4,
                opacity: 1,
                borderRadius: '16px',
                filter: 'brightness(0.85)'
            };
        } else if (position === 2) {
            // Third slide - medium preview
            return {
                top: '50%',
                right: '0',
                left: 'auto',
                width: '35%',
                height: '38%',
                transform: 'translate(0, 0) scale(0.96)',
                zIndex: 3,
                opacity: 0.9,
                borderRadius: '16px',
                filter: 'brightness(0.7)'
            };
        } else if (position === 3) {
            // Fourth slide - small preview at bottom
            return {
                bottom: '8%',
                right: '0',
                left: 'auto',
                top: 'auto',
                width: '35%',
                height: '38%',
                transform: 'translate(0, 0) scale(0.94)',
                zIndex: 2,
                opacity: 0.8,
                borderRadius: '16px',
                filter: 'brightness(0.6)'
            };
        } else {
            // Hidden slides - slide out to the right
            return {
                top: '50%',
                right: '-40%',
                left: 'auto',
                width: '35%',
                height: '38%',
                transform: 'translate(0, -50%) scale(0.9)',
                zIndex: 1,
                opacity: 0,
                borderRadius: '16px',
                filter: 'brightness(0.5)'
            };
        }
    };

    return (
        <section style={{ 
            padding: '100px 0',
            background: '#f5f5f5',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Section Header */}
            <div className="container" style={{ 
                marginBottom: '60px',
                textAlign: 'center'
            }}>
                <span style={{
                    display: 'inline-block',
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: accentColor,
                    marginBottom: '16px'
                }}>
                    {displayName}
                </span>
                <h2 style={{
                    fontSize: '48px',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '12px',
                    lineHeight: '1.2'
                }}>
                    Featured Projects
                </h2>
            </div>

            {/* Stacked Slider Container */}
            <div className="container" style={{ maxWidth: '1200px' }}>
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '600px',
                    background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                    borderRadius: '20px',
                    overflow: 'hidden'
                }}>
                    {/* Slides */}
                    {filteredProjects.map((item, itemIndex) => {
                        const position = (itemIndex - currentIndex + filteredProjects.length) % filteredProjects.length;
                        const style = getItemStyle(itemIndex);
                        
                        return (
                            <div
                                key={itemIndex}
                                style={{
                                    position: 'absolute',
                                    ...style,
                                    backgroundImage: `url(${item.image})`,
                                    backgroundPosition: '50% 50%',
                                    backgroundSize: 'cover',
                                    boxShadow: position === 0 
                                        ? '0 40px 80px rgba(0,0,0,0.15)' 
                                        : `0 ${20 + position * 5}px ${40 + position * 10}px rgba(0,0,0,${0.25 - position * 0.05})`,
                                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: position === 0 ? 'default' : 'pointer',
                                    border: position > 0 ? '3px solid rgba(255,255,255,0.3)' : 'none'
                                }}
                                onClick={() => {
                                    if (position !== 0) {
                                        setCurrentIndex(itemIndex);
                                    }
                                }}
                                onMouseEnter={(e) => {
                                    if (position !== 0) {
                                        e.currentTarget.style.transform = style.transform.replace('scale(0.9', 'scale(1.0');
                                        e.currentTarget.style.filter = 'brightness(1)';
                                        e.currentTarget.style.zIndex = (10 + position).toString();
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (position !== 0) {
                                        e.currentTarget.style.transform = style.transform;
                                        e.currentTarget.style.filter = style.filter;
                                        e.currentTarget.style.zIndex = style.zIndex.toString();
                                    }
                                }}
                            >
                                {/* Content overlay - only show on active slide */}
                                {position === 0 && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '80px',
                                        transform: 'translateY(-50%)',
                                        width: '400px',
                                        color: '#fff',
                                        textAlign: 'left'
                                    }}>
                                        <div style={{
                                            fontSize: '48px',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            marginBottom: '16px',
                                            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                                            animation: 'slideUp 0.8s ease-in-out forwards'
                                        }}>
                                            {item.title}
                                        </div>
                                        <div style={{
                                            fontSize: '16px',
                                            lineHeight: '1.6',
                                            marginBottom: '24px',
                                            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                                            animation: 'slideUp 0.8s ease-in-out 0.2s forwards',
                                            opacity: 0,
                                            animationFillMode: 'forwards'
                                        }}>
                                            {item.category} • {item.date}
                                        </div>
                                        <Link href={`/projects/${item.id}`}>
                                            <button style={{
                                                padding: '14px 32px',
                                                border: 'none',
                                                borderRadius: '10px',
                                                background: 'rgba(255, 255, 255, 0.9)',
                                                color: '#1a1a1a',
                                                fontSize: '14px',
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                animation: 'slideUp 0.8s ease-in-out 0.4s forwards',
                                                opacity: 0,
                                                animationFillMode: 'forwards',
                                                backdropFilter: 'blur(10px)'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = '#fff';
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = 'none';
                                            }}>
                                                View Project
                                            </button>
                                        </Link>
                                    </div>
                                )}

                                {/* Gradient overlay on active slide */}
                                {position === 0 && (
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                                        pointerEvents: 'none'
                                    }} />
                                )}

                                {/* Preview slide labels */}
                                {position > 0 && position <= 3 && (
                                    <>
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)',
                                            pointerEvents: 'none',
                                            transition: 'opacity 0.3s ease'
                                        }} />
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '20px',
                                            left: '20px',
                                            right: '20px',
                                            color: '#fff',
                                            pointerEvents: 'none'
                                        }}>
                                            <div style={{
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                marginBottom: '6px',
                                                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap'
                                            }}>
                                                {item.title}
                                            </div>
                                            <div style={{
                                                fontSize: '11px',
                                                opacity: 0.9,
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px',
                                                textShadow: '0 1px 4px rgba(0,0,0,0.3)'
                                            }}>
                                                {item.category}
                                            </div>
                                        </div>
                                        <div style={{
                                            position: 'absolute',
                                            top: '20px',
                                            right: '20px',
                                            background: 'rgba(255,255,255,0.2)',
                                            backdropFilter: 'blur(10px)',
                                            padding: '6px 12px',
                                            borderRadius: '20px',
                                            fontSize: '11px',
                                            fontWeight: '700',
                                            color: '#fff',
                                            textShadow: '0 1px 4px rgba(0,0,0,0.3)',
                                            pointerEvents: 'none'
                                        }}>
                                            Next
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}

                    {/* Navigation Buttons */}
                    <div style={{
                        position: 'absolute',
                        bottom: '30px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '16px',
                        zIndex: 10
                    }}>
                        <button
                            onClick={handlePrev}
                            disabled={isAnimating}
                            style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '10px',
                                border: '2px solid rgba(255,255,255,0.8)',
                                background: 'rgba(255, 255, 255, 0.2)',
                                backdropFilter: 'blur(10px)',
                                color: '#fff',
                                cursor: isAnimating ? 'not-allowed' : 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '20px',
                                fontWeight: 'bold'
                            }}
                            onMouseEnter={(e) => {
                                if (!isAnimating) {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                                    e.currentTarget.style.color = '#1a1a1a';
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                e.currentTarget.style.color = '#fff';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            ◁
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={isAnimating}
                            style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '10px',
                                border: '2px solid rgba(255,255,255,0.8)',
                                background: 'rgba(255, 255, 255, 0.2)',
                                backdropFilter: 'blur(10px)',
                                color: '#fff',
                                cursor: isAnimating ? 'not-allowed' : 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '20px',
                                fontWeight: 'bold'
                            }}
                            onMouseEnter={(e) => {
                                if (!isAnimating) {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                                    e.currentTarget.style.color = '#1a1a1a';
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                e.currentTarget.style.color = '#fff';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            ▷
                        </button>
                    </div>
                </div>
            </div>

            {/* Add keyframe animation */}
            <style jsx>{`
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(60px);
                        filter: blur(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                        filter: blur(0);
                    }
                }
            `}</style>
        </section>
    );
};

const StackedProjectSlider = ({ projects }) => {
    if (!projects || projects.length === 0) return null;

    const categories = [
        { name: 'Web Development', searchTerm: 'web' },
        { name: 'App Development', searchTerm: 'app' },
        { name: 'AI Automation', searchTerm: 'ai' }
    ];

    return (
        <>
            {categories.map((category, index) => (
                <StackedCategorySlider
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

export default StackedProjectSlider;
