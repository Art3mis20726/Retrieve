import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Signup.css'; // Import the CSS file

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/v1/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password }),
      });

      if (response.ok) {
        alert('User created successfully');
      } else {
        alert('Error creating user');
      }
    } catch (error) {
      console.error('Error creating user:', error);
      setMessage('Error creating user');
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className='signup_heading'><h2>Create an Account</h2></div>
        <form className="signup-form" onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="userName">Username</label>
            <input type="text" id="userName" name="userName" placeholder="Choose a username" value={userName} onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
}

export default Signup;