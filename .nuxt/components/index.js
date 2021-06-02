import { wrapFunctional } from './utils'

export { default as GifInfo } from '../../components/GifInfo.vue'
export { default as Header } from '../../components/Header.vue'
export { default as SearchLightbox } from '../../components/SearchLightbox.vue'
export { default as SocialHead } from '../../components/SocialHead.vue'
export { default as UserInfo } from '../../components/UserInfo.vue'

export const LazyGifInfo = import('../../components/GifInfo.vue' /* webpackChunkName: "components/gif-info" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazySearchLightbox = import('../../components/SearchLightbox.vue' /* webpackChunkName: "components/search-lightbox" */).then(c => wrapFunctional(c.default || c))
export const LazySocialHead = import('../../components/SocialHead.vue' /* webpackChunkName: "components/social-head" */).then(c => wrapFunctional(c.default || c))
export const LazyUserInfo = import('../../components/UserInfo.vue' /* webpackChunkName: "components/user-info" */).then(c => wrapFunctional(c.default || c))
