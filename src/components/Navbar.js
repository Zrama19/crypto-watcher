import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { injected } from './Connector';
import { useWeb3React } from '@web3-react/core';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  let {
    // eslint-disable-next-line
    active,
    // eslint-disable-next-line
    account,
    // eslint-disable-next-line
    library,
    // eslint-disable-next-line
    connector,
    activate,
    // eslint-disable-next-line
    deactivate,
  } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }
  const disconnect = () => {
    deactivate();
  };

  // console.log(account);

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
            <a href='/coins/1'>Coins</a>
          </li>

          <li>
            <a href='/#footsies'>Contact</a>
          </li>
          <li>
            <a href='/future'>Future</a>
          </li>
          {/* <span>Connected</span> */}
        </ul>
        <div className='btn-group'>
          <button onClick={connect} className='btn'>
            Connect to Wallet
          </button>
          <button onClick={disconnect} className='btn'>
            Disconnect Wallet
          </button>
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
