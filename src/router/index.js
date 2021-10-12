import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import About from '../views/About.vue'
import Home from '../views/Home'
import aa from "@/views/aa";
const routes = [{
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/aa',
        name: 'aa',
        component: aa
    },
]
const router = new VueRouter({
    routes
})
export default router
