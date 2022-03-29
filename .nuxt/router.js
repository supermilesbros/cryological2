import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f340b6be = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages/About" */))
const _3102529a = () => interopDefault(import('..\\pages\\Appointment.vue' /* webpackChunkName: "pages/Appointment" */))
const _5d3fd3b8 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _4f806b88 = () => interopDefault(import('..\\pages\\case-studies\\index.vue' /* webpackChunkName: "pages/case-studies/index" */))
const _6f85d4b4 = () => interopDefault(import('..\\pages\\Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _302201ad = () => interopDefault(import('..\\pages\\Cybersecurity.vue' /* webpackChunkName: "pages/Cybersecurity" */))
const _4bc04994 = () => interopDefault(import('..\\pages\\IT-Services.vue' /* webpackChunkName: "pages/IT-Services" */))
const _3c257458 = () => interopDefault(import('..\\pages\\IT-Solutions.vue' /* webpackChunkName: "pages/IT-Solutions" */))
const _1966c93e = () => interopDefault(import('..\\pages\\Leadership.vue' /* webpackChunkName: "pages/Leadership" */))
const _3f7180af = () => interopDefault(import('..\\pages\\Processing.vue' /* webpackChunkName: "pages/Processing" */))
const _57a3f74a = () => interopDefault(import('..\\pages\\Resolutions.vue' /* webpackChunkName: "pages/Resolutions" */))
const _0bb5b66e = () => interopDefault(import('..\\pages\\Service.vue' /* webpackChunkName: "pages/Service" */))
const _92a64d96 = () => interopDefault(import('..\\pages\\blog\\blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _3264b248 = () => interopDefault(import('..\\pages\\element\\accordion.vue' /* webpackChunkName: "pages/element/accordion" */))
const _1bac4e2a = () => interopDefault(import('..\\pages\\element\\box-icon.vue' /* webpackChunkName: "pages/element/box-icon" */))
const _743a3359 = () => interopDefault(import('..\\pages\\element\\box-image.vue' /* webpackChunkName: "pages/element/box-image" */))
const _d1130272 = () => interopDefault(import('..\\pages\\element\\box-large-image.vue' /* webpackChunkName: "pages/element/box-large-image" */))
const _d0a96c6e = () => interopDefault(import('..\\pages\\element\\call-to-action.vue' /* webpackChunkName: "pages/element/call-to-action" */))
const _af8484b2 = () => interopDefault(import('..\\pages\\element\\counters.vue' /* webpackChunkName: "pages/element/counters" */))
const _3975b6e7 = () => interopDefault(import('..\\pages\\element\\gradation.vue' /* webpackChunkName: "pages/element/gradation" */))
const _3ab783b6 = () => interopDefault(import('..\\pages\\element\\teams.vue' /* webpackChunkName: "pages/element/teams" */))
const _60ad1648 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _0f19a8b8 = () => interopDefault(import('..\\pages\\case-studies\\_id.vue' /* webpackChunkName: "pages/case-studies/_id" */))
const _0f2e8e31 = () => interopDefault(import('..\\pages\\service\\_slug.vue' /* webpackChunkName: "pages/service/_slug" */))
const _2ea55f86 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active-link',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _f340b6be,
    name: "About"
  }, {
    path: "/Appointment",
    component: _3102529a,
    name: "Appointment"
  }, {
    path: "/blog",
    component: _5d3fd3b8,
    name: "blog"
  }, {
    path: "/case-studies",
    component: _4f806b88,
    name: "case-studies"
  }, {
    path: "/Contact",
    component: _6f85d4b4,
    name: "Contact"
  }, {
    path: "/Cybersecurity",
    component: _302201ad,
    name: "Cybersecurity"
  }, {
    path: "/IT-Services",
    component: _4bc04994,
    name: "IT-Services"
  }, {
    path: "/IT-Solutions",
    component: _3c257458,
    name: "IT-Solutions"
  }, {
    path: "/Leadership",
    component: _1966c93e,
    name: "Leadership"
  }, {
    path: "/Processing",
    component: _3f7180af,
    name: "Processing"
  }, {
    path: "/Resolutions",
    component: _57a3f74a,
    name: "Resolutions"
  }, {
    path: "/Service",
    component: _0bb5b66e,
    name: "Service"
  }, {
    path: "/blog/blog-details",
    component: _92a64d96,
    name: "blog-blog-details"
  }, {
    path: "/element/accordion",
    component: _3264b248,
    name: "element-accordion"
  }, {
    path: "/element/box-icon",
    component: _1bac4e2a,
    name: "element-box-icon"
  }, {
    path: "/element/box-image",
    component: _743a3359,
    name: "element-box-image"
  }, {
    path: "/element/box-large-image",
    component: _d1130272,
    name: "element-box-large-image"
  }, {
    path: "/element/call-to-action",
    component: _d0a96c6e,
    name: "element-call-to-action"
  }, {
    path: "/element/counters",
    component: _af8484b2,
    name: "element-counters"
  }, {
    path: "/element/gradation",
    component: _3975b6e7,
    name: "element-gradation"
  }, {
    path: "/element/teams",
    component: _3ab783b6,
    name: "element-teams"
  }, {
    path: "/blog/:slug",
    component: _60ad1648,
    name: "blog-slug"
  }, {
    path: "/case-studies/:id?",
    component: _0f19a8b8,
    name: "case-studies-id"
  }, {
    path: "/service/:slug?",
    component: _0f2e8e31,
    name: "service-slug"
  }, {
    path: "/",
    component: _2ea55f86,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
