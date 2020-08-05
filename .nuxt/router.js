import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _71851adc = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _3399eab8 = () => interopDefault(import('..\\pages\\contacts\\index.vue' /* webpackChunkName: "pages/contacts/index" */))
const _4949379e = () => interopDefault(import('..\\pages\\projects\\index.vue' /* webpackChunkName: "pages/projects/index" */))
const _6d4c25ab = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _71851adc,
    name: "about"
  }, {
    path: "/contacts",
    component: _3399eab8,
    name: "contacts"
  }, {
    path: "/projects",
    component: _4949379e,
    name: "projects"
  }, {
    path: "/",
    component: _6d4c25ab,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
