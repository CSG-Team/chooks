import { renderHook, act } from "@testing-library/react-hooks";
import { useSafeState } from "../index";

describe("useSafeState", () => {
  it("应该非undefined", () => {
    expect(useSafeState).toBeDefined();
  });

  /**
    * 1. 支持初始值
    * 2. 支持更新
    * 3. 组件卸载后，组件内异步回调的setState不再执行
    */
  const setup = (initialValue) => renderHook(() => {
    const [state, setState] = useSafeState(initialValue);
    return {
      state,
      setState,
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

  it("组件卸载后，组件内异步回调的setState不再执行", () => {
    const hook = setup({ core: 'lqq' })
    hook.unmount()
    act(() => {
      hook.result.current.setState(() => ({ core: 'cjj' }));
    });
    expect(hook.result.current.state.core).toEqual('lqq')
  });
});
