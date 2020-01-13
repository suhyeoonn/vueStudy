import Vue from 'vue'
import VueRouter from 'vue-router'
import History from '../components/History.vue'
import Service from '../components/Service.vue'

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/history', component: History },
        { path: '/service', component: Service }
    ]
})

export default router