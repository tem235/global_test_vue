<template>
    <div class="categories">
        <CategoryCard v-for="category in categories" :category="category" :key="category.id" />
    </div>
    <div class="products">
        <ProductCard v-for="product in products" :product="product" :key="product.id" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getProducts } from '../services/productsApiService'
import { getCategories } from '../services/categoriesApiService'
import ProductCard from '../components/ProductCard.vue'
import CategoryCard from '@/components/CategoryCard.vue'
import IProduct from '@/types/IProduct'
import ICategory from '@/types/ICategory'

export default defineComponent({
    components: { ProductCard, CategoryCard },
    data() {
        return {
            products: <IProduct[]>[],
            categories: <ICategory[]>[]
        }
    },
    mounted() {
        getProducts().then((res: IProduct[]) => {
            this.products = res
        })
        getCategories().then((res: ICategory[]) => {
            this.categories = res
        })
    }
})
</script>
