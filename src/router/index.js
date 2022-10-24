import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
    path: '/',
    name: 'home',
    component: () => import ('../views/Home.vue')
    },
    {
    path: '/auth',
    name: 'auth',
    component: () => import ('../layout/Auth.vue'),
    children:[
        {
            path: '/login',
            name:  'login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/signin',
            name:  'signin',
            component: () => import('../views/Signin.vue')
        }
    ]
    }
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),//para que desde githubpages sepa que tiene que empezar desde el repositorio 
    routes,
})

export default router;