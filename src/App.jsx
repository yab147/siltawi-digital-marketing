import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import { X, MessageSquare, ArrowUp } from './components/Icons';

function App() {
  // Global States
  const [currentTab, setCurrentTab] = useState('home');
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Tab Filtering States
  const [activeServiceCategory, setActiveServiceCategory] = useState('digital-marketing');
  const [activePortfolioFilter, setActivePortfolioFilter] = useState('All');
  
  // Modals & Sliders States
  const [selectedProject, setSelectedProject] = useState(null);

  // Forms States
  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    subject: '',
    message: ''
  });
  const [contactErrors, setContactErrors] = useState({});
  const [contactSuccess, setContactSuccess] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Handle Hash Routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validTabs = ['home', 'about', 'services', 'portfolio', 'team', 'testimonials', 'contact'];
      if (hash && validTabs.includes(hash)) {
        setCurrentTab(hash);
      } else {
        setCurrentTab('home');
      }
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Simulate loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    // Initial run
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      clearTimeout(timer);
    };
  }, []);

  // Sync state to location hash
  const navigateTo = (tabName) => {
    window.location.hash = `#${tabName}`;
    setCurrentTab(tabName);
  };

  // Theme Syncing
  useEffect(() => {
    const savedTheme = localStorage.getItem('siltawi-theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('siltawi-theme', nextTheme);
  };

  // Scroll Tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form Handlers
  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
    // Clear validation error when user types
    if (contactErrors[e.target.name]) {
      setContactErrors({
        ...contactErrors,
        [e.target.name]: ''
      });
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!contactForm.fullName.trim()) errors.fullName = "Full Name is required.";
    if (!contactForm.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!contactForm.phone.trim()) errors.phone = "Phone number is required.";
    if (!contactForm.subject.trim()) errors.subject = "Subject is required.";
    if (!contactForm.message.trim()) errors.message = "Message cannot be empty.";

    if (Object.keys(errors).length > 0) {
      setContactErrors(errors);
      return;
    }

    // Success Simulation
    setContactSuccess(true);
    setContactErrors({});
    
    // Clear success alert after 5s
    setTimeout(() => {
      setContactSuccess(false);
      setContactForm({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        subject: '',
        message: ''
      });
    }, 5000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      return;
    }
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterSuccess(false);
      setNewsletterEmail('');
    }, 4000);
  };

  // Redirect client to contact page pre-filled with service request
  const handleRequestService = (serviceTitle) => {
    setContactForm({
      ...contactForm,
      subject: `Inquiry: ${serviceTitle}`,
      message: `Hi Siltawi Team, I am interested in your ${serviceTitle} service. Please provide details on pricing and availability.`
    });
    navigateTo('contact');
  };

  return (
    <>
      {/* LOADING ANIMATION PRELOADER */}
      <div className={`preloader ${!loading ? 'fade-out' : ''}`}>
        <div className="spinner"></div>
        <div style={{ marginTop: '20px' }}>
          <img src="https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg" alt="Siltawi" style={{ height: '32px', width: 'auto' }} />
        </div>
      </div>

      <Navbar 
        currentTab={currentTab} 
        theme={theme} 
        mobileMenuOpen={mobileMenuOpen} 
        scrolled={scrolled} 
        navigateTo={navigateTo} 
        toggleTheme={toggleTheme} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />

      {/* RENDER ACTIVE PAGE */}
      <div className="page-container">
        {currentTab === 'home' && <Home navigateTo={navigateTo} setActiveServiceCategory={setActiveServiceCategory} />}
        {currentTab === 'about' && <About />}
        {currentTab === 'services' && <Services activeServiceCategory={activeServiceCategory} setActiveServiceCategory={setActiveServiceCategory} handleRequestService={handleRequestService} />}
        {currentTab === 'portfolio' && <Portfolio activePortfolioFilter={activePortfolioFilter} setActivePortfolioFilter={setActivePortfolioFilter} setSelectedProject={setSelectedProject} />}
        {currentTab === 'team' && <Team contactForm={contactForm} setContactForm={setContactForm} navigateTo={navigateTo} />}
        {currentTab === 'testimonials' && <Testimonials />}
        {currentTab === 'contact' && <Contact contactForm={contactForm} contactErrors={contactErrors} contactSuccess={contactSuccess} handleContactChange={handleContactChange} handleContactSubmit={handleContactSubmit} />}
      </div>

      {/* PORTFOLIO DETAIL INTERACTIVE MODAL */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <X size={20} />
            </button>
            <div className="modal-body">
              <div className="modal-header-info">
                <span className="modal-cat">{selectedProject.category}</span>
                <h2 className="modal-title">{selectedProject.title}</h2>
                <div className="modal-client">Client: <strong>{selectedProject.client}</strong></div>
              </div>

              {/* Before / After Slider Component */}
              <div style={{ margin: '20px 0' }}>
                <BeforeAfterSlider 
                  before={selectedProject.beforeImage} 
                  after={selectedProject.afterImage} 
                />
              </div>

              {/* Grid content detailing story */}
              <div className="modal-grid">
                <div className="modal-story">
                  <h4>The Challenge</h4>
                  <p>{selectedProject.challenge}</p>
                  
                  <h4 style={{ marginTop: '15px' }}>Our Solution</h4>
                  <p>{selectedProject.solution}</p>
                </div>

                <div className="modal-right">
                  <div className="modal-stats-card">
                    <div className="modal-stats-metric">{selectedProject.stats.metric}</div>
                    <div className="modal-stats-label">{selectedProject.stats.label}</div>
                  </div>

                  <button 
                    className="btn btn-primary btn-sm"
                    style={{ width: '100%', marginTop: '10px' }}
                    onClick={() => {
                      setSelectedProject(null);
                      handleRequestService(selectedProject.title);
                    }}
                  >
                    Discuss Similar Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FLOATING WHATSAPP CHAT BUTTON */}
      <a 
        href="https://wa.me/251900000000?text=Hi%20Siltawi%20Team%2C%20I%20would%20like%20to%20request%20a%20digital%20marketing%20consultation." 
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Siltawi Team on WhatsApp"
      >
        <MessageSquare size={26} />
      </a>

      {/* BACK TO TOP BUTTON */}
      <button 
        className={`back-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to Top"
      >
        <ArrowUp size={20} />
      </button>

      <Footer 
        newsletterEmail={newsletterEmail}
        newsletterSuccess={newsletterSuccess}
        setNewsletterEmail={setNewsletterEmail}
        handleNewsletterSubmit={handleNewsletterSubmit}
        navigateTo={navigateTo}
        setActiveServiceCategory={setActiveServiceCategory}
      />
    </>
  );
}

export default App;
