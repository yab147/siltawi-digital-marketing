import React from 'react';
import { MapPin, Phone, Mail, Clock, Check, Send } from '../components/Icons';

export const Contact = ({ contactForm, contactErrors, contactSuccess, handleContactChange, handleContactSubmit }) => {
  return (
    <div className="fade-in-up">
      <section>
        <div className="container contact-grid">
          
          {/* Contact Information */}
          <div className="contact-info-sidebar">
            <div className="contact-info-box">
              <span className="section-tag">Get in Touch</span>
              <h2 style={{ fontSize: '1.75rem', fontWeight: '800' }}>Contact Information</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Have a project in mind or need assistance with your marketing? Stop by our office or write to us anytime.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><MapPin size={18} /></div>
                  <div className="contact-info-details">
                    <h4>Address</h4>
                    <p>Bole, Behind Edna Mall, Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><Phone size={18} /></div>
                  <div className="contact-info-details">
                    <h4>Phone</h4>
                    <p><a href="tel:+251900000000">+251 900 000 000</a></p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><Mail size={18} /></div>
                  <div className="contact-info-details">
                    <h4>Email</h4>
                    <p><a href="mailto:info@siltawi.com">info@siltawi.com</a></p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><Clock size={18} /></div>
                  <div className="contact-info-details">
                    <h4>Working Hours</h4>
                    <p>Mon - Fri: 8:30 AM - 5:30 PM | Sat: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Section */}
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!11m18!1m12!1m3!1d3940.6729910540026!2d38.78457787591696!3d9.001377889506691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85098ffbeec3%3A0xe54d246c4f74d0e6!2sEdna%20Mall!5e0!3m2!1sen!2set!4v1718843912948!5m2!1sen!2set" 
                className="map-iframe"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Siltawi Office Location Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form with Custom Validations */}
          <div className="contact-form-container">
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem' }}>Send Us a Message</h3>
            
            {contactSuccess && (
              <div className="form-success-alert">
                <Check size={20} />
                <span>Thank you! Your inquiry has been sent successfully. We will reach back within 24 hours.</span>
              </div>
            )}

            <form onSubmit={handleContactSubmit}>
              <div className="form-group-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    name="fullName"
                    className={`form-control ${contactErrors.fullName ? 'error' : ''}`}
                    value={contactForm.fullName}
                    onChange={handleContactChange}
                    placeholder="John Doe"
                  />
                  {contactErrors.fullName && <div className="form-error-text">{contactErrors.fullName}</div>}
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    className={`form-control ${contactErrors.email ? 'error' : ''}`}
                    value={contactForm.email}
                    onChange={handleContactChange}
                    placeholder="john@company.com"
                  />
                  {contactErrors.email && <div className="form-error-text">{contactErrors.email}</div>}
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className={`form-control ${contactErrors.phone ? 'error' : ''}`}
                    value={contactForm.phone}
                    onChange={handleContactChange}
                    placeholder="+251 911 00 00 00"
                  />
                  {contactErrors.phone && <div className="form-error-text">{contactErrors.phone}</div>}
                </div>
                <div className="form-group">
                  <label className="form-label">Company / Organization</label>
                  <input 
                    type="text" 
                    name="companyName"
                    className="form-control"
                    value={contactForm.companyName}
                    onChange={handleContactChange}
                    placeholder="Your Company Name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject *</label>
                <input 
                  type="text" 
                  name="subject"
                  className={`form-control ${contactErrors.subject ? 'error' : ''}`}
                  value={contactForm.subject}
                  onChange={handleContactChange}
                  placeholder="How can we help you?"
                />
                {contactErrors.subject && <div className="form-error-text">{contactErrors.subject}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea 
                  name="message"
                  className={`form-control ${contactErrors.message ? 'error' : ''}`}
                  rows="5"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  placeholder="Provide brief details about your project or inquiry..."
                ></textarea>
                {contactErrors.message && <div className="form-error-text">{contactErrors.message}</div>}
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
