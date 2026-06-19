import React from 'react';
import { BrandIcons } from './Icons';

export const Footer = ({
  newsletterEmail,
  newsletterSuccess,
  setNewsletterEmail,
  handleNewsletterSubmit,
  navigateTo,
  setActiveServiceCategory
}) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <a href="#home" className="logo" onClick={() => navigateTo('home')}>
              <img src="https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg" alt="Siltawi Digital Marketing Logo" style={{ height: '36px', width: 'auto' }} />
            </a>
            <p className="footer-desc">
              Providing creative, data-driven, and results-oriented digital solutions designed to grow African business brands.
            </p>
            <div className="social-grid">
              <a href="https://facebook.com" className="social-link" aria-label="Facebook"><BrandIcons.Facebook size={18} /></a>
              <a href="https://instagram.com" className="social-link" aria-label="Instagram"><BrandIcons.Instagram size={18} /></a>
              <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn"><BrandIcons.Linkedin size={18} /></a>
              <a href="https://youtube.com" className="social-link" aria-label="YouTube"><BrandIcons.Youtube size={18} /></a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter"><BrandIcons.Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={() => navigateTo('home')}>Home</a></li>
              <li><a href="#about" onClick={() => navigateTo('about')}>About Us</a></li>
              <li><a href="#services" onClick={() => navigateTo('services')}>Featured Services</a></li>
              <li><a href="#portfolio" onClick={() => navigateTo('portfolio')}>Project Gallery</a></li>
              <li><a href="#team" onClick={() => navigateTo('team')}>Our Experts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#services" onClick={() => { navigateTo('services'); setActiveServiceCategory('digital-marketing'); }}>Digital Ads</a></li>
              <li><a href="#services" onClick={() => { navigateTo('services'); setActiveServiceCategory('website-development'); }}>Web Dev</a></li>
              <li><a href="#services" onClick={() => { navigateTo('services'); setActiveServiceCategory('branding-design'); }}>Branding & Logos</a></li>
              <li><a href="#services" onClick={() => { navigateTo('services'); setActiveServiceCategory('content-creation'); }}>Media Production</a></li>
              <li><a href="#services" onClick={() => { navigateTo('services'); setActiveServiceCategory('seo-services'); }}>SEO Strategy</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-heading">Newsletter</h4>
            <p>Subscribe to our marketing newsletter to receive growth strategies, local pricing metrics, and guides.</p>
            
            {newsletterSuccess ? (
              <div style={{ color: 'rgb(var(--success-rgb))', fontSize: '0.9rem', fontWeight: '600' }}>
                ✓ Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input 
                  type="email" 
                  className="newsletter-input" 
                  placeholder="email@company.com" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary btn-sm btn-accent" style={{ padding: '0.6rem 1rem' }}>
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Siltawi Digital Marketing. All rights reserved.</p>
          <p>Designed with care. Addis Ababa, Ethiopia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
