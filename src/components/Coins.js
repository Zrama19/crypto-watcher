import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import Cryptocard from './Cryptocard';

const Coins = () => {
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
    <div className='container'>
      <Navbar />
      <div className='right'>
        {data.map((data, index) => {
          return <Cryptocard data={data} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Coins;
