import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  GifInfo: () => import('../../components/GifInfo.vue' /* webpackChunkName: "components/gif-info" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  SearchLightbox: () => import('../../components/SearchLightbox.vue' /* webpackChunkName: "components/search-lightbox" */).then(c => wrapFunctional(c.default || c)),
  SocialHead: () => import('../../components/SocialHead.vue' /* webpackChunkName: "components/social-head" */).then(c => wrapFunctional(c.default || c)),
  UserInfo: () => import('../../components/UserInfo.vue' /* webpackChunkName: "components/user-info" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}