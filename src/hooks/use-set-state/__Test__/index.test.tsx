/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook, act } from "@testing-library/react-hooks";
import { useSetState } from "../index";

describe("useSetState", () => {
  it("应该非undefined", () => {
    expect(useSetState).toBeDefined();
  });


  // 初始化hooks
  function initRender<T extends object>(initState: T) {
    return renderHook(() => {
      const [state, setState] = useSetState<T>(initState);
      return {
        state,
        setState,
      } as const;
    })
  }


  it("支持初始化值", () => {
    const initState = { name: 'csg', slogan: 'f**k!' }

    const { result } = initRender(initState)

    expect(result.current.state.name).toBe('csg')

    expect(result.current.state.slogan).toBe('f**k!')

  });


  it('支持更新对象', () => {
    const { result } = initRender<{ name?: string; core?: string }>({
      name: 'csg',
    });
    // 要用act
    // 之前使用setTimeout 要配合done函数使用～
    act(() => {
      result.current.setState({ core: 'ze' });
    });
    expect(result.current.state).toEqual({ name: 'csg', core: 'ze' });
  });


  it('支持函数式更新', () => {
    const { result } = initRender<{ name?: string; core?: string }>({
      name: 'csg',
    });

    act(() => {
      result.current.setState(() => ({ core: 'ze' }));
    });
    expect(result.current.state).toEqual({ name: 'csg', core: 'ze' });
  });
});
