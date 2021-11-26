import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { message } from 'antd';
import { useMount } from '../../../hooks/use-mount';

const MyComponent = () => {
  useMount(() => {
    message.info('mount');
  });

  return <div>Hello csg</div>;
};

export default () => {
  const [boolean, setBoolean] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setBoolean(!boolean)}>
        {boolean ? 'unmount' : 'mount'}
      </button>
      {boolean && <MyComponent />}
    </>
  );
};