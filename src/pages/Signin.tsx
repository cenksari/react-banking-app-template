import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

const Signin = (): React.JSX.Element => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    navigate('/home', { replace: true });
  };

  return (
    <div className='flex flex-v-center flex-h-center h-full'>
      <div className='bg'></div>
      <div className='text'>
        <h1 className='text-shadow'>Hello! 👋</h1>
        <p className='text-shadow'>Please sign in to your account or sign up a new account.</p>

        <form method='post' action='/' className='form' noValidate onSubmit={handleSubmit}>
          <div className='form-line'>
            <div className='label-line'>
              <label htmlFor='email' className='text-shadow'>
                Email
              </label>
            </div>
            <input
              required
              autoFocus
              tabIndex={1}
              type='email'
              name='email'
              id='email'
              autoComplete='off'
              placeholder='Please enter your email'
            />
          </div>
          <div className='form-line'>
            <div className='label-line flex flex-h-center flex-space-between'>
              <label htmlFor='password' className='text-shadow'>
                Password
              </label>
              <Link to='/' className='text-shadow'>
                Forgot password?
              </Link>
            </div>
            <input
              required
              tabIndex={2}
              type='password'
              name='password'
              id='password'
              autoComplete='off'
              placeholder='Please enter your password'
            />
          </div>
          <div className='form-line'>
            <button tabIndex={3} type='submit'>
              Sign in
            </button>
          </div>
        </form>

        <div className='links'>
          <a href='/' className='text-shadow'>
            Click here
          </a>
          &nbsp;
          <span className='text-shadow'>if you don&apos;t have an account</span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
