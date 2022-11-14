<template>
    <h1>Корзина</h1>
    <div class="cart-items">
        <CartCard v-for="(item, index) in cartItems" :item="item" :index="index" />
    </div>
    <div class="">
        <button @click="createOrder">Оформить заказ</button>
    </div>
</template>

<script setup lang="ts">
import CartCard from '@/components/CartCard.vue';
import { useCartStore } from '@/stores';

const cartItems = useCartStore().getCart
const createOrder = useCartStore().createOrder
</script>
