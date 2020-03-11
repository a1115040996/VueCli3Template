import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '',
        component: Home,
        children: [
            {
                path: '/income',
                name: 'income',
                meta: {
                    title: '标题'
                },
                component: () => import('../views/income/income.vue'),
                children: []
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '*',
        redirect: '/'
    }
]

const router = new VueRouter({
    routes
})

export default router


export const routerConfig = {
    routes: routes,
};