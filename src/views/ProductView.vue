<template>
    <h1>Product</h1>

    <div v-if="product.name" class="">
        <img :src="product.thumbnailUrl" alt="">
        <h1>{{ product.name }}</h1>
        <p>{{ product.defaultDisplayedPriceFormatted }}</p>
        <div class="" v-for="option in product.options">
            <select name="" id="" v-model="size">
                <option v-for="choices in option.choices" :value="choices.text">{{ choices.text }}</option>
            </select>
        </div>
        <div class="">
            <input v-model="count" type="number">
        </div>
        <button @click="addToCart">Добавить в корзину</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { getProductById } from '../services/productsApiService'
import IPoduct from '../types/IProduct'
import ICartItem from '../types/ICartItem'
import { useCartStore } from '@/stores'

export default defineComponent({
    data() {
        return {
            product: <IPoduct>{},
            count: 1,
            size: ''
        }
    },
    mounted() {
        let id = useRoute().params.id as string

        getProductById(id).then((res: IPoduct) => {
            this.product = res
            if (res?.options) {
                this.size = res.options[0].choices[0].text
            }
        })
    },
    methods: {
        addToCart() {
            let cartItem: ICartItem = {
                productId: this.product.id,
                product: this.product,
                count: this.count,
                size: this.size
            }
            useCartStore().addItemInCart(cartItem)
        }
    }
})
</script>
