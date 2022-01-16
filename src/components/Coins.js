import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import Cryptocard from './Cryptocard';
import './Coins.css';
import { useLocation } from 'react-router-dom';
import CoinsPage from './CoinsPages';

const Coins = (props) => {
  const [data, setData] = useState(null);
  // const [page, setPage] = useState();

  const location = useLocation();
  // console.log(location);
  const slicePage = location.pathname;
  const pageIdSliced = slicePage.slice(7, 100);
  props.function(pageIdSliced);

  const totalCoins = 12500;
  const coinsPerPage = 250;
  const coinPages = totalCoins / coinsPerPage;

  // for (let i = 0; i < coinPages; i++) {
  //   setPage((prevPage) => {
  //     return prevPage;
  //   });
  // }

  const coinsTotal = [];
  for (let i = 0; i < coinPages; i++) {
    coinsTotal.push(i);
  }

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
        <a
          className='button-numbers'
          href={`/coins/${Number(pageIdSliced) - 1}`}
        >
          Previous
        </a>
        {coinsTotal.map((page, index) => {
          return <CoinsPage page={page} key={index} />;
        })}

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
