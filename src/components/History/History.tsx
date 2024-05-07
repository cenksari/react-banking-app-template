import React from 'react';

import { Link } from 'react-router-dom';

import HistoryLine from './HistoryLine';

const History = (): React.JSX.Element => {
  return (
    <div className='history'>
      <HistoryLine
        item={{
          id: 1,
          icon: 'coffee',
          time: '15:34',
          name: 'Coffee',
          amount: 3.25,
          color: 'purple',
          currencySymbol: '€',
        }}
      />
      <HistoryLine
        item={{
          id: 2,
          icon: 'hotel',
          time: '12:21',
          name: 'Hotel booking',
          amount: 323.26,
          color: 'yellow',
          currencySymbol: '€',
        }}
      />
      <HistoryLine
        item={{
          id: 3,
          icon: 'sync',
          time: '11:46',
          name: 'Subscription payment',
          amount: 9.99,
          color: 'orange',
          currencySymbol: '€',
        }}
      />
      <HistoryLine
        item={{
          id: 4,
          icon: 'water',
          time: '10:51',
          name: 'Water bill',
          amount: 54.21,
          color: 'gray',
          currencySymbol: '€',
        }}
      />
      <HistoryLine
        item={{
          id: 5,
          icon: 'water',
          time: '09:14',
          name: 'Supermarket',
          amount: 78.12,
          color: 'red',
          currencySymbol: '€',
        }}
      />
      <HistoryLine
        item={{
          id: 5,
          icon: 'local_activity',
          time: '09:14',
          name: 'Tickets',
          amount: 78.12,
          color: 'blue',
          currencySymbol: '€',
        }}
      />
      <HistoryLine
        item={{
          id: 5,
          icon: 'bolt',
          time: '07:33',
          name: 'Electricty bill',
          amount: 43.55,
          color: 'green',
          currencySymbol: '€',
        }}
      />
      <div className='history-line bottom flex flex-h-center flex-v-center'>
        <Link to='/'>See all</Link>
      </div>
    </div>
  );
};

export default History;
