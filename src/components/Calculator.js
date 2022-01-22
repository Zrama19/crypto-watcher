import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Featured.css';

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
      <div className='connect-wallet'>
        {isLoaded ? (
          <h3>Connect your Wallet to view Balance</h3>
        ) : (
          <div>
            <h3>Current Balance: ${walletFixed}</h3>
            <label>Choose a Currency: </label>
            <select name='currencies' required>
              <option value='null'>----</option>
              <option value='USD'>USD</option>
              <option value='RUB'>RUB</option>
              <option value='AED'>AED</option>
            </select>
            <label>Choose a coin:</label>
            <select name='cryptos'>
              <option value='null'>----</option>
              <option value='bitcoin'>Bitcoin</option>
              <option value='ethereum'>Ethereum</option>
            </select>
            <div>
              <button>Calculate!</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
