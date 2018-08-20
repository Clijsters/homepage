import Hero from '@/components/Hero.vue'

describe('Hero.vue', () => {
  it('has a mounted hook', () => {
    expect(typeof Hero.mounted).toBe('function')
  })
  it('has a destroy hook', () => {
    expect(typeof Hero.destroy).toBe('function')
  })
})
