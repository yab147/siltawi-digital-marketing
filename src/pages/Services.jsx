import React from 'react';
import { Megaphone, Layout, Palette, Camera, Search, Check } from '../components/Icons';
import IconComponent from '../components/IconComponent';
import { servicesData } from '../data';

export const Services = ({ activeServiceCategory, setActiveServiceCategory, handleRequestService }) => {
  return (
    <div className="fade-in-up">
      <section>
        <div className="glow-bg" style={{ top: '15%', left: '10%' }}></div>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Capabilities</span>
            <h2 className="section-title">Strategic Digital Solutions</h2>
            <p className="section-desc">We offer modular and comprehensive services designed to scale your operations, build loyalty, and track performance.</p>
          </div>

          <div className="services-tabs-container">
            {/* Category Sidebar Selector */}
            <div className="services-tabs-list">
              <button 
                className={`services-tab-btn ${activeServiceCategory === 'digital-marketing' ? 'active' : ''}`}
                onClick={() => setActiveServiceCategory('digital-marketing')}
              >
                <Megaphone size={18} /> Digital Marketing
              </button>
              <button 
                className={`services-tab-btn ${activeServiceCategory === 'website-development' ? 'active' : ''}`}
                onClick={() => setActiveServiceCategory('website-development')}
              >
                <Layout size={18} /> Web Development
              </button>
              <button 
                className={`services-tab-btn ${activeServiceCategory === 'branding-design' ? 'active' : ''}`}
                onClick={() => setActiveServiceCategory('branding-design')}
              >
                <Palette size={18} /> Branding & Design
              </button>
              <button 
                className={`services-tab-btn ${activeServiceCategory === 'content-creation' ? 'active' : ''}`}
                onClick={() => setActiveServiceCategory('content-creation')}
              >
                <Camera size={18} /> Content Creation
              </button>
              <button 
                className={`services-tab-btn ${activeServiceCategory === 'seo-services' ? 'active' : ''}`}
                onClick={() => setActiveServiceCategory('seo-services')}
              >
                <Search size={18} /> SEO Services
              </button>
            </div>

            {/* Category Detail Contents */}
            <div className="services-tab-content">
              <div className="service-category-header">
                <h3 style={{ fontSize: '1.75rem', textTransform: 'capitalize' }}>
                  {activeServiceCategory.replace('-', ' ')}
                </h3>
                <p style={{ color: 'var(--text-muted)' }}>
                  Tailored campaigns and structures designed specifically for {activeServiceCategory.replace('-', ' ')}.
                </p>
              </div>

              <div className="services-grid-detail">
                {servicesData
                  .filter(item => item.category === activeServiceCategory)
                  .map(service => (
                    <div className="service-detail-card" key={service.id}>
                      <div className="service-detail-top">
                        <div className="service-detail-icon">
                          <IconComponent name={service.icon} />
                        </div>
                        <h4 style={{ fontSize: '1.25rem', marginTop: '10px' }}>{service.title}</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{service.description}</p>
                        
                        <ul className="service-benefits-list">
                          {service.benefits.map((benefit, i) => (
                            <li className="service-benefit-item" key={i}>
                              <Check size={14} />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button 
                        className="btn btn-secondary btn-sm"
                        style={{ marginTop: '15px' }}
                        onClick={() => handleRequestService(service.title)}
                      >
                        Request Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
