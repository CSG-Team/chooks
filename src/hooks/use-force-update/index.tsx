import { useState, useCallback } from 'react'

/**
 * 暴露一个方法可以出发重新渲染
 */
export function useForceUpdate() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [, setState] = useState<any>()

  const forceUpdate = useCallback(() => {
    setState({})
  } , [])

  return forceUpdate
}