import { mount } from '@vue/test-utils'
import jestTest from '@/jest/jestTest.vue'

describe('Counter', () => {
  let wrapper
  const createComponent = () => {
    wrapper = mount(jestTest)
  }
  console.debug('jestTest', jestTest)
  console.log('mount', mount)
  console.log('wrapper', wrapper)
  afterEach(() => {
    wrapper.destroy()
  })
  it('show 0 when initialized', () => {
    // Arrange
    createComponent()
    // Assert
    expect(wrapper.text()).toContain('0')
  })
})

describe('First test', () => {
  test('1 == 1', () => {
    expect(1).toBe(1)
  })
})
