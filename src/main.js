import Vue from 'vue'
import App from './App.vue'
import {nanoid} from "nanoid";
import router from './router/index'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.axios = axios
Vue.prototype.nanoid = nanoid

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
