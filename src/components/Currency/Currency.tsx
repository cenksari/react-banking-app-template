// interfaces
interface IProps {
  aer: string;
  name: string;
  active?: boolean;
  shortName: string;
  children: React.ReactNode;
  onSelect: () => void;
}

const Currency: React.FC<IProps> = ({
  aer,
  name,
  shortName,
  children,
  active = false,
  onSelect,
}) => (
  <div
    tabIndex={0}
    role='button'
    onClick={onSelect}
    onKeyDown={() => {}}
    className='history-line flex flex-h-center flex-v-center pointer'
  >
    <div className='history-line-icon flex flex-1'>
      <div className={`circle-icon flex flex-v-center flex-h-center ${active ? 'blue' : 'gray'}`}>
        {children}
      </div>
    </div>
    <div className='history-line-details flex flex-col'>
      <span className='name'>{name}</span>
      <span className='time'>{shortName}</span>
    </div>
    <div className='history-line-amount flex flex-1 flex-end'>
      <p>{aer}</p>
    </div>
  </div>
);

export default Currency;
