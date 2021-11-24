import { renderHook, act } from '@testing-library/react-hooks';
import { useDevDemo } from '../index'

// 测试一下
it('demo testing >>>> ', () => {
  expect(1).toBe(1)
})

// render你的hooks
const setUp = () => renderHook(() => useDevDemo());


describe('useDevDemo', () => {
  it('返回值正确检测', () => {
    const { result } = setUp();

    // result.current就是你这个hooks的返回
    const { orgName, slogan, member } = result.current

    expect(orgName).toBe('csg')

    expect(slogan).toBe('Higher, Faster, Stronger')

    expect(member.length).toBe(4)
    expect(member).toContain('cjj')
    expect(member).toContain('077')
    expect(member).toContain('ze')
    expect(member).toContain('yxnne')


  })
})