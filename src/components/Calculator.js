import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Featured.css';

const Calculator = (props) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [currency, setCurrency] = useState();
  const [walletData, setWalletData] = useState();
  const [coinData, setCoinData] = useState();
  const [coin, setCoin] = useState();
  const walletAddress = props.wallet;
  const walletFixed = walletData?.toFixed(3);
  const [coinLoaded, setCoinLoaded] = useState(true);

  const getCurrency = (e) => {
    setCurrency(e.target.value);
  };

  const getCoin = (e) => {
    setCoin(e.target.value);
  };

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

  const getCoinApi = async () => {
    const coinUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coin}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    axios
      .get(coinUrl)
      .then((response) => {
        setCoinData(response.data[0].current_price);
        setCoinLoaded(false);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(coinUrl);
  };
  console.log(currency);
  console.log(coin);
  console.log(coinData);

  return (
    <div className='container'>
      <div className='connect-wallet'>
        {isLoaded ? (
          <h3>Connect your Wallet to view Balance</h3>
        ) : (
          <div>
            <h3>Current Balance: ${walletFixed}</h3>
            <div>
              <label>Choose a Currency: </label>
              <select name='currencies' onChange={getCurrency} required>
                <option value='null'>----</option>
                <option value='USD'>USD</option>
                <option value='RUB'>RUB</option>
                <option value='AED'>AED</option>
              </select>
            </div>
            <div>
              <label>Choose a coin:</label>
              <select name='cryptos' onChange={getCoin}>
                <option value='null'>----</option>
                <option value='bitcoin'>Bitcoin</option>
                <option value='ethereum'>Ethereum</option>
              </select>
            </div>
            <div>
              <button onClick={getCoinApi}>Calculate!</button>
            </div>
            <div>
              {coinLoaded ? null : (
                <p>
                  You have {(walletFixed / coinData)?.toFixed(8)} worth of{' '}
                  {coin} based on {currency} currency.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
