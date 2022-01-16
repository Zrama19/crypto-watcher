import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Signup = () => {
  return (
    <div className='container'>
      <Navbar />
      <h3>
        Thanks for signing up! We'll keep you updated with relevant crypto news.
        Make sure to check your spam folder!
      </h3>
      <Footer />
    </div>
  );
};

export default Signup;
