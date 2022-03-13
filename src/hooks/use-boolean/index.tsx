import React, { useState } from 'react';

/**
 * 优雅的管理 boolean 状态的 Hook
 * @param callback 
 */
type useBooleanHook = (defaultValue?: boolean,) => any;

const useBoolean: useBooleanHook = (defaultValue) => {

    const [state, setState] = useState(defaultValue)
    const set = (boolean) => {
        setState(boolean)
    }
    const toggle = () => {
        setState(!state)
    }

    const setTrue = () => {
        setState(true)
    }

    const setFalse = () => {
        setState(false)
    }

    return [state, {
        toggle, setTrue, setFalse, set
    }]

}

export { useBoolean };