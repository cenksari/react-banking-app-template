import React from 'react';

// interfaces
interface IProps {
  balance: number;
  currency: string;
  currencySymbol: string;
}

const Balance = ({ balance, currency, currencySymbol }: IProps): React.JSX.Element => (
  <div className='balance flex flex-col flex-v-center flex-h-center'>
    <p className='currency text-shadow no-select flex flex-v-center flex-h-center'>
      Main - {currency}
      <span className='material-symbols-outlined'>keyboard_arrow_down</span>
    </p>
    <h1 className='text-shadow no-select flex flex-h-center flex-v-center'>
      <span>{currencySymbol}</span>
      {balance}
    </h1>
  </div>
);

export default Balance;
