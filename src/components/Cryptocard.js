import React from 'react';
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';

const Cryptocard = (props) => {
  // console.log(props.data);

  const priceCoin = props.data.price_change_percentage_24h;

  return (
    <div className='card'>
      <div className='top'>
        {/* <img src={BTC} alt='/' /> */}
        <img src={props.data.image} alt='' />
      </div>
      <div>
        <h5>{props.data.name}</h5>
        <p>${props.data.current_price.toLocaleString()}</p>
        {/* <p>{props.data.ath}</p> */}
      </div>

      {props.data.price_change_percentage_24h < 0 ? (
        <span className='red'>
          <FiArrowDown className='icon' />
          {priceCoin}%
        </span>
      ) : (
        <span className='green'>
          <FiArrowUpRight className='icon' />
          {priceCoin}%
        </span>
      )}
    </div>
  );
};

export default Cryptocard;
