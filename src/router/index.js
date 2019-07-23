import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from  '@/pages/city/City'
import Detail from  '@/pages/detail/Detail'
import Map from  '@/pages/detail/components/map'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/map',
      name: 'mao',
      component: Map
    },



  ]
})
