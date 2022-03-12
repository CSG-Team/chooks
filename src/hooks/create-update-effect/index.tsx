import { useRef, useEffect, useLayoutEffect } from "react"

type EffectType = typeof useEffect | typeof useLayoutEffect;

const createUpdateEffect = (effectType: EffectType) => {
  return (cb, deps?: any) => {
    const isMounted = useRef(false)

    effectType(() => {
      return () => {
        isMounted.current = false;
      }
    }, [])

    effectType(() => {
      if (!isMounted.current) {
        isMounted.current = true;
      } else {
        return cb()
      }
    }, deps)
  }
}

export { createUpdateEffect };