import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Signup.css'; // Import the CSS file

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className='signup_heading'><h2>Create an Account</h2></div>
        <form className="signup-form">
          {/* <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" />
          </div> */}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="userName" name="userName" placeholder="Choose a username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          {/* <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" />
          </div> */}
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Sign Up</button>
            
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
