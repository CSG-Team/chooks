import { useState, useCallback } from 'react'

/**
 * 暴露一个方法可以出发重新渲染
 */
export function useForceUpdate() {
  const [, setState] = useState<any>()

  const forceUpdate = useCallback(() => {
    setState({})
  } , [])

  return forceUpdate
}