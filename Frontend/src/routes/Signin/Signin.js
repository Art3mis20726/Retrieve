import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Signin.css';
import img from '../../media/Secure_login.svg'; 

const Signin = () => {
  return (
    <>
      <Navbar />
      <div className="signin-container">
        <div className="signin-image-container">
          <img src={img} alt="Sign In" className="signin-image" />
        </div>
        <div className="signin-form-container">
          <h1>Sign In</h1>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" className="form-control" placeholder="Enter your username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="form-control" placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn">Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
