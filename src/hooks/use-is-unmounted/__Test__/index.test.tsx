import { renderHook } from "@testing-library/react-hooks";
import { useIsUnmounted } from "../index";

describe("useIsUnmounted", () => {
  it("应该非undefined", () => {
    expect(useIsUnmounted).toBeDefined();
  });

  it("test useIsUnmounted", () => {
    /**
     * 1. 挂载的时候，current值为false
     * 2. 重新执行的时候，current值为false
     * 3. 卸载的时候,current值为true
     */

    const { result, unmount, rerender } = renderHook(() => useIsUnmounted());

    expect(result.current.current).toBe(false);

    rerender();
    expect(result.current.current).toBe(false);

    unmount();
    expect(result.current.current).toBe(true);
  });
});
