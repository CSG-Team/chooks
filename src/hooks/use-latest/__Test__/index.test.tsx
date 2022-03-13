import { renderHook } from "@testing-library/react-hooks";
import { useLatest } from "../index";


const setUp = val => {
  return renderHook((state) => useLatest(state), { initialProps: val })
}
describe("useLatest", () => {
  it("应该非undefined", () => {
    expect(useLatest).toBeDefined();
  });

  it("test base type value", () => {
    /**
     * 1. 费引用类型值正常输出
     */

    const { result, unmount, rerender } = setUp(0);

    expect(result.current.current).toBe(0);

    rerender(1);
    expect(result.current.current).toBe(1);

    rerender(2);
    expect(result.current.current).toBe(2);
  });

  it("test ref type value", () => {
    /**
     * 2. 引用类型值也正常输出
     */

    const { result, unmount, rerender } = setUp({});

    expect(result.current.current).toEqual({});

    rerender([]);
    expect(result.current.current).toEqual([]);
  });
});
