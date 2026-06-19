import React from 'react';
import { ArrowRight } from '../components/Icons';
import { portfolioData } from '../data';

export const Portfolio = ({ activePortfolioFilter, setActivePortfolioFilter, setSelectedProject }) => {
  return (
    <div className="fade-in-up">
      <section>
        <div className="glow-bg" style={{ bottom: '15%', right: '5%' }}></div>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Case Studies</span>
            <h2 className="section-title">Our Work in Action</h2>
            <p className="section-desc">Explore how we helped our corporate partners optimize platforms, scale metrics, and expand reach.</p>
          </div>

          {/* Filters */}
          <div className="portfolio-filters">
            {['All', 'Website Design', 'Branding', 'Social Media Campaigns', 'Advertising Campaigns', 'SEO Projects'].map(filter => (
              <button
                key={filter}
                className={`portfolio-filter-btn ${activePortfolioFilter === filter ? 'active' : ''}`}
                onClick={() => setActivePortfolioFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="portfolio-grid">
            {portfolioData
              .filter(item => activePortfolioFilter === 'All' || item.category === activePortfolioFilter)
              .map(project => (
                <div 
                  className="portfolio-card" 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="portfolio-media">
                    <img src={project.afterImage} alt={project.title} className="portfolio-img" />
                    <div className="portfolio-overlay">
                      <span className="portfolio-overlay-cat">{project.category}</span>
                      <h3 className="portfolio-overlay-title">{project.title}</h3>
                    </div>
                  </div>
                  <div className="portfolio-card-info">
                    <div className="portfolio-card-cat">{project.category}</div>
                    <h4 className="portfolio-card-title">{project.title}</h4>
                    <p className="portfolio-card-desc">{project.description}</p>
                    <div className="portfolio-card-footer">
                      <span className="portfolio-card-metric">{project.stats.metric}</span>
                      <span className="portfolio-card-action">
                        Interactive View <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
