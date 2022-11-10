<template>
    <h1>{{ name }} app</h1>
    <img src="./assets/images/vue.png" alt="">
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            name: "Vue",
        }
    }
})
</script>


