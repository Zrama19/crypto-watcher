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

const Navbar = (props) => {
  let {
    //eslint-disable-next-line
    active,
    account,
    //eslint-disable-next-line
    library,
    //eslint-disable-next-line
    connector,
    activate,
    deactivate,
  } = useWeb3React();

  const [click, setClick] = useState(false);
  // const [wallet, setWallet] = useState();

  const handleOpen = () => setClick(!click);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (account) {
      props.setWallet(account);
    }
  }, [props, account]);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
              <SettingsEthernetIcon onClick={connect} />
              <PortableWifiOffIcon onClick={disconnect} />
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
