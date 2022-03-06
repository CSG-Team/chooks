import { useRef, useEffect } from "react";


const useUpdateEffect = (cb, deps?: any,) => {
    const isMounted = useRef(false);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
        } else {
            return cb()
        }
    }, deps)

}

export { useUpdateEffect };