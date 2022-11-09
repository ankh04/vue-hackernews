import Item from '../Item.vue'
// import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'

/**
 * @jest-environment jsdom
 */
describe('Item.vue', () => {
  test('renders item', () => {
    // // 使用Vue.extend创建构造函数
    // const Ctor = Vue.extend(Item)
    // // 在jsdom的环境中运行
    // const vm = new Ctor().$mount()
    // expect(vm.$el.textContent).toContain('item')
    // // console.log(Item)

    const wrapper = shallowMount(Item)
    debugger
    expect(wrapper.vm.$el.textContent).toContain('item')
  })
})
