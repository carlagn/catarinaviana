import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _51af733c = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _2520f974 = () => interopDefault(import('../pages/contacts/index.vue' /* webpackChunkName: "pages/contacts/index" */))
const _0e04264a = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _035cade4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _51af733c,
    name: "about"
  }, {
    path: "/contacts",
    component: _2520f974,
    name: "contacts"
  }, {
    path: "/projects",
    component: _0e04264a,
    name: "projects"
  }, {
    path: "/",
    component: _035cade4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
