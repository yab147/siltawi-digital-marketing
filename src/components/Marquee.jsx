import React from 'react';

const items = [
  'Digital Marketing', 'Web Development', 'Brand Identity', 'SEO Strategy',
  'Social Media', 'Content Creation', 'E-Commerce', 'UI/UX Design',
  'Performance Ads', 'Analytics', 'Consulting', 'Growth Hacking'
];

const Marquee = () => (
  <div className="marquee-section">
    <div className="marquee-track">
      {[...items, ...items].map((item, i) => (
        <span className="marquee-item" key={i}>
          {item} <span className="marquee-dot">●</span>
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
