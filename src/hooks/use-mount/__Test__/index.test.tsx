import { renderHook } from "@testing-library/react-hooks";
import React, { ReactNode } from 'react';
import { useMount } from "../index";

type WrapperPropsType = {
    step: number;
    children?: ReactNode
}

describe('useMount', () => {

    it('简单组件挂载时执行一次', () => {
        let count = 0;

        const { rerender, result } = renderHook(
            () => useMount(() => {
                count++;
            })
        )

        expect(count).toEqual(1);
    });

    it('组件Props改变不会重复执行', () => {
        let count = 0;

        const { rerender, result } = renderHook(
            () => useMount(() => {
                count++;
            }),
            {
                initialProps: {
                    name: 'csg'
                }
            }
        )

        rerender({
            name: 'csg strong'
        })

        expect(count).toEqual(1);
    })

    it('unmount之后组件rerender会重复执行', () => {
        let count = 0;

        const { rerender, unmount } = renderHook(
            () => useMount(() => {
                count++;
            })
        )
        unmount()
        rerender()
        expect(count).toEqual(2);
    })

    it('父组件Props改变不会重复执行', () => {
        let count = 0;
        const DIV: React.FC<WrapperPropsType> = ({ children, step }) => {
            return (
                <>
                    <div>{children}</div>
                    <div>{step}</div>
                </>
            )
        }

        const { rerender, unmount } = renderHook(
            () => useMount(() => {
                count++;
            }), {
            wrapper: DIV,
            initialProps: {
                step: 1
            }
        }
        )
        rerender({ step: 2 })
        expect(count).toEqual(1);
    })

    it('先挂载再卸载，继续挂载，执行2次', () => {
        let count = 0;
        const { rerender, unmount } = renderHook(
            () => useMount(() => {
                count++;
            })
        )
        unmount()
        renderHook(
            () => useMount(() => {
                count++;
            })
        ).unmount()
        expect(count).toEqual(2);
    })

})
