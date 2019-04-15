import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/loginView.vue'
// import MainView from '../views/mainview.vue'

Vue.use(VueRouter)

const NotFound = { template: '<div>Not Found</div>'}
export default new VueRouter({
    routes: [{
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/main',
            component: () => import('../views/mainView.vue'),
        },
        {
            path: '/sign',
            component: () => import('../views/signUpView.vue'),
        },
        { 
            path: '*', 
            component: NotFound, 
            name:'NotFound' 
        },
    ]
})