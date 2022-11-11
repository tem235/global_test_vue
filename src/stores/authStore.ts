import { defineStore } from 'pinia';
import router from '@/router';

export const useAuthStore = defineStore({
    id: 'authStore',
    state: () => ({
        token: localStorage.getItem('token') as string
    }),
    getters: {},
    actions: {
        login() {
            this.token = process.env.VUE_APP_TOKEN + ''
            localStorage.setItem('token', this.token)
            router.push('/')
        },
        logout() {
            this.token = ''
            router.push({name: "Login"})
        }
    },
});
