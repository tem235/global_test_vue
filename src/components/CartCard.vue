<template>
    <div v-if="item" class="cart-card">
        <RouterLink :to="`/product/${item.product.id}`" class="cart-card-info">
            <img class="cart-card__img" :src="item.product.thumbnailUrl">
            <h3 class="cart-card__title">{{ item.product.name }}</h3>
        </RouterLink>
        <div class="cart-card-options">
            <input type="number" v-model="item.count">
            <div v-if="item.product.options" class="" v-for="option in item.product.options">
                <select v-model="item.size">
                    <option v-for="choices in option.choices" :value="choices.text">{{ choices.text }}</option>
                </select>
            </div>
        </div>
        <div class="cart-card-price">
            <h4>Price</h4>
            <p>{{item.product.defaultDisplayedPrice * item.count}}</p>
        </div>
        <div class="cart-card-actions">
            <button @click="deleteItem(index)">Delete</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores';
import ICartItem from '@/types/ICartItem'

defineProps<{
    item: ICartItem,
    index: number
}>()

function deleteItem(index: number) {
    useCartStore().deleteItemInCart(index)
}
</script>
