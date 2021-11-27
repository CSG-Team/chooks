import { useRef, RefObject, useEffect } from 'react';

/**
 * 获取当前组件是否已经卸载的 Hook
 */
type useUnmountedRefHook = () => RefObject<boolean>;

const useUnmountedRef: useUnmountedRefHook = () => {

  const ref = useRef(false)

  useEffect(() => {

    return () => {
      ref.current = true;
    }

  }, [])

  return ref;

}

export { useUnmountedRef };