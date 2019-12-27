import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index/Index'
import Search from '@/view/search/Search'
import Detail from '@/view/detail/Detail'
import Order from '@/view/order/Order'
import MyOrder from '@/view/order/MyOrder'
import Home from '@/view/home/Home'
import Address from '@/view/address/Address'
import NewAddress from '@/view/address/NewAddress'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/search',
      name: 'Search',
      component: Search
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }, {
      path: '/order',
      name: 'Order',
      component: Order
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/order/address',
      name: 'Address',
      component: Address
    }, {
      path: '/order/address/newaddress',
      name: 'NewAddress',
      component: NewAddress
    }, {
      path: '/myorder',
      name: 'MyOrder',
      component: MyOrder
    }
  ]
})
