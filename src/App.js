import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Coins from './components/Coins';
import ErrorPage from './components/ErrorPage';
import Signup from './components/Signup';
import Future from './components/Future';
import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core';

function getLibrary(provider) {
  return new Web3(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/coins' element={<Coins />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
          <Route path='/future' element={<Future />}></Route>
        </Routes>
      </Router>
    </Web3ReactProvider>
  );
}

export default App;
