import { renderHook, act } from "@testing-library/react-hooks";
import { useGetState } from "../index";

describe("useGetState", () => {
  it("应该非undefined", () => {
    expect(useGetState).toBeDefined();
  });

  /**
    * 1. 支持初始值
    * 2. 支持更新
    * 3. 支持获取最新值
    */
  const setup = (initialValue) => renderHook(() => {
    const [state, setState, getState] = useGetState(initialValue);
    return {
      state,
      setState,
      getState
    } as const;
  });

  it("支持初始值", () => {
    const hook = setup({ name: 'csg' })
    expect(hook.result.current.state.name).toEqual('csg')
  });

  it("支持更新", () => {
    const hook = setup(0);
    act(() => {
      hook.result.current.setState(5);
    });
    expect(hook.result.current.state).toEqual(5);
  });

  it("支持获取最新值", () => {
    const hook = setup({ core: 'lqq' })
    act(() => {
      hook.result.current.setState(() => ({ core: 'cjj' }));
    });
    expect(hook.result.current.getState()).toEqual({ core: 'cjj' })
  });

});
