import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import SkillChart from 'components/SkillChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/skills',
      name: 'Skills',
      component: SkillChart
    }
  ]
})
