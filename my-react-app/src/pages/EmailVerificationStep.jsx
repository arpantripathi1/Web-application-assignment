import React, { useState } from 'react';
import './EmailVerificationStep.css';

const EmailVerificationStep = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="email-verification-step-container">
      <header>
        <h2>Check your email</h2>
      </header>
      <section>
        <h4>Verify your email</h4>
        <p>We’ve sent a 6-character one-time password to example@email.com. Please enter the code below to continue.</p>
        <div className="otp-inputs">
          {otp.map((data, index) => {
            return (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={e => handleChange(e.target, index)}
                onFocus={e => e.target.select()}
              />
            );
          })}
        </div>
        <button className="verify-button">Verify</button>
        <p className="otp-resend">Re-send OTP code in 00:54</p>
      </section>
    </div>
  );
};

export default EmailVerificationStep;