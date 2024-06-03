import React from 'react';

import Header from '../Header/Header';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps): React.JSX.Element => (
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
