import React from 'react';
import './Button.css'
const VoltageButton = () => {
  return (
    <button className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
    Explore
  </button>
  
  );
};

// Define inline styles
const buttonStyle = {
  color: 'white',
  background: '#0D1127',
  padding: '1rem 3rem 1rem 3rem',
  borderRadius: '5rem',
  border: '5px solid #5978F3',
  fontSize: '1.2rem',
  lineHeight: '1em',
  letterSpacing: '0.075em',
  transition: 'background 0.3s',
};

const svgStyle = {
  display: 'block',
  position: 'absolute',
  top: '-0.75em',
  left: '-0.25em',
  width: 'calc(100% + 0.5em)',
  height: 'calc(100% + 1.5em)',
  pointerEvents: 'none',
  opacity: 0,
  transition: 'opacity 0.4s',
  transitionDelay: '0.1s',
};

const dotsContainerStyle = {
  opacity: 0,
  transition: 'opacity 0.3s',
  transitionDelay: '0.4s',
};

const dotStyle = {
  width: '1rem',
  height: '1rem',
  background: 'white',
  borderRadius: '100%',
  position: 'absolute',
  opacity: 0,
};

export default VoltageButton;
