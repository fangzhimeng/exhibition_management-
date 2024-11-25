import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DesignerView from '../views/DesignerView.vue'
import Invoicing from '../views/Invoicing.vue'
import data_center from '../views/data_center.vue'
import app from '../views/App.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Invoicing',
    name: 'Invoicing',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Invoicing
  }

  ,
  {
    path: '/designer',
    name: 'designer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:  DesignerView
  }
  ,
  {
    path: '/data_center',
    name: 'data_center',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:  data_center
  }
  ,
  {
    path: '/app',
    name: 'app',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:  app
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
