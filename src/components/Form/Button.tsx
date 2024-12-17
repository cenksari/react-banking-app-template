// interfaces
interface IProps {
  type: string;
  text: string;
  tabIndex: number;
  disabled?: boolean;
}

const Button: React.FC<IProps> = ({ type, text, tabIndex, disabled = false }) => (
  <button
    tabIndex={tabIndex}
    type={type === 'submit' ? 'submit' : 'button'}
    className={`button ${disabled ? 'disabled' : 'active'}`}
  >
    {text}
  </button>
);

export default Button;
