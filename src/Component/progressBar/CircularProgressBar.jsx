import React, { useState } from 'react';
import './progressBar.css'; // Import your CSS file for styling

const CircularProgressBar = ({ progress }) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress * circumference);

  return (
    <div>
     
    <svg className="circular-progress-bar" width="100" height="100">
    <p style={{position:"absolute", zIndex:"1000000px"}}>60%</p>
      <circle
        className="background-circle"
        cx="50"
        cy="50"
        r={radius}
        strokeWidth="6"
      />
      <circle
        className="progress-circle"
        cx="50"
        cy="50"
        r={radius}
        strokeWidth="6"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
    </svg>
    </div>
  );
};

export default CircularProgressBar