import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { message } from 'antd';
import { useUnmount } from '../../../hooks/use-unmount';

const MyComponent = () => {
  useUnmount(() => {
    message.info('unmount');
  });

  return <div>Hello csg</div>;
};

export default () => {
  const [boolean, setBoolean] = useState(true);

  return (
    <>
      <button type="button" onClick={() => setBoolean(!boolean)}>
        {boolean ? 'mount' : 'unmount'}
      </button>
      {!boolean && <MyComponent />}
    </>
  );
};