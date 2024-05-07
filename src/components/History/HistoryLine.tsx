import React from 'react';

import Circle from '../Circle/Circle';

interface IData {
  id: number;
  icon: string;
  name: string;
  time: string;
  color: string;
  amount: number;
  currencySymbol: string;
}

interface IProps {
  item: IData;
}

const HistoryLine = ({ item }: IProps): React.JSX.Element => {
  return (
    <div className='history-line flex flex-h-center flex-v-center'>
      <div className='history-line-icon'>
        <Circle color={item.color} icon={item.icon} />
      </div>
      <div className='history-line-details'>
        <p className='name'>{item.name}</p>
        <p className='time'>{item.time}</p>
      </div>
      <div className='history-line-amount flex flex-end'>
        <p>
          - {item.currencySymbol}
          {item.amount}
        </p>
      </div>
    </div>
  );
};

export default HistoryLine;
