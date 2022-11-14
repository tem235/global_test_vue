<template>
    <div class="product-card">
        <img class="product-card__img" :src="product.thumbnailUrl">
        <h3 class="product-card__title">{{ product.name }}</h3>
        <p class="product-card__price">{{ product.defaultDisplayedPriceFormatted }}</p>
        <RouterLink class="product-card__link" :to="`/product/${product.id}`">Купить</RouterLink>
    </div>
</template>

<script setup lang="ts">
import IProduct from '../types/IProduct'
defineProps<{
    product: IProduct
}>()
</script>
