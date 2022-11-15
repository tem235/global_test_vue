<template>
    <div class="container">
        <h2>Корзина</h2>
        <div v-if="cartItems.length" class="cart-items">
            <CartCard v-for="(item, index) in cartItems" :item="item" :index="index" />
            <button class="button" @click="createOrder">Оформить заказ</button>
        </div>
        <div v-else class="">
            <h3>Корзина пуста</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
import CartCard from '@/components/CartCard.vue';
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores';

const cartItems = storeToRefs(useCartStore()).getCart
const createOrder = useCartStore().createOrder
</script>
