<template>
    <div class="dropdown">
        <button class="dropdown-btn" @click="show = !show">
            <slot name="button"></slot>
        </button>
        <div v-if="show" class="dropdown-menu">
            <slot name="menu"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let show = ref(false)
</script>
