import { useState } from "react";
import Layouts from "@layouts/Layouts";
import Data from "@data/sections/team.json";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import TeamModal from "@components/common/TeamModal";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Combine both columns from team.json
  const allTeamMembers = [...Data.col1_items, ...Data.col2_items];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <Layouts>
        <PageBanner pageTitle={Data.title} breadTitle={"Team"} anchorLabel={"Our team"} anchorLink={"#team"} />
      
        {/* team */}
        <section id="team">
            <div className="container mil-p-120-90">
                <div className="mil-mb-90">
                    <div className="mil-text mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : Data.description}} />
                    <h4 className="mil-up" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                </div>

                {/* Global Team Message */}
                <div className="mil-mb-90">
                    <div 
                        className="mil-up" 
                        style={{
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
                            borderLeft: '4px solid #8b5cf6',
                            padding: '30px',
                            borderRadius: '10px',
                            marginBottom: '60px'
                        }}
                    >
                        <div 
                            className="mil-text" 
                            dangerouslySetInnerHTML={{__html : Data.globalTeam}} 
                            style={{
                                fontSize: '16px',
                                lineHeight: '1.8'
                            }}
                        />
                        
                        {/* World Icons */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '30px',
                            marginTop: '30px',
                            flexWrap: 'wrap'
                        }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '40px', marginBottom: '10px' }}>🌍</div>
                                <p style={{ fontSize: '14px', color: '#8b5cf6', fontWeight: 'bold' }}>Global Reach</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '40px', marginBottom: '10px' }}>🤝</div>
                                <p style={{ fontSize: '14px', color: '#3b82f6', fontWeight: 'bold' }}>Diverse Team</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '40px', marginBottom: '10px' }}>⏰</div>
                                <p style={{ fontSize: '14px', color: '#06b6d4', fontWeight: 'bold' }}>24/7 Support</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '40px', marginBottom: '10px' }}>🚀</div>
                                <p style={{ fontSize: '14px', color: '#ec4899', fontWeight: 'bold' }}>World-Class Talent</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    {allTeamMembers.map((item, key) => (
                    <div className="col-sm-6 col-md-4 col-lg-3" key={`team-item-${key}`}>

                        <div className="mil-team-card mil-up mil-mb-30" onClick={() => handleMemberClick(item)} style={{cursor: 'pointer'}}>
                            <img src={item.image} alt={item.name} />
                            <div className="mil-description">
                                <div className="mil-secrc-text">
                                    <h5 className="mil-muted mil-mb-5">{item.name}</h5>
                                    <p className="mil-link mil-light-soft mil-mb-10">{item.role}</p>
                                    <p className="mil-text-xs mil-light-soft">Click to view details</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    ))}
                </div>
                
                <div className="mil-center mil-mt-60">
                    <p className="mil-text-sm" dangerouslySetInnerHTML={{__html : Data.note}} />
                </div>
            </div>
        </section>
        {/* team end */}

        <TeamModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          member={selectedMember} 
        />

      <CallToActionSection />
    </Layouts>
  );
};
export default Team;