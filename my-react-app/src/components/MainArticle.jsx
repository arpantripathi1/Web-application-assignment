import React from 'react';

const MainArticle = () => {
  return (
    <div className="main-article">
      <div className="column">
        <h2>Welcome to Aeon</h2>
        <div>
          <input type="checkbox" id="access" />
          <label htmlFor="access">Access to xyz</label>
        </div>
        <div>
          <input type="checkbox" id="initiate" />
          <label htmlFor="initiate">Initiate</label>
        </div>
        <div>
          <input type="checkbox" id="secure" />
          <label htmlFor="secure">Safe Secure</label>
        </div>
      </div>
      <div className="column">
        <h2>Choose Your Account Type</h2>
        <div>
          <input type="radio" id="individual" name="accountType" />
          <label htmlFor="individual">Individual</label>
        </div>
        <div>
          <input type="radio" id="business" name="accountType" />
          <label htmlFor="business">Business</label>
        </div>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default MainArticle;
