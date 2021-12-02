import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { message } from 'antd';
import { useIsUnmounted } from '../../../hooks/use-is-unmounted';

const MyComponent = () => {
  const unmountedRef = useIsUnmounted();
  useEffect(() => {
    setTimeout(() => {
      if (!unmountedRef.current) {
        message.info('component is alive');
      }
    }, 3000);
  }, []);

  return <p>Hello csg!</p>;
};

export default () => {
  const [boolean, setBoolean] = useState(true);

  return (
    <>
      <button type="button" onClick={() => setBoolean(!boolean)}>
        {boolean ? 'unmount' : 'mount'}
      </button>
      {boolean && <MyComponent />}
    </>
  );
};