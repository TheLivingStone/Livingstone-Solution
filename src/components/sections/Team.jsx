import { useState } from "react";
import Data from "@data/sections/team.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import LinesIcon from "@layouts/svg-icons/Lines";
import TeamModal from "@components/common/TeamModal";

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <>
        {/* team */}
        <section>
            <div className="container mil-p-120-30">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-5 col-xl-4">

                        <div className="mil-mb-90">
                            <h2 className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : Data.title}} />
                            
                            {/* Global Team Badge */}
                            <div className="mil-up mil-mb-30" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '12px 20px',
                                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)',
                                borderRadius: '50px',
                                border: '1px solid rgba(139, 92, 246, 0.3)',
                                marginBottom: '30px'
                            }}>
                                <span style={{ fontSize: '20px' }}>🌍</span>
                                <span style={{ 
                                    fontSize: '14px', 
                                    fontWeight: '600',
                                    background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    Team Members Across USA & Worldwide
                                </span>
                            </div>

                            <div className="mil-text mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.description}} />
                            
                            {/* US and International Team Statement */}
                            <div className="mil-up mil-mb-60" style={{
                                padding: '20px 25px',
                                background: 'rgba(139, 92, 246, 0.08)',
                                borderLeft: '3px solid #8b5cf6',
                                borderRadius: '8px'
                            }}>
                                <p style={{ 
                                    fontSize: '15px', 
                                    lineHeight: '1.6',
                                    margin: 0,
                                    color: 'inherit'
                                }}>
                                    <strong style={{ color: '#8b5cf6' }}>🇺🇸 🌎</strong> We have a team both in the US and outside the US, bringing together diverse talents and perspectives from around the world to serve our clients better.
                                </p>
                            </div>
                            
                            <div className="mil-up"><Link href={Data.button.link} className="mil-button mil-arrow-place mil-mb-60"><span style={{color: "#ffff"}}>{Data.button.label}</span><ArrowIcon /></Link></div>

                            <h4 className="mil-up" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                        </div>

                    </div>
                    <div className="col-lg-6">

                        <div className="mil-team-list">
                            <div className="mil-lines-place">
                                <LinesIcon />
                            </div>

                            <div className="row mil-mb-60">
                                <div className="col-sm-6">
                                    
                                    {Data.col1_items.map((item, key) => (

                                    <div key={`services1-item-${key}`} className="mil-team-card mil-up mil-mb-30" onClick={() => handleMemberClick(item)} style={{cursor: 'pointer'}}>
                                        <img src={item.image} alt={item.name} />
                                        <div className="mil-description">
                                            <div className="mil-secrc-text">
                                                <h5 className="mil-muted mil-mb-5">{item.name}</h5>
                                                <p className="mil-link mil-light-soft mil-mb-10">{item.role}</p>
                                                <p className="mil-text-xs mil-light-soft">Click to view details</p>
                                            </div>
                                        </div>
                                    </div>

                                    ))}

                                </div>
                                <div className="col-sm-6">

                                    <p className="mil-mobile-hidden mil-text-sm mil-mb-30" style={{"height": "30px"}} dangerouslySetInnerHTML={{__html : Data.note}} />
                                    
                                    {Data.col2_items.map((item, key) => (
                                    
                                    <div key={`services2-item-${key}`} className="mil-team-card mil-up mil-mb-30" onClick={() => handleMemberClick(item)} style={{cursor: 'pointer'}}>
                                        <img src={item.image} alt={item.name} />
                                        <div className="mil-description">
                                            <div className="mil-secrc-text">
                                                <h5 className="mil-muted mil-mb-5">{item.name}</h5>
                                                <p className="mil-link mil-light-soft mil-mb-10">{item.role}</p>
                                                <p className="mil-text-xs mil-light-soft">Click to view details</p>
                                            </div>
                                        </div>
                                    </div>

                                    ))}

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
        {/* team end */}

        <TeamModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          member={selectedMember} 
        />
    </>
  );
};

export default TeamSection;
