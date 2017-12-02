import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      redirect: {name: 'goods'},
    },
    {
    	path: '/goods',
    	name: 'goods',
    	component: Goods   	
    }
  ]
})
