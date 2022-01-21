import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Featured.css';
import Footer from './Footer';

const Calculator = (props) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [walletData, setWalletData] = useState();
  const walletAddress = props.wallet;
  const walletFixed = walletData?.toFixed(3);
  useEffect(() => {
    const urlWallet = `https://openapi.debank.com/v1/user/chain_balance?id=${walletAddress}&chain_id=eth`;

    axios
      .get(urlWallet)
      .then((response) => {
        setWalletData(response.data.usd_value);
        setIsLoaded(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [walletAddress]);

  return (
    <div className='container'>
      <div>
        {isLoaded ? (
          <h3>Calculating Balance...</h3>
        ) : (
          <h3>Current Balance: ${walletFixed}</h3>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Calculator;
