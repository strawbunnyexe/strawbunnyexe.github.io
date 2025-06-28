import React from 'react';
import './SimpleLayout.css';

const SimpleLayout = ({ children }) => {
  return (
    <div className="simple-layout">
      {children}
    </div>
  );
};

export default SimpleLayout;
