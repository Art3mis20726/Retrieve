import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import Contact from './routes/Contact/Contact';
import About from './routes/About/About';
import Signin from './routes/Signin/Signin';
import Signup from './routes/Signup/Signup';
import Landing from './routes/landing/Landing';
import Profile from './components/profile/Profile';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
