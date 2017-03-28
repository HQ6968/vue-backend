import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Table from '@/components/Table'
import MForm from '@/components/MForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/form',
      name: 'form',
      component: MForm
    }
  ]
})
