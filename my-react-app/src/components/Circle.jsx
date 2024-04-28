import React from 'react';
import '../styles/Circle.css'; 

const Circle = ({ name , status }) => {
  const circleStyle = {
    backgroundColor: status === 'active' ? 'black' : '#cfcfcf;' // Change color based on status prop
  };

  return <div className="circle" style={circleStyle}></div>
  
};

export default Circle;
