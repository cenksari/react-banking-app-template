import React from 'react';

interface IProps {
  name: string;
  type: string;
  value?: string;
  tabIndex: number;
  required?: boolean;
  autoFocus?: boolean;
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
  autoFocus = false,
  autoComplete = false,
  onChange,
}: IProps): React.JSX.Element => {
  return (
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      tabIndex={tabIndex}
      required={required}
      autoFocus={autoFocus}
      placeholder={placeholder}
      autoComplete={autoComplete ? 'on' : 'off'}
      onChange={onChange}
    />
  );
};

export default Input;
