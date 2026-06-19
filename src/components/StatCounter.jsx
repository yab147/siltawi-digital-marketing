import React, { useState, useEffect } from 'react';

// Animated Statistics Counter Component
export const StatCounter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const numericTarget = parseInt(target.replace(/[^0-9]/g, ""), 10) || 0;
    if (numericTarget === 0) {
      setCount(target);
      return;
    }

    const duration = 2000; // ms
    const increment = numericTarget / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        clearInterval(timer);
        setCount(target);
      } else {
        const prefixSymbol = target.startsWith('+') ? '+' : '';
        const suffixSymbol = target.endsWith('+') ? '+' : target.endsWith('%') ? '%' : '';
        setCount(`${prefixSymbol}${Math.floor(start)}${suffixSymbol}`);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span className="stat-number">{count}</span>;
};

export default StatCounter;
