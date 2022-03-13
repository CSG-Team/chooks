import React, { useState } from 'react';
import { useTimeout } from '../../../hooks/use-timeout';

const Timeout = () => {
  const [state, setState] = useState(1);
  useTimeout(() => {
    setState(state + 1);
  }, 3000);

  return <div>{state}</div>;
};

export default Timeout;