import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { injected } from './Connector';
import { useWeb3React } from '@web3-react/core';

const Navbar = () => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate('./future');
    e.preventDefault();
  };

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }
  async function disconnect() {
    try {
      await deactivate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div className='header'>
      <div className='container'>
        <a href='/'>
          <h1 className='cryptowatcher'>
            crypto<span className='primary'>watcher</span>
          </h1>
        </a>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/coins'>Coins</a>
          </li>

          <li>
            <a href='/'>Contact</a>
          </li>
          <li onClick={handleSubmit}>
            <a href='/future'>Future</a>
          </li>
          {/* <span>Connected</span> */}
        </ul>
        <div className='btn-group'>
          <button onClick={connect} className='btn'>
            Connect Wallet
          </button>
          <button onClick={disconnect} className='btn'>
            Disconnect Wallet
          </button>
          {active ? (
            <span>
              Connected with <strong>{account}</strong>
            </span>
          ) : (
            <span>Not connected</span>
          )}
        </div>
        <div className='hamburger' onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: '#333' }} />
          ) : (
            <FaBars size={20} style={{ color: '#333' }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
