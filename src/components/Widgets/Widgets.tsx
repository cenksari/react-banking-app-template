import React from 'react';

import { Link } from 'react-router-dom';

const Widgets = (): React.JSX.Element => (
  <div className='widgets flex flex-v-center flex-space-between'>
    <Link to='/transactions' className='widget no-select flex flex-col flex-v-center flex-h-center'>
      <span className='material-symbols-outlined'>sync_alt</span>
      <p>Transactions</p>
    </Link>
    <Link to='/cards' className='widget no-select flex flex-col flex-v-center flex-h-center'>
      <span className='material-symbols-outlined'>credit_card</span>
      <p>Cards</p>
    </Link>
    <Link to='/savings' className='widget no-select flex flex-col flex-v-center flex-h-center'>
      <span className='material-symbols-outlined'>savings</span>
      <p>Savings</p>
    </Link>
  </div>
);

export default Widgets;
