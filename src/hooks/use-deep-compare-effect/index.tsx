import { useEffect, useRef, DependencyList } from "react";
import isEqual from 'loadsh/isEqual';

const depsEqual = (afterDeps, preDeps) => {
  return isEqual(afterDeps, preDeps)
}
// 用法与 useEffect 一致，但 deps 通过 lodash isEqual 进行深比较。
const useDeepCompareEffect = (effect: React.EffectCallback, deps: React.DependencyList) => {

  const depsRef = useRef<DependencyList>();
  const updateRef = useRef<number>(0);

  // 如果两次依赖不一致，则触发更新
  if (!depsEqual(deps, depsRef.current)) {
    depsRef.current = deps;
    updateRef.current += 1;
  }

  useEffect(effect, [updateRef.current])
}

export { useDeepCompareEffect };
