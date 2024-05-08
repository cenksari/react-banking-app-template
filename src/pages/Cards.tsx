import React from 'react';

import Card from '../components/Card/Card';
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
        <h1 className='title no-select'>Cards</h1>
        <Divider />
        <div className='cards'>
          <Card
            number='5244 2150 8252 ****'
            cvcNumber='824'
            validUntil='10 / 30'
            cardHolder='CENK SARI'
          />
        </div>
        <Divider />
        <History detailed date='May 6' dateBalance='-€127.78' />
        <Divider />
      </div>
    </>
  );
};

export default Transactions;
