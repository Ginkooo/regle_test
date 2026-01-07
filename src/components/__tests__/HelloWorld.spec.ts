import { describe, it, expect } from 'vitest'

import { flushPromises, mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import App from '../../App.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })

  it('app has regle', async () => {
    const wrapper = mount(App, { props: { msg: 'Hello Vitest' } })
    await wrapper.vm.$nextTick()
    await flushPromises()
    const elem = wrapper.find('#asdf')
    expect(elem.text()).toBe('collected: [{foo: bar}]')
  })
})
