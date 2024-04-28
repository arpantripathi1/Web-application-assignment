import React from 'react';
import '../styles/EmailVerification.css';
import Button from '../components/Button';

const EmailVerification = () => {
  return (
    <div className="email-verification-container">
      {/* <div className="progress-bar">
        <div className="completed-step"></div>
        <div className="current-step"></div>
      </div> */}
      <div className="verification-content">
        <div className="check-icon">✔</div>
        <h1>Email verified</h1>
        <p>Congrats! You can now use this email to log in to Aeon</p>
        <Button name="Go To DashBoard" path=""/>
      </div>
    </div>
  );
};

export default EmailVerification;