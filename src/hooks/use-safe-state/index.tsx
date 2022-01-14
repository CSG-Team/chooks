import { Dispatch, useState, SetStateAction, useCallback } from 'react';
import { useIsUnmounted } from '../../index'

/**
 * 卸载时执行的hook
 * @param callback 
 */

function useSafeState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
function useSafeState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
function useSafeState<S>(initialState?: S | (() => S)) {

    const isUnmounted = useIsUnmounted()

    const [state, setState] = useState(initialState)

    const setCurrentState = useCallback(currentState => {

        if (isUnmounted.current) return;

        setState(currentState)

    }, [])

    return [state, setCurrentState]

}

export { useSafeState };