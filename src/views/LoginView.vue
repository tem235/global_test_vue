<template>
    <button class="button" @click="authStore.login">Login</button>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
</script>
