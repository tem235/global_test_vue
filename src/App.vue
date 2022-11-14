<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useCartStore } from '@/stores';

onMounted(() => {
  let cartData = localStorage.getItem('cart');
  if(cartData) {
    useCartStore().setCartFromLS(JSON.parse(cartData))
    
  }
})

</script>
