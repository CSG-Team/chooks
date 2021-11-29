import React from 'react';

/**
 * 挂载时执行的hook
 * @param callback 
 */
type CallbackFun = () => void;
type useMountHook = (callback: CallbackFun) => void;

const useMount: useMountHook = (callback) => {

  React.useEffect(() => {
    callback()
  }, [])

}

export { useMount };