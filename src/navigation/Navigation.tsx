import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Signin from '../pages/Signin';

const Navigation = (): React.JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
};

export default Navigation;
