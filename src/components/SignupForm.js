import React from 'react';

function SignupForm({ onClose }) {
  return (
    <div className="signup-form-overlay">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required /><br /><br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required /><br /><br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required /><br /><br />
          <button type="submit">Sign Up</button><br /><br />
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
