import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Featured.css';
import { FiArrowUpRight, FiArrowUpDownRight } from 'react-icons/fi';

const Featured = () => {
  const [data, setData] = useState(null);

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

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

  console.log(data);
  if (!data) return null;

  return (
    <div className='featured'>
      {/* Left */}
      <div className='left'>
        <h2>Check out the top Crypto's Like Bitcoin, Ethereum and Dogecoin</h2>
        <p>See all available Cryptocurrencies</p>
        <button className='btn'>View More Coins</button>
      </div>
      {/* Right */}
      <div className='right'>
        <div className='top'>
          <img src={data[0].image} alt='/' />
        </div>
        <div>
          <h5>{data[0].name}</h5>
          <p>{data[0].current_price}</p>
        </div>
        <span>
          <FiArrowUpRight />
          {data[0].price_change_percentage_24h}
        </span>
      </div>
    </div>
  );
};

export default Featured;
