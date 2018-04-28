import Vue from 'vue'
import Card from '@/components/Card'

describe('Card.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Card)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.card h1').textContent).toEqual(
      'Card'
    )
  })
})
