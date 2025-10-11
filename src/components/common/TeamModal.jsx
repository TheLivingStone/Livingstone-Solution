import { useEffect } from 'react';

const TeamModal = ({ isOpen, onClose, member }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !member) return null;

    return (
        <div className="mil-modal-overlay" onClick={onClose}>
            <div className="mil-modal-content" style={{ backgroundColor: 'white' }} onClick={(e) => e.stopPropagation()}>
                <button className="mil-modal-close" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>

                <div className="mil-modal-body">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="mil-team-modal-image">
                                <img src={member.image} alt={member.name} />
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="mil-team-modal-info">
                                <h3 className="mil-mb-20">{member.name}</h3>
                                <p className="mil-accent mil-mb-30">{member.role}</p>

                                {member.bio && (
                                    <div className="mil-mb-30">
                                        <h5 className="mil-mb-15">About</h5>
                                        <p className="mil-text-sm">{member.bio}</p>
                                    </div>
                                )}

                                <div className="mil-contact-details">
                                    <h5 className="mil-mb-20">Contact Details</h5>

                                    {member.contact?.location && (
                                        <div className="mil-contact-item mil-mb-15" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <i className="fa fa-map-marker mil-accent" style={{ minWidth: '16px', fontSize: '14px', color: '#FAA845' }}></i>
                                            <span>{member.contact.location}</span>
                                        </div>
                                    )}

                                    {member.contact?.email && (
                                        <div className="mil-contact-item mil-mb-15" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <i className="fa fa-envelope mil-accent" style={{ minWidth: '16px', fontSize: '14px', color: '#FAA845' }}></i>
                                            <a href={`mailto:${member.contact.email}`}>{member.contact.email}</a>
                                        </div>
                                    )}

                                    {member.contact?.phone && (
                                        <div className="mil-contact-item mil-mb-15" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <i className="fa fa-phone mil-accent" style={{ minWidth: '16px', fontSize: '14px', color: '#FAA845' }}></i>
                                            <a href={`tel:${member.contact.phone}`}>{member.contact.phone}</a>
                                        </div>
                                    )}
                                </div>

                                {member.social && member.social.length > 0 && (
                                    <div className="mil-social-section mil-mt-30">
                                        <h5 className="mil-mb-20">Follow</h5>
                                        <ul className="mil-social-icons">
                                            {member.social.map((social, key) => (
                                                <li key={key}>
                                                    <a href={social.link} target="_blank" rel="noopener noreferrer" className="social-icon" title={social.title}>
                                                        <i className={social.icon}></i>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamModal;