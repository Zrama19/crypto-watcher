import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Featured.css';
import Cryptocard from '../components/Cryptocard';
import { useNavigate } from 'react-router-dom';

const Featured = () => {
  const [data, setData] = useState(null);

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/coins');
  };

  if (!data) return null;

  return (
    <div className='featured'>
      <div className='container'>
        {/* Left */}
        <div className='left'>
          <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button onClick={handleClick} className='btn'>
            See More Coins
          </button>
        </div>

        {/* Right */}

        <div className='right'>
          {data.map((data, index) => {
            return <Cryptocard data={data} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Featured;
