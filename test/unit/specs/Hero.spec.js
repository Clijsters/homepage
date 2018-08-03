import Vue from 'vue'
import Hero from 'src/components/Hero'

describe('Hero.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hero)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hero h1').textContent)
      .to.equal('Software Engineer & Frontend Expert')
  })
})
