import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _78bb6e71 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _8a051bd0 = () => interopDefault(import('..\\pages\\course\\index.vue' /* webpackChunkName: "pages/course/index" */))
const _176e8aca = () => interopDefault(import('..\\pages\\living\\index.vue' /* webpackChunkName: "pages/living/index" */))
const _3befd8aa = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _ab00f01c = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _6dd674cb = () => interopDefault(import('..\\pages\\resetPassword.vue' /* webpackChunkName: "pages/resetPassword" */))
const _0d94c4bf = () => interopDefault(import('..\\pages\\teacher\\index.vue' /* webpackChunkName: "pages/teacher/index" */))
const _29ed6697 = () => interopDefault(import('..\\pages\\ucenter\\index.vue' /* webpackChunkName: "pages/ucenter/index" */))
const _04d5ce6c = () => interopDefault(import('..\\pages\\ucenter\\banwo.vue' /* webpackChunkName: "pages/ucenter/banwo" */))
const _1266ecf6 = () => interopDefault(import('..\\pages\\ucenter\\fenxi.vue' /* webpackChunkName: "pages/ucenter/fenxi" */))
const _c1c8ddde = () => interopDefault(import('..\\pages\\ucenter\\guanzhu.vue' /* webpackChunkName: "pages/ucenter/guanzhu" */))
const _ab7cbc3c = () => interopDefault(import('..\\pages\\ucenter\\index_ucenter.vue' /* webpackChunkName: "pages/ucenter/index_ucenter" */))
const _057c13e6 = () => interopDefault(import('..\\pages\\ucenter\\jianghu.vue' /* webpackChunkName: "pages/ucenter/jianghu" */))
const _19ee0944 = () => interopDefault(import('..\\pages\\ucenter\\kecheng.vue' /* webpackChunkName: "pages/ucenter/kecheng" */))
const _68cf1a54 = () => interopDefault(import('..\\pages\\ucenter\\shezhi.vue' /* webpackChunkName: "pages/ucenter/shezhi" */))
const _314ce7ae = () => interopDefault(import('..\\pages\\ucenter\\shuoshuo.vue' /* webpackChunkName: "pages/ucenter/shuoshuo" */))
const _58845919 = () => interopDefault(import('..\\pages\\blog\\_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _fa1dcb00 = () => interopDefault(import('..\\pages\\course\\_id.vue' /* webpackChunkName: "pages/course/_id" */))
const _09d4b7b2 = () => interopDefault(import('..\\pages\\living\\_id.vue' /* webpackChunkName: "pages/living/_id" */))
const _7661ba02 = () => interopDefault(import('..\\pages\\orders\\_oid.vue' /* webpackChunkName: "pages/orders/_oid" */))
const _05cbad39 = () => interopDefault(import('..\\pages\\other\\_id.vue' /* webpackChunkName: "pages/other/_id" */))
const _1bc12e35 = () => interopDefault(import('..\\pages\\pay\\_pid.vue' /* webpackChunkName: "pages/pay/_pid" */))
const _01412ec2 = () => interopDefault(import('..\\pages\\player\\_vid.vue' /* webpackChunkName: "pages/player/_vid" */))
const _20baeae7 = () => interopDefault(import('..\\pages\\teacher\\_id.vue' /* webpackChunkName: "pages/teacher/_id" */))
const _72483593 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _78bb6e71,
    name: "blog"
  }, {
    path: "/course",
    component: _8a051bd0,
    name: "course"
  }, {
    path: "/living",
    component: _176e8aca,
    name: "living"
  }, {
    path: "/login",
    component: _3befd8aa,
    name: "login"
  }, {
    path: "/register",
    component: _ab00f01c,
    name: "register"
  }, {
    path: "/resetPassword",
    component: _6dd674cb,
    name: "resetPassword"
  }, {
    path: "/teacher",
    component: _0d94c4bf,
    name: "teacher"
  }, {
    path: "/ucenter",
    component: _29ed6697,
    name: "ucenter"
  }, {
    path: "/ucenter/banwo",
    component: _04d5ce6c,
    name: "ucenter-banwo"
  }, {
    path: "/ucenter/fenxi",
    component: _1266ecf6,
    name: "ucenter-fenxi"
  }, {
    path: "/ucenter/guanzhu",
    component: _c1c8ddde,
    name: "ucenter-guanzhu"
  }, {
    path: "/ucenter/index_ucenter",
    component: _ab7cbc3c,
    name: "ucenter-index_ucenter"
  }, {
    path: "/ucenter/jianghu",
    component: _057c13e6,
    name: "ucenter-jianghu"
  }, {
    path: "/ucenter/kecheng",
    component: _19ee0944,
    name: "ucenter-kecheng"
  }, {
    path: "/ucenter/shezhi",
    component: _68cf1a54,
    name: "ucenter-shezhi"
  }, {
    path: "/ucenter/shuoshuo",
    component: _314ce7ae,
    name: "ucenter-shuoshuo"
  }, {
    path: "/blog/:id",
    component: _58845919,
    name: "blog-id"
  }, {
    path: "/course/:id",
    component: _fa1dcb00,
    name: "course-id"
  }, {
    path: "/living/:id",
    component: _09d4b7b2,
    name: "living-id"
  }, {
    path: "/orders/:oid?",
    component: _7661ba02,
    name: "orders-oid"
  }, {
    path: "/other/:id?",
    component: _05cbad39,
    name: "other-id"
  }, {
    path: "/pay/:pid?",
    component: _1bc12e35,
    name: "pay-pid"
  }, {
    path: "/player/:vid?",
    component: _01412ec2,
    name: "player-vid"
  }, {
    path: "/teacher/:id",
    component: _20baeae7,
    name: "teacher-id"
  }, {
    path: "/",
    component: _72483593,
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
