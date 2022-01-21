import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { injected } from './Connector';
import { useWeb3React } from '@web3-react/core';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import PortableWifiOffIcon from '@mui/icons-material/PortableWifiOff';
import Web3 from 'web3';
import Web3Modal from 'web3modal';

const Navbar = (props) => {
  let {
    //eslint-disable-next-line
    active,

    //eslint-disable-next-line
    library,
    //eslint-disable-next-line
    connector,
    activate,
    deactivate,
  } = useWeb3React();

  const [click, setClick] = useState(false);
  const [account, setAccount] = useState('');

  const handleOpen = () => setClick(!click);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    localStorage.removeItem('wallet');
  };

  async function connectPrompt() {
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    const firstAccount = await web3.eth.getAccounts().then((data) => data[0]);
    setAccount(firstAccount);
  }

  useEffect(() => {
    (async () => {
      if (localStorage.getItem('WEB3_CONNECT_CACHED_PROVIDER'))
        await connectPrompt();
    })();
  }, []);

  async function disconnect() {
    await web3Modal.clearCachedProvider();
    setAccount('');
  }

  useEffect(() => {
    if (account) {
      props.setWallet(account);
      window.localStorage.getItem('wallet');
    }
  }, [props, account]);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const providerOptions = {};
  const web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions, // required
  });

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
            <a href='/calculator'>Calculator</a>
          </li>
        </ul>

        <p>Connected with: {account}</p>

        <div>
          <Button
            aria-describedby={id}
            variant='contained'
            onClick={handleClick}
          >
            Metamask
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Typography sx={{ p: 2 }}>
              {account === '' ? (
                <SettingsEthernetIcon onClick={() => connectPrompt()} />
              ) : (
                <PortableWifiOffIcon onClick={() => disconnect()} />
              )}

              {/* <SettingsEthernetIcon onClick={connect} />
              <PortableWifiOffIcon onClick={disconnect} /> */}
            </Typography>
          </Popover>
        </div>

        <div className='hamburger' onClick={handleOpen}>
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
