import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Users, Palette, ShoppingBag, Clock, Target, MessageSquare, Layout, Star, ChevronLeft, ChevronRight, ChevronDown, Mail, Phone, Megaphone } from '../components/Icons';
import StatCounter from '../components/StatCounter';
import Hero from '../sections/Hero';
import Marquee from '../components/Marquee';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { servicesData, testimonialsData, blogData, faqData } from '../data';

const RevealSection = ({ children, className = '', style }) => {
  const [ref, visible] = useScrollReveal(0.1);
  return (
    <section ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`} style={style}>
      {children}
    </section>
  );
};

export const Home = ({ navigateTo, setActiveServiceCategory }) => {
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialSlide(prev => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Hero navigateTo={navigateTo} />
      <Marquee />

      {/* STATISTICS */}
      <RevealSection className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { target: '100+', label: 'Projects Completed' },
              { target: '50+', label: 'Active Clients' },
              { target: '15', label: 'Team Members' },
              { target: '3+', label: 'Years Experience' },
              { target: '95%', label: 'Satisfaction Rate' },
            ].map((s, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-glow"></div>
                <StatCounter target={s.target} />
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* WHY CHOOSE US */}
      <RevealSection style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Value Proposition</span>
            <h2 className="section-title">Why Leading Brands Choose Siltawi</h2>
            <p className="section-desc">We deliver measurable commercial outcomes, not just empty clicks and likes.</p>
          </div>
          <div className="why-grid">
            {[
              { icon: Users, title: 'Experienced Digital Team', text: 'Our specialists bring years of corporate account management experience from leading tech companies.' },
              { icon: Palette, title: 'Creative & Modern Designs', text: 'We craft custom designs tailored to your corporate goals, ensuring your business stays unforgettable.' },
              { icon: ShoppingBag, title: 'Affordable & Clear Pricing', text: 'No hidden fees or unexpected costs. Budget-friendly digital solutions designed to grow with you.' },
              { icon: Clock, title: 'Fast Project Delivery', text: 'We strictly respect deadlines and deliver high-quality websites and campaigns on schedule.' },
              { icon: Target, title: 'Data-Driven Campaigns', text: 'We base our choices on research and analytical findings to minimize ad waste and boost leads.' },
              { icon: MessageSquare, title: 'Ongoing Tech Support', text: 'We offer technical maintenance and strategic support to keep your site updated.' },
            ].map((item, i) => (
              <div className="why-card" key={i}>
                <div className="why-icon-wrapper"><item.icon size={24} /></div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* FEATURED SERVICES */}
      <RevealSection>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Core Offerings</span>
            <h2 className="section-title">What We Do Best</h2>
            <p className="section-desc">Unlock growth with premium marketing funnels, search domination, and custom web platforms.</p>
          </div>
          <div className="featured-services-grid">
            {[
              { icon: Megaphone, title: 'Digital Marketing', desc: 'Targeted ads on Facebook, Instagram, Google, and Telegram to capture customers.', cat: 'digital-marketing', link: 'Explore Campaigns' },
              { icon: Layout, title: 'Website Development', desc: 'Premium, high-speed custom corporate sites integrated with CBE Birr and Telebirr.', cat: 'website-development', link: 'Explore Tech Stack' },
              { icon: Palette, title: 'Branding & Design', desc: 'Complete corporate guidelines, logos, and advertising visual packs.', cat: 'branding-design', link: 'Explore Brand Design' },
            ].map((s, i) => (
              <div className="service-card-preview" key={i}>
                <div className="service-card-top">
                  <div className="why-icon-wrapper"><s.icon size={24} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                <a href="#services" className="service-card-link" onClick={() => { navigateTo('services'); setActiveServiceCategory(s.cat); }}>
                  {s.link} <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <button className="btn btn-secondary" onClick={() => navigateTo('services')}>View All Services</button>
          </div>
        </div>
      </RevealSection>

      {/* TESTIMONIALS PREVIEW */}
      <RevealSection style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">Client Success Stories</h2>
            <p className="section-desc">Hear how we have partnered with enterprises to catalyze growth.</p>
          </div>
          <div className="testimonial-slider-container">
            <div className="testimonial-slider" style={{ transform: `translateX(-${testimonialSlide * 100}%)` }}>
              {testimonialsData.map((item) => (
                <div className="testimonial-slide" key={item.id}>
                  <div className="testimonial-body-card">
                    <div style={{ marginBottom: '10px' }}>
                      <div className="star-rating">
                        {[...Array(item.rating)].map((_, i) => (<Star key={i} size={16} fill="currentColor" />))}
                      </div>
                    </div>
                    <p className="testimonial-quote">"{item.quote}"</p>
                    <div className="testimonial-profile">
                      <img src={item.avatar} alt={item.author} className="testimonial-avatar" />
                      <div className="testimonial-meta"><h5>{item.author}</h5><p>{item.position}, {item.company}</p></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="slider-controls">
              <button className="slider-btn" onClick={() => setTestimonialSlide(prev => (prev - 1 + testimonialsData.length) % testimonialsData.length)}><ChevronLeft size={20} /></button>
              <div className="slider-dots">
                {testimonialsData.map((_, i) => (<div key={i} className={`slider-dot ${testimonialSlide === i ? 'active' : ''}`} onClick={() => setTestimonialSlide(i)}></div>))}
              </div>
              <button className="slider-btn" onClick={() => setTestimonialSlide(prev => (prev + 1) % testimonialsData.length)}><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* BLOG PREVIEW */}
      <RevealSection>
        <div className="glow-bg" style={{ top: '30%', right: '5%' }}></div>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Insights & Trends</span>
            <h2 className="section-title">Latest Digital Marketing Articles</h2>
            <p className="section-desc">Practical tips, guides, and tech breakdowns to optimize your marketing.</p>
          </div>
          <div className="blogs-grid">
            {blogData.map((blog) => (
              <article className="blog-card" key={blog.id}>
                <div className="blog-media"><img src={blog.image} alt={blog.title} className="blog-img" /></div>
                <div className="blog-info">
                  <div className="blog-meta-row"><span>{blog.category}</span><span>{blog.date}</span></div>
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-summary">{blog.summary}</p>
                  <a href="#home" className="blog-link" onClick={(e) => { e.preventDefault(); }}>Read Article <ArrowRight size={14} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* FAQ */}
      <RevealSection style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">Clear responses about how we coordinate, run, and invoice our agency work.</p>
          </div>
          <div className="faq-grid">
            {faqData.map((faq, index) => (
              <div className={`faq-item ${activeFaq === index ? 'active' : ''}`} key={faq.id}>
                <div className="faq-header" onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
                  <span className="faq-question">{faq.question}</span>
                  <ChevronDown className="faq-icon-arrow" size={18} />
                </div>
                <div className="faq-content" style={{ maxHeight: activeFaq === index ? '200px' : '0' }}>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* CTA */}
      <RevealSection style={{ background: 'linear-gradient(135deg, #0D2440 0%, #2E5E99 100%)', color: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center', zIndex: 2, position: 'relative' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1rem', color: '#ffffff', letterSpacing: '-1px' }}>
            Ready to Accelerate Your Digital Growth?
          </h2>
          <p style={{ color: '#7BA4D0', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.1rem' }}>
            Schedule a complimentary 30-minute growth audit with our specialists.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-accent" onClick={() => navigateTo('contact')}>Book Consultation <Mail size={18} /></button>
            <a href="https://wa.me/251900000000" className="btn btn-secondary" style={{ color: '#ffffff', borderColor: '#7BA4D0' }}>Chat via WhatsApp <Phone size={18} /></a>
          </div>
        </div>
      </RevealSection>
    </div>
  );
};

export default Home;
