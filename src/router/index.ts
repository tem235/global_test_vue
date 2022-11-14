import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/stores'
import Login from '@/views/LoginView.vue'
import Main from '@/views/MainView.vue'
import Product from '@/views/ProductView.vue'
import Category from '@/views/CategoryView.vue'
import Cart from '@/views/CartView.vue'
import ErrorView from '@/views/ErrorView.vue'

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
        path: '/product/:id',
        name: 'Product',
        component: Product,
        meta: {
            layout: 'AppLayoutDefault'
        }
    },
    {
        path: '/category/:id',
        name: 'Category',
        component: Category,
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
    {
        path: '/:pathMatch(.*)*',
        component: ErrorView,
        meta: {
            layout: 'AppLayoutDefault'
        }
    }


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
