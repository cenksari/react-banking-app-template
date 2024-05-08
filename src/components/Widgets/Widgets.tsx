import React from 'react';

import { Link } from 'react-router-dom';

const Widgets = (): React.JSX.Element => {
  return (
    <div className='widgets'>
      <Link to='/home' className='widget no-select flex flex-col flex-v-center flex-h-center'>
        <span className='material-symbols-outlined'>sync_alt</span>
        <p>Transfers</p>
      </Link>
      <Link to='/home' className='widget no-select flex flex-col flex-v-center flex-h-center'>
        <span className='material-symbols-outlined'>credit_card</span>
        <p>Virtual cards</p>
      </Link>
      <Link to='/home' className='widget no-select flex flex-col flex-v-center flex-h-center'>
        <span className='material-symbols-outlined'>savings</span>
        <p>Savings</p>
      </Link>
    </div>
  );
};

export default Widgets;
