import React, { useState } from 'react';
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';

const Cryptocard = (props) => {
  const [coinId, setCoinId] = useState();
  const priceCoin = props.data.price_change_percentage_24h;
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  const handleClick = () => {
    setCoinId(props.data.id);
  };

  console.log(coinId);
  console.log(url);

  return (
    <div className='card' onClick={handleClick}>
      <div className='top'>
        {/* <img src={BTC} alt='/' /> */}
        <img src={props.data.image} alt='' />
      </div>
      <div>
        <h5>{props.data.name}</h5>
        <p>${props.data.current_price?.toLocaleString()}</p>
        {/* <p>{props.data.ath}</p> */}
      </div>

      {props.data.price_change_percentage_24h < 0 ? (
        <span className='red'>
          <FiArrowDown className='icon' />
          {priceCoin?.toFixed(2)}%
        </span>
      ) : (
        <span className='green'>
          <FiArrowUpRight className='icon' />
          {priceCoin?.toFixed(2)}%
        </span>
      )}
    </div>
  );
};

export default Cryptocard;
