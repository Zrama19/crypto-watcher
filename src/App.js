import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Coins from './components/Coins';
import ErrorPage from './components/ErrorPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/coins' element={<Coins />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
