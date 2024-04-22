import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Signin.css';
import img from '../../media/Secure_login.svg';

const Signin = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password }),
        credentials:"include"
      });

      if (response.ok) {
        // Do something after successful sign-in
        alert('Sign-in successful');
      } else {
        setMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setMessage('Error signing in');
    }
  };

  return (
    <>
      <Navbar />
      <div className="signin-container">
        <div className="signin-image-container">
          <img src={img} alt="Sign In" className="signin-image" />
        </div>
        <div className="signin-form-container">
          <h1>Sign In</h1>
          <form onSubmit={handleSignin}>
            <div className="form-group">
              <label htmlFor="userName">Username</label>
              <input type="text" id="userName" className="form-control" placeholder="Enter your username" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="form-control" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn">Sign In</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  );
}

export default Signin;