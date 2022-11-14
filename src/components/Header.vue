<template>
    <header class="header">
        <nav>
            <router-link to="/">{{ title }}</router-link>
            <span>
                <router-link to="/cart">Корзина</router-link>
                <a href="#" @click="useAuthStore().logout">Выход</a>
            </span>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores';
const title = process.env.VUE_APP_TITLE
</script>
