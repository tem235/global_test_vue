import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/stores'
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
            layout: 'AuthLayout'
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
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !useAuthStore().token) next({ name: 'Login' })
    else if (to.name == 'Login' && useAuthStore().token) {
        next({ name: 'Main' })
    }
    else next()
})

export default router
