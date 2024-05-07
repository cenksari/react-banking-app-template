import React from 'react';

const Actions = (): React.JSX.Element => {
  return (
    <div className='actions flex flex-v-center flex-h-center'>
      <div className='circle flex flex-col flex-v-center flex-h-center'>
        <button type='button' className='flex flex-v-center flex-h-center'>
          <span className='material-symbols-outlined'>add</span>
        </button>
        <span className='text-shadow'>Add money</span>
      </div>
      <div className='circle flex flex-col flex-v-center flex-h-center'>
        <button type='button' className='flex flex-v-center flex-h-center'>
          <span className='material-symbols-outlined'>sync</span>
        </button>
        <span className='text-shadow'>Exchange</span>
      </div>
      <div className='circle flex flex-col flex-v-center flex-h-center'>
        <button type='button' className='flex flex-v-center flex-h-center'>
          <span className='material-symbols-outlined'>page_info</span>
        </button>
        <span className='text-shadow'>Details</span>
      </div>
      <div className='circle flex flex-col flex-v-center flex-h-center'>
        <button type='button' className='flex flex-v-center flex-h-center'>
          <span className='material-symbols-outlined'>more_horiz</span>
        </button>
        <span className='text-shadow'>More</span>
      </div>
    </div>
  );
};

export default Actions;
