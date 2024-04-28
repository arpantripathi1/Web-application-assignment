import React from 'react';
import '../styles/Button.css';

const Button = ({ name ,onClickPath }) => {
  return (
    <button className="custom-button" onClick={onClickPath}>{name}</button>
  );
};

export default Button;
