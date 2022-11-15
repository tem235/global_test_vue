<template>
    <header class="header container">
        <nav class="header-nav">
            <router-link to="/"><span class="">{{ title }}</span></router-link>
            <div class="header-nav-actions">
                <router-link to="/cart">
                    <span class="header-cart">
                        <CartIcon />
                        <span v-if="cartItems" class="header-cart__badge ">
                            {{ cartItems }}
                        </span>
                    </span>
                </router-link>
                <DropDown>
                    <template #button>
                        <PersonIcon />
                    </template>
                    <template #menu>
                        <a href="#" @click="useAuthStore().logout">Выход</a>
                    </template>
                </DropDown>

            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore, useCartStore } from '@/stores';
import CartIcon from './icons/CartIcon.vue';
import PersonIcon from './icons/PersonIcon.vue';
import DropDown from './DropDown.vue';
const title = process.env.VUE_APP_TITLE
const cartItems = storeToRefs(useCartStore()).getAllCounter
</script>
