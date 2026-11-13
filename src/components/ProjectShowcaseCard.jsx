import { useState } from "react";

// Project card shared by the homepage sliders and the "Past performance" grid on each pillar page.
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


export default ProjectShowcaseCard;
