<template>
    <h1>Main</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getProducts } from '../services/products'

export default defineComponent({
    mounted() {
        getProducts()
    }
})
</script>
