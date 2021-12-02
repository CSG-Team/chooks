import React from 'react';

/**
 * 挂载时执行的hook
 * @param callback 
 */
export type useMountCallbackFun = () => void;
type useMountHook = (callback: useMountCallbackFun) => void;

const useMount: useMountHook = (callback) => {

  React.useEffect(() => {
    callback()
  }, [])

}

export { useMount };