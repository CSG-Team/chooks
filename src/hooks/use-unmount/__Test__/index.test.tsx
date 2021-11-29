import { renderHook } from "@testing-library/react-hooks";
import React from 'react';
import { useUnmount } from "../index";

describe('useUnmount', () => {

    it('应该非undefined', () => {
        expect(useUnmount).toBeDefined()
    })

    it('test unmount', () => {

        /**
         * 1. 卸载的时候执行一次
         * 2. rerender 时不会重新执行
         * 2. 卸载又挂载再卸载执行两次
         */

        // jest.fn(): jest 最简单的mock函数，如果不定义参数则返回undefined
        const fn = jest.fn();
        const hook = renderHook(() => useUnmount(fn))
        hook.unmount()
        expect(fn).toBeCalledTimes(1)
        hook.rerender()
        expect(fn).toBeCalledTimes(1)
        renderHook(() => useUnmount(fn)).unmount()
        expect(fn).toBeCalledTimes(2)
    })

})
