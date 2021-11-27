import { renderHook } from "@testing-library/react-hooks";
import { useUnmountedRef } from "../index";

describe('useUnmountedRef', () => {

    it('应该非undefined', () => {
        expect(useUnmountedRef).toBeDefined()
    })

    it('test useUnmountedRef', () => {

        /**
         * 1. 挂载的时候，current值为false
         * 2. 重新执行的时候，current值为false
         * 3. 卸载的时候,current值为true
         */

        const { result, unmount, rerender } = renderHook(() => useUnmountedRef())

        expect(result.current.current).toEqual(false)
        rerender()
        expect(result.current.current).toEqual(false)
        unmount()
        expect(result.current.current).toEqual(true)
    })

})
