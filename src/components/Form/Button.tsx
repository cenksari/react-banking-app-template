import React from 'react';

interface IProps {
  type: string;
  text: string;
  tabIndex: number;
}

const Button = ({ type, text, tabIndex }: IProps): React.JSX.Element => {
  return (
    <button tabIndex={tabIndex} type={type === 'submit' ? 'submit' : 'button'} className='button'>
      {text}
    </button>
  );
};

export default Button;
