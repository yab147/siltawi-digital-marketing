import React from 'react';
import { Target, TrendingUp, Palette, Layers, Check, Users, Megaphone } from '../components/Icons';

export const About = () => {
  return (
    <div className="fade-in-up">
      {/* Story & Split Section */}
      <section>
        <div className="glow-bg" style={{ top: '10%', left: '-10%' }}></div>
        <div className="container story-grid">
          <div className="story-content">
            <span className="section-tag">Our Story</span>
            <h2>Pioneering Digital Growth in East Africa</h2>
            <p className="story-text">
              Founded in 2023 in Addis Ababa, Siltawi Digital Marketing emerged from a simple observation: local businesses had high-quality products and services but lacked the technical and creative expertise to market them effectively online.
            </p>
            <p className="story-text">
              What began as a team of three visionary marketers has quickly grown into a comprehensive creative agency. We represent a collective of developers, visual artists, and campaign leads dedicated to elevating African brands.
            </p>
            <div className="story-highlight">
              "We do not just chase likes; we align creative designs and software systems to yield verifiable commercial returns."
            </div>
            <p className="story-text">
              Through transparent metrics, reliable project schedules, and bespoke solutions, we continue to earn the trust of financial institutions, luxury resorts, and high-growth retail brands across Ethiopia.
            </p>
          </div>
          <div className="story-media">
            <div className="story-image-container">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Siltawi Team Office Collaboration" 
              />
            </div>
            {/* Stats Overlay */}
            <div className="shape-card-1" style={{ top: '60%', left: '-5%' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'rgb(var(--accent-rgb))' }}>2023</div>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)' }}>Year Founded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container mv-grid">
          <div className="mv-card">
            <div className="mv-icon">
              <Target size={28} />
            </div>
            <h3>Our Mission</h3>
            <p>
              To empower business enterprises with innovative, high-fidelity digital solutions that optimize customer acquisition, establish market authority, and facilitate sustainable growth.
            </p>
          </div>

          <div className="mv-card">
            <div className="mv-icon">
              <TrendingUp size={28} />
            </div>
            <h3>Our Vision</h3>
            <p>
              To become one of Africa's leading results-oriented digital marketing agencies, recognized for technical precision, artistic depth, and a commitment to customer success.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Culture</span>
            <h2 className="section-title">Core Principles We Live By</h2>
            <p className="section-desc">These values shape our collaborative process, campaign architectures, and client relations daily.</p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><TrendingUp size={20} /></div>
              <h4>Innovation</h4>
              <p>Continuously experimenting with state-of-the-art marketing funnels and web layouts.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Palette size={20} /></div>
              <h4>Creativity</h4>
              <p>Building meaningful, memorable visual systems that challenge standard designs.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Layers size={20} /></div>
              <h4>Transparency</h4>
              <p>Sharing honest campaign metrics, performance reports, and budgets with zero hidden details.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Check size={20} /></div>
              <h4>Excellence</h4>
              <p>Refusing to settle for generic placeholders. We test and optimize assets to be pixel-perfect.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Users size={20} /></div>
              <h4>Customer Success</h4>
              <p>Measuring our success by the concrete leads, sales, and reviews we secure for you.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Megaphone size={20} /></div>
              <h4>Continuous Learning</h4>
              <p>Constantly staying updated on new marketing algorithms, SEO updates, and dev tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timelines Section */}
      <section style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Path</span>
            <h2 className="section-title">Company Milestones</h2>
            <p className="section-desc">A brief retrospective of our journey, achievements, and expansions.</p>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content-wrapper">
                <div className="timeline-card">
                  <div className="timeline-year">2023</div>
                  <div className="timeline-title">The Foundation</div>
                  <div className="timeline-desc">Siltawi founded in Addis Ababa. Secured our first three retail clients, laying the foundation for local brand consulting.</div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content-wrapper">
                <div className="timeline-card">
                  <div className="timeline-year">2024</div>
                  <div className="timeline-title">Expanding the Team</div>
                  <div className="timeline-desc">Recruited dedicated graphic designers and full-stack web developers. Launched our custom e-commerce service with local payment gateways.</div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content-wrapper">
                <div className="timeline-card">
                  <div className="timeline-year">2025</div>
                  <div className="timeline-title">Corporate Milestone</div>
                  <div className="timeline-desc">Awarded best local campaign for resort SEO strategy. Formally integrated corporate bank APIs, expanding our client portfolio to 40+ active brands.</div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content-wrapper">
                <div className="timeline-card">
                  <div className="timeline-year">2026</div>
                  <div className="timeline-title">Digital Horizons</div>
                  <div className="timeline-desc">Setting up new frameworks for automated data dashboards, gearing up to serve international East African trade sectors.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
