import React from 'react';

import { Link } from 'react-router-dom';

// components
import Layout from '../components/Layout/Layout';
import Divider from '../components/Divider/Divider';

const Profile = (): React.JSX.Element => (
  <Layout>
    <Divider />

    <h1 className='title'>Profile</h1>

    <div className='account-photo' style={{ backgroundImage: `url("images/profile.jpg")` }} />

    <div className='center'>
      <h2>Cenk SARI</h2>
      <p className='flex flex-v-center flex-h-center'>
        @cenksari &nbsp;
        <span className='material-symbols-outlined'>qr_code</span>
      </p>
    </div>

    <Divider />

    <div className='account'>
      <Link to='/profile' className='flex flex-v-center'>
        <span className='material-symbols-outlined'>support</span>
        Help
      </Link>
      <Link to='/profile' className='flex flex-v-center'>
        <span className='material-symbols-outlined'>account_circle</span>
        Account
      </Link>
      <Link to='/profile' className='flex flex-v-center'>
        <span className='material-symbols-outlined'>school</span>
        Learn
      </Link>
      <Link to='/profile' className='flex flex-v-center flex-space-between'>
        <div className='flex flex-v-center flex-h-center'>
          <span className='material-symbols-outlined'>inbox</span>
          Inbox
        </div>
        <span className='notification flex flex-v-center flex-h-center'>4</span>
      </Link>
    </div>

    <Divider />

    <div className='account'>
      <Link to='/profile' className='flex flex-v-center'>
        <span className='material-symbols-outlined'>verified_user</span>
        Security &amp; privacy
      </Link>
      <Link to='/profile' className='flex flex-v-center'>
        <span className='material-symbols-outlined'>notifications</span>
        Notification settings
      </Link>
      <Link to='/profile' className='flex flex-v-center'>
        <span className='material-symbols-outlined'>contrast</span>
        Appearance
      </Link>
      <Link to='/profile' className='flex flex-v-center'>
        <span className='material-symbols-outlined'>grade</span>
        New features
      </Link>
    </div>

    <Divider />

    <div className='account'>
      <Link to='/profile' className='flex flex-v-center'>
        <span className='material-symbols-outlined'>token</span>
        About us
      </Link>
      <Link to='/profile' className='flex flex-v-center'>
        <span className='material-symbols-outlined'>power_settings_new</span>
        Sign out
      </Link>
    </div>

    <Divider />

    <footer className='center no-select'>
      v.1.0.12
      <br />
      Banking Ltd.
    </footer>

    <Divider />
  </Layout>
);

export default Profile;
