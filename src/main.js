import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router/index'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.prototype.axios=axios
const store =new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    contIncase(state){
      state.count ++
    }
  }
})
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
