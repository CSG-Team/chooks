import { Dispatch, useState, SetStateAction, useCallback, useEffect, useRef } from 'react';

/**
 * 给React.useState增加一个getter方法，以获取当前的最新值
 * @param callback 
 */

type GetStateAction<S> = () => S;
function useGetState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>, GetStateAction<S>];
function useGetState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>, GetStateAction<S | undefined>];
function useGetState<S>(initialState?: S | (() => S)) {
    const [state, setState] = useState(initialState)
    const stateRef = useRef<S | undefined>(state);
    stateRef.current = state;
    const getState = useCallback<GetStateAction<S | undefined>>(() => stateRef.current, [])
    return [state, setState, getState]
}

export { useGetState };