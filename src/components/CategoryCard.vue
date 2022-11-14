<template>
    <RouterLink class="category-card" :to="`/category/${category.id}`">
        <img class="category-card__img" :src="category.thumbnailUrl">
        <h3 class="category-card__title">{{ category.name }}</h3>
    </RouterLink>
</template>

<script setup lang="ts">
import ICategory from '@/types/ICategory';

defineProps<{
    category: ICategory
}>()
</script>
