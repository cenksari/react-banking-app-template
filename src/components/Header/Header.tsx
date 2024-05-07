import React from 'react';

const Header = (): React.JSX.Element => {
  return (
    <header className='flex flex-v-center flex-space-between'>
      <div className='header-profile'>
        <div className='profile-photo' style={{ backgroundImage: `url("images/profile.jpg")` }} />
      </div>
      <div className='header-center'>
        <div className='header-search flex flex-v-center'>
          <span className='material-symbols-outlined no-select'>search</span>
          <input type='text' name='search' id='search' placeholder='Search' />
        </div>
      </div>
      <div className='header-buttons flex flex-v-center flex-end'>
        <button className='header-button flex flex-v-center flex-h-center'>
          <span className='material-symbols-outlined'>equalizer</span>
        </button>
        <button className='header-button flex flex-v-center flex-h-center'>
          <span className='material-symbols-outlined'>credit_card</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
