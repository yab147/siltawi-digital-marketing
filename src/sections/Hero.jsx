import React from 'react';
import { ArrowRight, TrendingUp, Star, Target, Users, Layout, Palette, Megaphone } from '../components/Icons';
import { motion } from 'framer-motion';

const orbitIcons = [
  { Icon: Megaphone, label: 'Ads', color: '#2E5E99' },
  { Icon: Layout, label: 'Web', color: '#7BA4D0' },
  { Icon: Palette, label: 'Brand', color: '#0D2440' },
  { Icon: Target, label: 'SEO', color: '#2E5E99' },
  { Icon: Users, label: 'Social', color: '#7BA4D0' },
];

export const Hero = ({ navigateTo }) => {
  return (
    <section className="hero-section">
      <div className="glow-bg" style={{ top: '10%', left: '-10%' }}></div>
      <div className="glow-bg" style={{ bottom: '10%', right: '-10%', background: 'radial-gradient(circle, rgba(46,94,153,0.15) 0%, rgba(123,164,208,0.05) 50%, transparent 70%)' }}></div>
      
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
          <div className="hero-orbit-container">
            {/* Central pulsing core */}
            <motion.div 
              className="hero-orbit-center"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <img 
                src="https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg" 
                alt="Siltawi" 
                style={{ height: '28px', width: 'auto', filter: 'brightness(0) invert(1)' }} 
              />
            </motion.div>

            {/* Orbit rings */}
            <div className="hero-orbit-ring hero-orbit-ring-1">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }}>
                <div className="hero-orbit-ring-visual"></div>
              </motion.div>
            </div>
            <div className="hero-orbit-ring hero-orbit-ring-2">
              <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }}>
                <div className="hero-orbit-ring-visual"></div>
              </motion.div>
            </div>

            {/* Orbiting icon nodes */}
            {orbitIcons.map((item, i) => {
              const angle = (i / orbitIcons.length) * 360;
              const radius = 42;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              return (
                <motion.div
                  key={i}
                  className="hero-orbit-node"
                  style={{ left: `calc(50% + ${x}%)`, top: `calc(50% + ${y}%)` }}
                  animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ repeat: Infinity, duration: 3 + i * 0.5, ease: "easeInOut", delay: i * 0.3 }}
                >
                  <div className="hero-orbit-node-icon" style={{ background: item.color }}>
                    <item.Icon size={18} color="#fff" />
                  </div>
                  <span className="hero-orbit-node-label">{item.label}</span>
                </motion.div>
              );
            })}

            {/* Floating metric cards */}
            <motion.div 
              className="hero-float-card hero-float-card-1"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <div className="hero-float-card-icon"><TrendingUp size={16} /></div>
              <div>
                <div className="hero-float-card-value">+350%</div>
                <div className="hero-float-card-label">ROAS</div>
              </div>
            </motion.div>

            <motion.div 
              className="hero-float-card hero-float-card-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div style={{ display: 'flex', gap: '2px', color: '#F59E0B', marginBottom: '4px' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
              </div>
              <div className="hero-float-card-label" style={{ fontWeight: 800, fontSize: '0.8rem', color: 'var(--text-main)' }}>Top Rated Agency</div>
            </motion.div>

            <motion.div 
              className="hero-float-card hero-float-card-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            >
              <div className="hero-float-card-value" style={{ color: 'rgb(var(--success-rgb))' }}>50+</div>
              <div className="hero-float-card-label">Active Clients</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
