import React from 'react';

import Header from '../components/Header/Header';
import History from '../components/History/History';
import Divider from '../components/Divider/Divider';

const Transactions = (): React.JSX.Element => {
  return (
    <>
      <div className='bg'></div>
      <div className='content flex flex-col'>
        <Header />
        <Divider />
        <h1 className='title no-select'>Transactions</h1>
        <History detailed date='May 6' dateBalance='-€127.78' />
        <Divider />
        <History detailed date='May 5' dateBalance='-€970.23' />
        <Divider />
      </div>
    </>
  );
};

export default Transactions;
