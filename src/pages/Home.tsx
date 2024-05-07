import React from 'react';

import Header from '../components/Header/Header';
import Balance from '../components/Balance/Balance';
import Actions from '../components/Actions/Actions';
import History from '../components/History/History';
import Widgets from '../components/Widgets/Widgets';

const Home = (): React.JSX.Element => {
  return (
    <>
      <div className='bg'></div>
      <div className='content flex flex-col'>
        <Header />
        <Balance balance={1325.5} currency='EURO' currencySymbol='€' />
        <Actions />
        <History />
        <Widgets />
      </div>
    </>
  );
};

export default Home;
