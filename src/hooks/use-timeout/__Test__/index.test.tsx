import { renderHook, act } from "@testing-library/react-hooks";
import { useState } from "react";
import { useTimeout } from "../index";



const setUp = (cb: () => void, delay: undefined | number) => renderHook(() => useTimeout(cb, delay))

describe("useTimeout", () => {
  // jest 模拟定时器
  jest.useFakeTimers();
  it("应该非undefined", () => {
    expect(useTimeout).toBeDefined();
  });

  it("timeout应该可以运行", () => {

    // jest 模拟一个函数
    const callback = jest.fn();
    setUp(callback, 100)
    // 目前回调暂时不会被调用
    expect(callback).not.toBeCalled();
    // “快进”1s 时间，使得所有定时器回调都被执行
    jest.advanceTimersByTime(1000);
    // 到这里，所有的定时器回调都应该被执行了！
    expect(callback).toBeCalled();
    // 执行1次
    expect(callback).toHaveBeenCalledTimes(1);

  });

});
