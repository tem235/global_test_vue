<template>
    <div class="product-card">
        <img class="product-card__img" :src="product.thumbnailUrl">
        <p class="product-card__title text--lg">{{ product.name }}</p>
        <p class="product-card__price bold">{{ product.defaultDisplayedPriceFormatted }}</p>
        <RouterLink class="button button--full product-card__link " :to="`/product/${product.id}`">Купить</RouterLink>
    </div>
</template>

<script setup lang="ts">
import IProduct from '../types/IProduct'
defineProps<{
    product: IProduct
}>()
</script>
