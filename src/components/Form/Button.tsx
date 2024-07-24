import React from 'react';

// interfaces
interface IProps {
  type: string;
  text: string;
  tabIndex: number;
  disabled?: boolean;
}

const Button = ({ type, text, tabIndex, disabled = false }: IProps): React.JSX.Element => (
  <button
    tabIndex={tabIndex}
    type={type === 'submit' ? 'submit' : 'button'}
    className={`button ${disabled ? 'disabled' : 'active'}`}
  >
    {text}
  </button>
);

export default Button;
