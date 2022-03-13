import { useEffect } from "react";
import { useLatest } from "../use-latest";

/**
 * 一个可以处理 setTimeout 计时器函数的 Hook。
 */

const useTimeout: (cb: () => void, delay?: number) => void = (cb, delay) => {

    const fnRef = useLatest(cb)

    useEffect(() => {
        if (typeof delay !== 'number' || delay <= 0) return;

        const timer = setTimeout(() => {
            fnRef.current()
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [delay])

}
export { useTimeout }