import Vue from 'vue'
import VueRouter from 'vue-router'
import History from '../components/History.vue'
import Service from '../components/Service.vue'
import Recruit from '../components/Recruit.vue'
import Vision from '../components/Vision.vue'

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Vision },
        { path: '/history', component: History },
        { path: '/service', component: Service },
        { path: '/recruit', component: Recruit },
        
    ]
})

export default router