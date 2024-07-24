import React from 'react';

// components
import Circle from '../Circle/Circle';

// interfaces
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

const HistoryLine = ({ item }: IProps): React.JSX.Element => (
  <div className='history-line flex flex-h-center flex-v-center'>
    <div className='history-line-icon flex flex-1'>
      <Circle color={item.color} icon={item.icon} />
    </div>
    <div className='history-line-details flex flex-col'>
      <span className='name'>{item.name}</span>
      <span className='time'>{item.time}</span>
    </div>
    <div className='history-line-amount flex flex-1 flex-end'>
      <p>
        - {item.currencySymbol}
        {item.amount}
      </p>
    </div>
  </div>
);

export default HistoryLine;
