import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
    path: '/',
    name: 'home',
    component: () => import ('../views/Home.vue')
    },
    {
    path: '/login',
    name: 'login',
    component: () => import ('../views/Login.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),//para que desde githubpages sepa que tiene que empezar desde el repositorio 
    routes
})

export default router;