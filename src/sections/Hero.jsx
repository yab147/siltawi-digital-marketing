import React from 'react';
import { ArrowRight, TrendingUp, Star } from '../components/Icons';
import { motion } from 'framer-motion';

export const Hero = ({ navigateTo }) => {
  return (
    <section className="hero-section">
      <div className="glow-bg" style={{ top: '10%', left: '-10%' }}></div>
      <div className="glow-bg" style={{ bottom: '10%', right: '-10%', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(6, 182, 212, 0.05) 50%, rgba(0,0,0,0) 70%)' }}></div>
      
      <div className="container hero-grid">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-tag">Empowering African Brands</span>
          <h1 className="hero-title">
            Propel Your Brand Into The <span className="text-gradient">Digital Future</span>
          </h1>
          <p className="hero-desc">
            We combine creative branding, performance-driven advertising, and custom web engineering to help Ethiopian businesses dominate local and international markets.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={() => navigateTo('services')}>
              Get Started <ArrowRight size={18} />
            </button>
            <button className="btn btn-secondary" onClick={() => navigateTo('contact')}>
              Request Consultation
            </button>
          </div>
          <div className="hero-clients">
            <p>Trusted by growth-minded brands</p>
            <div className="clients-logos">
              <span className="client-logo-dummy">Zemen Bank</span>
              <span className="client-logo-dummy">Kuriftu Resorts</span>
              <span className="client-logo-dummy">Sheger Delivery</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="hero-shapes">
            <div className="shape-main"></div>
            
            {/* Floating Glass Cards */}
            <motion.div 
              className="shape-card-1"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className="why-icon-wrapper" style={{ margin: 0, width: '40px', height: '40px' }}>
                <TrendingUp size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)' }}>ROAS</div>
                <div style={{ fontSize: '1rem', fontWeight: '800', color: 'rgb(var(--success-rgb))' }}>+350%</div>
              </div>
            </motion.div>

            <motion.div 
              className="shape-card-2"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            >
              <div style={{ display: 'inline-flex', color: 'var(--warning-rgb)', marginBottom: '4px' }}>
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: '800' }}>Addis Ababa's Top Agency</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
