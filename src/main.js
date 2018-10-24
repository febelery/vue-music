import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {
  faPlay, faForward, faBackward, faHeart, faChevronDown, faChevronUp, faChevronLeft,faRandom, faPause, faRedo, faAlignJustify, faArrowDown,
  faSearch, faWindowClose, faMusic, faUser,faTimes,faTrash
} from '@fortawesome/free-solid-svg-icons'

Vue.config.productionTip = false
import './common/stylus/index.styl'

//使用awesome-icon
library.add(
  faPlay, faForward, faBackward, faHeart, faChevronDown, faChevronUp, faChevronLeft,faPause, faRedo, faRandom, faAlignJustify, faArrowDown,
  faSearch, faWindowClose, faMusic, faUser,faTimes,faTrash
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// 移动端300ms延迟
fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('./common/images/default.png')
})

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
