import React from 'react';
import { Moon, Sun, X, Menu } from './Icons';

export const Navbar = ({ 
  currentTab, 
  theme, 
  mobileMenuOpen, 
  scrolled, 
  navigateTo, 
  toggleTheme, 
  setMobileMenuOpen 
}) => {
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#home" className="logo" onClick={() => navigateTo('home')}>
          <img src="https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg" alt="Siltawi Digital Marketing Logo" style={{ height: '36px', width: 'auto' }} />
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            {['home', 'about', 'services', 'portfolio', 'team', 'testimonials', 'contact'].map((tab) => (
              <li key={tab}>
                <a 
                  href={`#${tab}`} 
                  className={`nav-link ${currentTab === tab ? 'active' : ''}`}
                  onClick={() => navigateTo(tab)}
                >
                  {tab === 'home' ? 'Home' : 
                   tab === 'about' ? 'About Us' : 
                   tab === 'services' ? 'Services' : 
                   tab === 'portfolio' ? 'Portfolio' : 
                   tab === 'team' ? 'Our Team' : 
                   tab === 'testimonials' ? 'Testimonials' : 'Contact Us'}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            
            <button 
              className="btn btn-primary btn-sm btn-accent"
              onClick={() => navigateTo('contact')}
            >
              Consultation
            </button>

            <button 
              className="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
