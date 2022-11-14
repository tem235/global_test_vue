<template>
    <h1>Category</h1>

    <div class="">
        <img :src="catrgory.thumbnailUrl">
        <h3>{{ catrgory.name }}</h3>
    </div>
    <div class="">
        <ProductCard v-for="product in products" :product="product" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { getCategoryById } from '@/services/categoriesApiService'
import { getProducts } from '@/services/productsApiService'
import ICategory from '@/types/ICategory'
import IProduct from '@/types/IProduct'
import ProductCard from '@/components/ProductCard.vue'

export default defineComponent({
    components: { ProductCard },
    data() {
        return {
            catrgory: <ICategory>{},
            products: <IProduct[]>[]
        }
    },
    mounted() {
        let id = useRoute().params.id as string

        getCategoryById(id).then((res: ICategory) => {
            this.catrgory = res
            getProducts({ keyword: res.name }).then(res => this.products = res)
        })
    }
})
</script>
