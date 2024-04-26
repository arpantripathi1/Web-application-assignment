import React from 'react';

const LoginForm = () => {
  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
      </div>
      <button>Continue with Email</button>
      <div>
        <span>Don't have an account?</span>
        <a href="/signup">Sign Up</a>
      </div>
        
    </div>
  );
};

export default LoginForm;