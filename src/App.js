import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Coins from './components/Coins';
import ErrorPage from './components/ErrorPage';
import Signup from './components/Signup';
import Future from './components/Future';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';

const getLibrary = (provider) => {
  return new Web3(provider);
};

const App = () => {
  const whatever = (path) => {
    console.log(path);
  };
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route
            path='/coins/:path'
            element={<Coins function={whatever} />}
          ></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/future' element={<Future />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </Web3ReactProvider>
  );
};

export default App;
