import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import Button from '../components/Button';

const Login = () => {

    const [isChecked, setIsChecked] = useState("true");

    const handleButtonClick = () => {
      setIsChecked(!isChecked);
    };

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Log in</h2>
      </div>
      <form className="login-form">
        <label id="mail">email:</label>
        <input  for="mail" type="text"  />
        <Button name="Continue with email" path=""/>
        <p className="sign-up-link">
          Don’t have an account? <Link to="/signup" >SignUp</Link>
        </p>
        <div className="separator">or</div>
        <button>
        <input
            type="radio"
            id="google"
            name="login-btn"
            value="false"
            checked={isChecked === 'false'}
            onChange={() => handleButtonClick()}
        />
            Continue with Google
        </button>
        <button>
        <input
            type="radio"
            id="linkedin"
            name="login-btn"
            value="false"
            checked={isChecked === 'false'}
            onChange={() => handleButtonClick()}
        />
            Continue with Linkedin
        </button>
        <button>
        <input
            type="radio"
            id="fb"
            name="login-btn"
            value="false"
            checked={isChecked === 'false'}
            onChange={() => handleButtonClick()}
        />
            Continue with Facebook
        </button>
       
      </form>
    </div>
  );
};


export default Login;