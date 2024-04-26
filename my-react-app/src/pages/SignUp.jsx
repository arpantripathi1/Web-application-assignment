import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = ({ accountType }) => {
  // Set initial form fields based on account type
  const initialFormState = accountType === 'business'
    ? {
        companyName: '',
        companyRegistrationNumber: '',
        contactEmail: '',
        contactPhoneNumber: '',
      }
    : {
        firstName: '',
        lastName: '',
        email: '',
      };

  const [formData, setFormData] = useState(initialFormState);
  const [agreementChecked, setAgreementChecked] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    setAgreementChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation and submission logic here
    console.log(formData);
    console.log(agreementChecked);
  };

  return (
    <div className="signup-container">
      <h2>{accountType === 'business' ? 'Business Account SignUp' : "Let's get started"}</h2>
      <div>
        <div className='column-one'>
          <h2>Let's create account</h2>
        </div>
        <div className='column-two'>
            <form onSubmit={handleSubmit} className="signup-form">
                <h4>create your {accountType} account</h4>
                {/* Render fields based on account type */}
                <p>Be sure to enter your legal name as it appears on your government-issuued ID.</p>
                {accountType === 'business' ? (
                <>
                <div className='name'>
                    <div>
                    <label htmlFor="c-name">Company name:</label>
                    <input
                        name="companyName"
                        type="text"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div>
                        <label htmlFor="registration">Registration name:</label>
                        <input
                        name="companyRegistrationNumber"
                        type="text"
                        placeholder="Registration Number"
                        value={formData.companyRegistrationNumber}
                        onChange={handleInputChange}
                        />
                    </div>
                
                
                </div>
                <label htmlFor="mail">Email:</label> 
                    <input
                    name="contactEmail"
                    type="email"
                    placeholder="Contact Email"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    />
                    <label htmlFor="contact">Contact </label>
                    <input
                    name="contactPhoneNumber"
                    type="tel"
                    placeholder="Contact Phone Number"
                    value={formData.contactPhoneNumber}
                    onChange={handleInputChange}
                    />
                </>
                ) : (
                <>
                <div className='name'>
                <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    />
                
                
                <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    />
                </div>
                
                
                    <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    />
                </>
                )}
                <label className="checkbox-container">
                <input
                    type="checkbox"
                    checked={agreementChecked}
                    onChange={handleCheckboxChange}
                />
                I certify that I'm 18 years or older, I agree to the Terms & Conditions and Privacy Policy.
                </label>
                <button type="submit" className="signup-button">Continue</button>
            </form>
            {accountType !== 'business' && (
                <p className="alternate-signup">
                Not looking for an individual account? <Link to="/signup/business">Sign up for a business account</Link>
                </p>
            )}
        </div>
      </div>  
    </div>
  );
};

export default SignUp;