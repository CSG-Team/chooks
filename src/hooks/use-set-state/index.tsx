/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useCallback } from 'react';

/**
 * 管理 object 类型 state 的 Hooks，用法与 class 组件的 this.setState 基本一致。
 */


type SetStateFun<T> = (data: Partial<T> | ((state: T) => Partial<T>)) => void;
type UseSetStateHook = <T extends Record<string, any>>(initialState: T) => [T, SetStateFun<T>];

const useSetState: UseSetStateHook = <T extends Record<string, any>>(initialState: T) => {

    const [state, setState] = useState(initialState)

    // 如果为函数，需要合并调用后的值
    // 如果非函数，直接合并值

    const _setState: SetStateFun<T> = useCallback((s) => {

        setState((prevState) => ({ ...prevState, ...(typeof s === 'function' ? s(prevState) : s) }));
    }, [])

    return [state, _setState];

}

export { useSetState };