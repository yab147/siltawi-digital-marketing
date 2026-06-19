import React from 'react';
import * as Icons from './Icons';

// Helper Component to render Lucide Icons dynamically from strings
export const IconComponent = ({ name, className = "" }) => {
  const Icon = Icons[name] || Icons.HelpCircle;
  return <Icon className={className} />;
};

export default IconComponent;
