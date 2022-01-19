import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Zang from '../assets/zang.png';

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img src={Zang} alt='' className='error' />
        <h1 className='error-h1'>Error 404...You're far from home</h1>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
