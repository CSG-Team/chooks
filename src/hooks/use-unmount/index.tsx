import React from 'react';

/**
 * 卸载时执行的hook
 * @param callback 
 */
export type useUnmountCallbackFun = () => void;
type useUnmountHook = (callback: useUnmountCallbackFun) => void;

const useUnmount: useUnmountHook = (callback) => {

  React.useEffect(() => {
    return () => {
      callback()
    }
  }, [])

}

export { useUnmount };