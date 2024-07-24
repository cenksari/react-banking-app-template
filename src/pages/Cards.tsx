import React from 'react';

// components
import Card from '../components/Card/Card';
import Layout from '../components/Layout/Layout';
import History from '../components/History/History';
import Divider from '../components/Divider/Divider';

const Transactions = (): React.JSX.Element => (
  <Layout>
    <Divider />

    <h1 className='title no-select'>Cards</h1>

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
  </Layout>
);

export default Transactions;
