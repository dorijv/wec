import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
    {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/live',
    name: 'live',
    component: () => import('../views/LiveView.vue')
  },
  {
    path: '/timetable',
    name: 'timetable',
    component: () => import('../views/TimeTable.vue')
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
    path: '/contacts',
    name: 'contacts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactsView.vue')
  },
  {
    path: '/activities',
    name: 'activities',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ActivitiesView.vue')
  },
  {
    path: '/scenery',
    name: 'scenery',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SceneryView.vue')
  },
  {
    path: '/misc',
    name: 'misc',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MiscView.vue')
  },
  {
    path: '/venue',
    name: 'venue',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VenueView.vue')
  },
  {
    path: '/sponsors',
    name: 'sponsors',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SponsorsView.vue')
  },
  {
    path:'*',
    name:'404'
  }
]

const router = new VueRouter({
  routes
})

export default router
