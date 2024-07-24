import React from 'react';

// components
import Saved from '../components/Add/Saved';
import Arrow from '../components/Arrow/Arrow';
import Button from '../components/Form/Button';
import Layout from '../components/Layout/Layout';
import Divider from '../components/Divider/Divider';
import Destination from '../components/Add/Destination';

const Add = (): React.JSX.Element => (
  <Layout>
    <Divider />

    <h1 className='title no-select'>Add money</h1>

    <Saved />

    <Arrow />

    <Destination />

    <Divider />

    <div className='add-buttons flex flex-space-between'>
      <Button type='submit' text='Add money securely' tabIndex={0} />
    </div>

    <Divider />
  </Layout>
);

export default Add;
