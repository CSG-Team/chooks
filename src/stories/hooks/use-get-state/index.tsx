import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { useGetState } from '../../../hooks/use-get-state';


export default () => {
    const [count, setCount, getCount] = useGetState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('interval count', getCount());
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <button onClick={() => setCount((count) => count + 1)}>count: {count}</button>;
};