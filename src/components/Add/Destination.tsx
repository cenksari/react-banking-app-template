import React from 'react';

const Destination = (): React.JSX.Element => (
  <div className='accounts flex flex-v-center flex-space-between'>
    <div className='account-balance flex flex-col'>
      <div className='flex flex-v-center no-select pointer'>
        <span>EURO</span>
        <span className='material-symbols-outlined'>keyboard_arrow_down</span>
      </div>
      <span className='account-balance-bottom'>Balance: € 231.40</span>
    </div>
    <div className='account-money flex flex-col right'>
      <div className='flex flex-v-center flex-end'>
        <span>€</span>
        <input
          tabIndex={0}
          className='account-balance-input right'
          value='0'
          type='text'
          placeholder='0'
          autoComplete='off'
          onChange={() => {}}
        />
      </div>
      <span className='account-balance-bottom'>No fee</span>
    </div>
  </div>
);

export default Destination;
