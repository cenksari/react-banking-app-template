import React from 'react';

import { Link } from 'react-router-dom';

const Header = (): React.JSX.Element => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <header className='flex flex-v-center flex-space-between'>
      <div className='header-profile flex flex-1'>
        <Link to='/profile'>
          <div className='profile-photo' style={{ backgroundImage: 'url("images/profile.jpg")' }} />
        </Link>
      </div>
      <div className='header-center'>
        <div className='header-search flex flex-v-center'>
          <span
            className='material-symbols-outlined no-select'
            onClick={() => {
              inputRef.current?.focus();
            }}
          >
            search
          </span>
          <input ref={inputRef} type='text' name='search' id='search' placeholder='Search' />
        </div>
      </div>
      <div className='header-buttons flex flex-1 flex-v-center flex-end'>
        <Link to='/transactions' className='header-button flex flex-v-center flex-h-center'>
          <span className='material-symbols-outlined'>equalizer</span>
        </Link>
        <Link to='/cards' className='header-button flex flex-v-center flex-h-center'>
          <span className='material-symbols-outlined'>credit_card</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
