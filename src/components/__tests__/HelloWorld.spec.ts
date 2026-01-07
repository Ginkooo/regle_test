import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import App from '../../App.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })

  it('app has regle', () => {
    const wrapper = mount(App, { props: { msg: 'Hello Vitest' } })
    const elem = wrapper.find('#asdf')
    expect(elem.text()).toBe('collected: [{foo: bar}]')
  })
})
