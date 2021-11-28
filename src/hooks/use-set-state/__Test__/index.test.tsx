import { renderHook } from "@testing-library/react-hooks";
import { useSetState } from "../index";

type State = {
  hello: string;
  count: number;
  [key: string]: any;
}

describe('useSetState', () => {

  it('应该非undefined', () => {
    expect(useSetState).toBeDefined()
  })

  it('test useSetState', () => {

    const { result, unmount, rerender } = renderHook(() => useSetState<State>({
      hello: '',
      count: 0,
    }))
    const [state, setState] = result.current;
    setState({ hello: 'world' })
    setTimeout(() => {
      expect(state.hello).toBe('world')
    }, 0)

    setState((preState) => preState.count + 1)
    setTimeout(() => {
      expect(state.count).toBe(1)
    }, 0)

    setState({ name: 'csg', hello: 'hello' })
    setTimeout(() => {
      expect(state.name).toBe('csg')
      expect(state.name).toBe('hello')
    }, 0)

  })

})
