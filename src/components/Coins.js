import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import Cryptocard from './Cryptocard';
import './Coins.css';
import { useLocation } from 'react-router-dom';

const Coins = (props) => {
  const [data, setData] = useState(null);

  const location = useLocation();
  // console.log(location);
  const slicePage = location.pathname;
  const pageIdSliced = slicePage.slice(7, 100);
  props.function(pageIdSliced);

  // const totalPages = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //   22,
  //   23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
  // ];

  // console.log(pageIdSliced);

  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=${pageIdSliced}=&sparkline=false`;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pageIdSliced]);
  // console.log(data);
  if (!data) return null;

  return (
    <div>
      <Navbar />
      <div className='coins-featured'>
        <div className='container'>
          <div className='right'>
            {data.map((data, index) => {
              return <Cryptocard data={data} key={index} />;
            })}
          </div>
          <div className='button-coins'></div>
        </div>
      </div>
      <div className='button-row'>
        <a className='button-numbers' href='/coins/1'>
          1
        </a>
        <a className='button-numbers' href='/coins/2'>
          2
        </a>
        <a className='button-numbers' href='/coins/3'>
          3
        </a>
        <a className='button-numbers ' href='/coins/4'>
          4
        </a>
        <a className='button-numbers' href='/coins/5'>
          5
        </a>
        <a className='button-numbers' href='/coins/6'>
          6
        </a>
        <a className='button-numbers' href='/coins/7'>
          7
        </a>
        <a className='button-numbers' href='/coins/8'>
          8
        </a>
        <a
          className='button-numbers'
          href={`/coins/${Number(pageIdSliced) + 1}`}
        >
          Next
        </a>
      </div>
    </div>
  );
};

export default Coins;
