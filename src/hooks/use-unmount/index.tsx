import React from 'react';

/**
 * 卸载时执行的hook
 * @param callback 
 */
type CallbackFun = () => void;
type useUnmountHook = (callback: CallbackFun) => void;

const useUnmount: useUnmountHook = (callback) => {

  React.useEffect(() => {
    return () => {
      callback()
    }
  }, [])

}

export { useUnmount };