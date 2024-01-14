// src/components/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to Your App!</h1>
      <p>This is a generic welcome message.</p>
      
      <div>
        <h2>Get Started</h2>
        <p>Choose an option below:</p>

        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
