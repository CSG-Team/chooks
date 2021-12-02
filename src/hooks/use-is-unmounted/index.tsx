import { useRef, RefObject, useEffect } from 'react';

/**
 * 获取当前组件是否已经卸载的 Hook
 * 如果已经卸载了返回true
 */
type useIsUnmountedHook = () => RefObject<boolean>;

const useIsUnmounted: useIsUnmountedHook = () => {

  const ref = useRef(false)

  useEffect(() => {

    return () => {
      ref.current = true;
    }

  }, [])

  return ref;

}

export { useIsUnmounted };