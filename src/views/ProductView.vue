<template>
    <div class="container">
        <div v-if="product.name" class="product">
            <div class="product-images">
                <img :src="product.thumbnailUrl" alt="">
            </div>
            <div class="product-info">
                <h3 class="product-info__title">{{ product.name }}</h3>
                <p class="product-info__price bold">{{ product.defaultDisplayedPriceFormatted }}</p>
                <div class="product-info-options" v-for="option in product.options">
                    <label for="size">Размер</label>
                    <select name="" id="size" v-model="size">
                        <option v-for="choices in option.choices" :value="choices.text">{{ choices.text }}</option>
                    </select>
                </div>
                <div class="product-info-count">
                    <label for="">Количество</label>
                    <input type="text" v-model="count">
                </div>
                <button class="button" @click="addToCart">Добавить в корзину</button>
            </div>

        </div>
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
