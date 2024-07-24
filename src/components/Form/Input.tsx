import React from 'react';

// interfaces
interface IProps {
  name: string;
  type: string;
  value?: string;
  tabIndex: number;
  required?: boolean;
  placeholder: string;
  autoComplete?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  type,
  value,
  tabIndex,
  placeholder,
  required = false,
  autoComplete = false,
  onChange,
}: IProps): React.JSX.Element => (
  <input
    id={name}
    name={name}
    type={type}
    value={value}
    tabIndex={tabIndex}
    required={required}
    placeholder={placeholder}
    autoComplete={autoComplete ? 'on' : 'off'}
    onChange={onChange}
    className='input'
  />
);

export default Input;
