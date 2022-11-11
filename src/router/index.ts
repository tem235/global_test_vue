import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
import Login from '@/views/LoginView.vue'
import Main from '@/views/MainView.vue'
import Product from '@/views/ProductView.vue'
import Cart from '@/views/CartView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            layout: 'AppLayoutAuth'
        }
    },
    {
        path: '/',
        name: 'Main',
        component: Main,
        meta: {
            layout: 'AppLayoutDefault'
        }
    },
    {
        path: '/product',
        name: 'Product',
        component: Product,
        meta: {
            layout: 'AppLayoutDefault'
        }
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
        meta: {
            layout: 'AppLayoutDefault'
        }
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
