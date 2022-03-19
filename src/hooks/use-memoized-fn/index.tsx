import { useRef, useMemo } from "react";

type Fn = (...args: any[]) => any;

function useMemoizedFn<T extends Fn>(fn: T) {
    const fnRef = useRef<T>(fn)
    const memoRef = useRef<any>()


    fnRef.current = useMemo(() => fn, [fn])

    if (!memoRef.current) {
        memoRef.current = function (...args) {
            return fnRef.current.apply(this, args)
        }
    }
    return memoRef.current;

}

export { useMemoizedFn };