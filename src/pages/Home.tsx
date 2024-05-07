import React from 'react';

const Home = (): React.JSX.Element => {
  return (
    <>
      <div className='bg'></div>
      <div className='content flex flex-col'>
        <div>
          <p>deneme</p>
        </div>
        <div className='center'>
          <p className='text-shadow'>Main - EURO</p>
          <h1 className='text-shadow'>€1325,23</h1>
        </div>
        <div>
          <p>History</p>
        </div>
      </div>
    </>
  );
};

export default Home;
