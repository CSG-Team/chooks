import { renderHook, act, RenderHookResult } from "@testing-library/react-hooks";
import { useState } from "react";
import { useMemoizedFn } from "../index";


/**
 *改变useMemoizedFn 中使用的state，测试返回的函数引用是否改变
 * @returns 
 */

const useTest = () => {
  const [state, setState] = useState(0)

  const add = () => {
    setState((c) => c + 1)
  }
  const memoizeFn = useMemoizedFn(() => state)

  return { add, memoizeFn }
}

let result: RenderHookResult<[], ReturnType<typeof useTest>>;

describe("useMemoizedFn", () => {
  it("应该非undefined", () => {
    expect(useMemoizedFn).toBeDefined();
  });

  it("依赖变化时，函数地址不会变化", () => {

    act(() => {
      result = renderHook(() => useTest())
    })
    expect(result.result.current.memoizeFn()).toEqual(0)
    const preRef = result.result.current.memoizeFn;
    act(() => {
      result.result.current.add()
    })

    const afterRef = result.result.current.memoizeFn;
    expect(preRef).toEqual(afterRef)
    expect(afterRef()).toEqual(1)
  });
});
