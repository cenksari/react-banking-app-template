// components
import Header from '../Header/Header';

// interfaces
interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => (
  <>
    <div className='bg' />
    <div className='content flex flex-col'>
      <div className='container'>
        <Header />
        {children}
      </div>
    </div>
  </>
);

export default Layout;
