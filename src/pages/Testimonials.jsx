import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from '../components/Icons';
import { testimonialsData } from '../data';

export const Testimonials = () => {
  const [testimonialSlide, setTestimonialSlide] = useState(0);

  // Auto testimonial slider rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialSlide(prev => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fade-in-up">
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Client Reviews</span>
            <h2 className="section-title">What Our Partners Say About Us</h2>
            <p className="section-desc">We build durable relationships with local corporate and startup businesses to deliver ongoing value.</p>
          </div>

          {/* Featured statistics summary */}
          <div className="testimonials-featured-stats">
            <div className="testimonials-stat-box">
              <div className="testimonials-stat-number">4.9/5</div>
              <div className="star-rating">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <div className="testimonials-stat-label" style={{ marginTop: '4px' }}>Client Rating Average</div>
            </div>

            <div className="testimonials-stat-box">
              <div className="testimonials-stat-number">95%</div>
              <div className="testimonials-stat-label">Retention Rate</div>
            </div>

            <div className="testimonials-stat-box">
              <div className="testimonials-stat-number">100+</div>
              <div className="testimonials-stat-label">Successful Launches</div>
            </div>
          </div>

          {/* Testimonial Slider Panel */}
          <div className="testimonial-slider-container">
            <div 
              className="testimonial-slider"
              style={{ transform: `translateX(-${testimonialSlide * 100}%)` }}
            >
              {testimonialsData.map((item) => (
                <div className="testimonial-slide" key={item.id}>
                  <div className="testimonial-body-card">
                    <div style={{ marginBottom: '10px' }}>
                      <div className="star-rating">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <p className="testimonial-quote">"{item.quote}"</p>
                    <div className="testimonial-profile">
                      <img src={item.avatar} alt={item.author} className="testimonial-avatar" />
                      <div className="testimonial-meta">
                        <h5>{item.author}</h5>
                        <p>{item.position}, {item.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider controls */}
            <div className="slider-controls">
              <button 
                className="slider-btn"
                onClick={() => setTestimonialSlide(prev => (prev - 1 + testimonialsData.length) % testimonialsData.length)}
              >
                <ChevronLeft size={20} />
              </button>
              <div className="slider-dots">
                {testimonialsData.map((_, i) => (
                  <div 
                    key={i} 
                    className={`slider-dot ${testimonialSlide === i ? 'active' : ''}`}
                    onClick={() => setTestimonialSlide(i)}
                  ></div>
                ))}
              </div>
              <button 
                className="slider-btn"
                onClick={() => setTestimonialSlide(prev => (prev + 1) % testimonialsData.length)}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* More Testimonials list */}
          <div className="testimonials-grid">
            <div className="why-card">
              <div style={{ display: 'inline-flex', color: 'var(--warning-rgb)', marginBottom: '8px' }}>
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                "Siltawi's technical proficiency and web design transformed our digital presence completely. Our mobile checkout errors vanished."
              </p>
              <div style={{ fontWeight: '700', fontSize: '0.95rem', marginTop: '10px' }}>— General Manager, local manufacturing group</div>
            </div>

            <div className="why-card">
              <div style={{ display: 'inline-flex', color: 'var(--warning-rgb)', marginBottom: '8px' }}>
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                "The level of transparency they provide is refreshing. We receive reports outlining exactly where our ad budget goes."
              </p>
              <div style={{ fontWeight: '700', fontSize: '0.95rem', marginTop: '10px' }}>— CEO, tech start-up in Bole</div>
            </div>

            <div className="why-card">
              <div style={{ display: 'inline-flex', color: 'var(--warning-rgb)', marginBottom: '8px' }}>
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                "Within three months of optimizing our search terms, we ranked page one for our key services. Excellent local SEO work!"
              </p>
              <div style={{ fontWeight: '700', fontSize: '0.95rem', marginTop: '10px' }}>— Marketing lead, medical diagnostics center</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
