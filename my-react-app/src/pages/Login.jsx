import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Log in</h1>
      </div>
      <form className="login-form">
        <input type="text" placeholder="Email Address" />
        <button type="submit">Continue with email</button>
        <p className="sign-up-link">
          Don’t have an account? <Link to="/signup" >SignUp</Link>
        </p>
        <div className="separator">or</div>
        <button type="button">Continue with Google</button>
        <button type="button">Continue with LinkedIn</button>
        <button type="button">Continue with Facebook</button>
      </form>
    </div>
  );
};

export default Login;