import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      redirect: Goods,
    },
    {
    	path: '/goods',
    	name: 'name',
    	component: Goods   	
    }
  ]
})
