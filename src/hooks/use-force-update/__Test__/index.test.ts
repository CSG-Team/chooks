import { renderHook, act } from "@testing-library/react-hooks";
import { useRef, useEffect } from "react";
import { useForceUpdate } from "../index";

describe("useForceUpdate", () => {
  it('多次forceUpdate方法引用不变', () => {
    const hooks = renderHook(() => {
      const update = useForceUpdate()
      return update
    });
    const prevUpdate = hooks.result.current;
    hooks.rerender();
    expect(hooks.result.current).toEqual(prevUpdate);
  });


  it("调用一次则触发一次刷新", () => {
    // 将被挂载的hook
    const useForTesting = () => {
      const forceUpdate = useForceUpdate();
      const renderCountRef = useRef(-1)
      
      useEffect(() => {

        renderCountRef.current = renderCountRef.current + 1
      }, [new Date().getTime()]);

      return {
        renderCountRef, // 这里一定要给ref 否则拿不到新的值
        forceUpdate
      };
    };

    const hook = renderHook(useForTesting);

    const { forceUpdate, renderCountRef } = hook.result.current;

    expect(renderCountRef.current).toBe(0);

    act(forceUpdate);
    expect(renderCountRef.current).toBe(1);

    act(forceUpdate);
    expect(renderCountRef.current).toBe(2);
  });


});
