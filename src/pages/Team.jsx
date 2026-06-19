import React from 'react';
import { Users, Briefcase, BrandIcons } from '../components/Icons';
import { teamData } from '../data';

export const Team = ({ contactForm, setContactForm, navigateTo }) => {
  return (
    <div className="fade-in-up">
      <section>
        <div className="glow-bg" style={{ top: '25%', left: '5%' }}></div>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Experts</span>
            <h2 className="section-title">Meet the Siltawi Creative Team</h2>
            <p className="section-desc">A collaborative collection of engineers, branding specialists, and campaign architects who drive our success.</p>
          </div>

          <div className="team-grid">
            {teamData.map((member) => (
              <div className="team-card" key={member.id}>
                <div className="team-img-wrapper">
                  <img src={member.image} alt={member.name} className="team-img" />
                  <div className="team-social-overlay">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="team-social-btn">
                        <BrandIcons.Linkedin size={18} />
                      </a>
                    )}
                    {member.socials.github && (
                      <a href={member.socials.github} className="team-social-btn">
                        <BrandIcons.Github size={18} />
                      </a>
                    )}
                    {member.socials.behance && (
                      <a href={member.socials.behance} className="team-social-btn">
                        <Briefcase size={18} />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} className="team-social-btn">
                        <BrandIcons.Twitter size={18} />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a href={member.socials.instagram} className="team-social-btn">
                        <BrandIcons.Instagram size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <div className="team-role">{member.position}</div>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}

            {/* Join the Team Card */}
            <div className="join-team-card">
              <div className="why-icon-wrapper" style={{ margin: 0 }}>
                <Users size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>Want to Join Our Creative Team?</h3>
              <p style={{ color: 'var(--text-muted)', maxWidth: '480px', fontSize: '0.95rem' }}>
                We are always looking for passionate graphic designers, web engineers, and copywriting experts in Addis Ababa.
              </p>
              <button 
                className="btn btn-secondary btn-sm"
                style={{ marginTop: '10px' }}
                onClick={() => {
                  setContactForm({
                    ...contactForm,
                    subject: "Career Opportunity / Application",
                    message: "Hi Siltawi Team, I am interested in joining your agency. Let me know the best email to send my CV and portfolio."
                  });
                  navigateTo('contact');
                }}
              >
                Send Your Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
