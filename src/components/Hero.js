import React from 'react';
import './Hero.css';
import Crypto from '../assets/heroimg.PNG';
const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        {/* Left Side */}
        <div className='left'>
          <p>Buy & Sell Crypto 24/7 using your MetaMask Wallet</p>
          <h1>Keep up to date with real time prices</h1>
          <p>Buy, Sell, and store hundreds of Cryptocurrencies</p>
          <div className='input-container'>
            <input type='email' placeholder='Enter your email' />
            <button className='btn'>Learn More</button>
          </div>
        </div>
        {/* Right Side */}
        <div className='right'>
          <div className='img-container'>
            <img src={Crypto} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
