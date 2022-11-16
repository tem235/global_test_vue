<template>
    <div class="login-view">
        <button class="button" @click="authStore.login">Login</button>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
</script>
