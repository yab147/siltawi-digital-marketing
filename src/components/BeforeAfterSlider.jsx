import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from './Icons';

// Interactive Before/After Image Slider Component
export const BeforeAfterSlider = ({ before, after }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    if (!x) return;
    const relativeX = x - rect.left;
    let position = (relativeX / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  return (
    <div 
      ref={containerRef}
      className="before-after-wrapper"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <img src={before} alt="Before State" className="ba-image ba-before" />
      <img 
        src={after} 
        alt="After State" 
        className="ba-image" 
        style={{ 
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` 
        }} 
      />
      <div className="ba-handle" style={{ left: `${sliderPosition}%` }}>
        <div className="ba-handle-circle">
          <ChevronLeft size={16} />
          <ChevronRight size={16} />
        </div>
      </div>
      <div className="ba-label ba-label-before">Before</div>
      <div className="ba-label ba-label-after">After</div>
    </div>
  );
};

export default BeforeAfterSlider;
