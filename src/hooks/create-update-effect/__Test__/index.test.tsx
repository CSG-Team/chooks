import { useEffect, useLayoutEffect } from "react";
import { renderHook } from "@testing-library/react-hooks";
import { createUpdateEffect } from "../index";



describe('createUpdateEffect', () => {
  it('should be defined', () => {
    expect(createUpdateEffect).toBeDefined();
  });
  it('测试传入useEffect', async () => {
    const effect = createUpdateEffect(useEffect)
    let mountedState = 1;
    const hook = renderHook(() =>
      effect(() => {
        mountedState = 2;
      }),
    );
    expect(mountedState).toEqual(1);
    hook.rerender();
    expect(mountedState).toEqual(2);
  });
  it('测试传入useLayoutEffect', () => {
    const effect = createUpdateEffect(useLayoutEffect)
    let mountedState = 1;
    const hook = renderHook(() =>
      effect(() => {
        mountedState = 2;
      }),
    );
    expect(mountedState).toEqual(1);
    hook.rerender();
    expect(mountedState).toEqual(2);
  });
});
