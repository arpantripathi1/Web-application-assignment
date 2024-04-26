// import React, { useState } from 'react';
// import "./AccountTypeSelection.css";


// import SignUp from './SignUp'; // Make sure the path to SignUp component is correct

// const AccountTypeSelection = () => {
//   const [accountType, setAccountType] = useState('individual'); // default to individual

//   return (
//     <div>
//       <div className="account-type-container">
//         <h2>Select Account Type</h2>
//         <div className="account-type-options">
//           <button onClick={() => setAccountType('individual')}>Individual</button>
//           <button onClick={() => setAccountType('business')}>Business</button>
//         </div>
//       </div>

//       <SignUp accountType={accountType} />
//     </div>
//   );
// };

// export default AccountTypeSelection;















import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';


import './AccountTypeSelection.css';

const AccountTypeSelection = () => {
  const [accountType, setAccountType] = useState('individual');
  const navigate = useNavigate();

  const handleAccountTypeChange = (type) => {
    setAccountType(type);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected account type:', accountType);
    navigate(`/signup/${accountType}`, { state: { accountType: accountType } }); 
    // You would handle the form submission here, e.g., redirecting the user or making an API call
  };

  return (
    <div className="account-type-selection-container">
      <header>
        <div><h1>aeon</h1></div>
        <div className="login-link">
          Have an account? <Link to="/">Log in</Link>
        </div>
      </header>
      <main>
        <div className="welcome-text-col">
          <h2>Welcome to Aeon</h2>
          <p>An individual account is the best way to manage your crypto and fiat portfolios.</p>
          <ul>
            <li>Access to hundreds of cryptocurrencies</li>
            <li>Initiate individual transactions and open Aeon accounts</li>
            <li>Safe & Secure</li>
          </ul>
        </div>
        <div className='account-type-col'>
            <form onSubmit={handleSubmit}>      
                <h4>Choose your account type</h4>
                <div className="account-option">
                <input
                    type="radio"
                    id="individual"
                    name="accountType"
                    value="individual"
                    checked={accountType === 'individual'}
                    onChange={() => handleAccountTypeChange('individual')}
                />
                <label htmlFor="individual">
                    <span>Individual</span>
                </label>
                <span><p>For individuals who wish to send money, create multi-currency accounts, make personal transfers, and more.</p></span>
                </div>
                <div className="account-option">
                <input
                    type="radio"
                    id="business"
                    name="accountType"
                    value="business"
                    checked={accountType === 'business'}
                    onChange={() => handleAccountTypeChange('business')}
                />
                <label htmlFor="business">
                    <span>Business</span>
                </label>
                <span>
                    <p> For businesses that want to invite team members, make group, bulk and invoice payments, and more.</p>
                </span> 
                </div>
            <button type="submit" className="continue-button" >Continue</button>
            </form>
        </div>
      </main>
    </div>
  );
};

export default AccountTypeSelection;