import Vue from 'vue'
import Weather from '@/components/Weather'

describe('Weather.vue', () => {
  it('should render the logo', () => {
    const Constructor = Vue.extend(Weather)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.weather__logo img').alt).toEqual('Weather Logo')
  })
  it('should render three cards', () => {
    const Constructor = Vue.extend(Weather)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.weather__container').children.length).toEqual(3)
  })
})
