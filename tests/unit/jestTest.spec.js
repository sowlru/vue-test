import { mount } from '@vue/test-utils'
import jestTest from '@/jest/jestTest.vue'
import { nextTick } from 'vue'

describe('Counter', () => {
  let wrapper

  const createComponent = () => {
    wrapper = mount(jestTest)
  }
  const findPlusButton = () =>
    wrapper.findAll('button').wrappers.find((w) => w.text() === '+')
  // afterEach(() => {
  //   wrapper.destroy()
  // })
  it('show 0 when initialized', () => {
    // Arrange
    createComponent()
    // Assert
    expect(wrapper.text()).toContain('0')
  })
  it('increment by 1 when + button click', async () => {
    // Arrange
    createComponent()
    findPlusButton().trigger('click')
    await nextTick()
    // Assert
    expect(wrapper.text()).toContain('1')
  })
})

describe('First test', () => {
  test('1 == 1', () => {
    expect(1).toBe(1)
  })
})
