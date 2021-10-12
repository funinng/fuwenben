import Vue from 'vue'
import App from './App.vue'
import {nanoid} from "nanoid";
import router from './router/index'
import axios from 'axios'
import store from './store'
import Vant from 'vant'

import tinymce from 'tinymce'
import VueTinymce from '@packy-tang/vue-tinymce'


import locations from './assets/js/locations'

Vue.config.productionTip = false
Vue.prototype.$tinymce = tinymce // 将全局tinymce对象指向给Vue作用域下
Vue.use(VueTinymce)
Vue.prototype.axios = axios
Vue.prototype.locations = locations
Vue.prototype.nanoid = nanoid
Vue.use(Vant)
import 'vant/lib/index.css';
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
