import React from 'react';
import '../styles/HorizontalLine.css'; 

const HorizontalLine = ({status }) => {
  const circleStyle = {
    backgroundColor: status === 'active' ? 'black' : "#cfcfcf;"// Change color based on status prop
  };

  return  <div className="line" style={circleStyle}></div>
};

export default HorizontalLine;
