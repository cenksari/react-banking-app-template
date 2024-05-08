import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Transactions from '../pages/Transactions';

const Navigation = (): React.JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/home' element={<Home />} />
      <Route path='/transactions' element={<Transactions />} />
    </Routes>
  );
};

export default Navigation;
