import { renderHook, act } from "@testing-library/react-hooks";
import { useBoolean } from "../index";

describe("useBoolean", () => {
  it("应该非undefined", () => {
    expect(useBoolean).toBeDefined();
  });

  /**
    * 1. 支持初始值
    * 2. 支持更新
    * 3. 支持切换状态，定向改变状态
    */
  const setup = (initialValue: boolean) => renderHook(() => {
    const [state, { toggle, setTrue, setFalse, set }] = useBoolean(initialValue);
    return {
      state,
      toggle,
      setTrue,
      setFalse,
      set
    } as const;
  });

  it("支持初始值", () => {
    const hook = setup(false)
    expect(hook.result.current.state).toEqual(false)
  });

  it("支持更新", () => {
    const hook = setup(true);
    act(() => {
      hook.result.current.set(false);
    });
    expect(hook.result.current.state).toEqual(false);
  });

  it("支持切换状态，定向改变状态", () => {
    const hook = setup(true)
    act(() => {
      hook.result.current.toggle();
    });
    expect(hook.result.current.state).toEqual(false)
    act(() => {
      hook.result.current.setTrue();
    });
    expect(hook.result.current.state).toEqual(true)
    act(() => {
      hook.result.current.setFalse();
    });
    expect(hook.result.current.state).toEqual(false)
  });

});
