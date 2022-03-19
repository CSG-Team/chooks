import { act, renderHook } from '@testing-library/react-hooks';
import { useState } from 'react';
import { useDeepCompareEffect } from '../index'

describe("useDeepCompareEffect", () => {
  it("应该非undefined", () => {
    expect(useDeepCompareEffect).toBeDefined();
  });

  it("会对deps做deep对比没更新的情况", () => {
    const hoook = renderHook(() => {

      const [state, setState] = useState(0)
      const [dep, setDep] = useState({})

      useDeepCompareEffect(() => {
        setState(c => c + 1)
      }, [dep]);

      return { state, setDep }
    })

    expect(hoook.result.current.state).toEqual(1)
    act(() => {
      hoook.result.current.setDep({})
    })
    expect(hoook.result.current.state).toEqual(1)

  });

  it("会对deps做deep对比有更新的情况", () => {
    const hoook = renderHook(() => {

      const [state, setState] = useState(0)
      const [dep, setDep] = useState(1)

      useDeepCompareEffect(() => {
        setState(state + 1)
      }, [dep]);

      return { state, setDep }
    })

    act(() => {
      hoook.result.current.setDep(12)
    })
    expect(hoook.result.current.state).toBe(2)

  });
});