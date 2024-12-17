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

const Input: React.FC<IProps> = ({
  name,
  type,
  value,
  tabIndex,
  placeholder,
  required = false,
  autoComplete = false,
  onChange,
}) => (
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
