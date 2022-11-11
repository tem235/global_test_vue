<template>
    <component :is="layout">
        <slot />
    </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DefaultLayout from './DefaultLayout.vue'

export default defineComponent({
    name: "AppLayout",
    data: () => ({
        layout: DefaultLayout
    }),
    watch: {
        $route: {
            immediate: true,
            async handler(route) {
                try {
                    const component = await import(`@/layouts/${route.meta.layout}.vue`)
                    this.layout = component?.default || DefaultLayout
                } catch (e) {
                    this.layout = DefaultLayout
                }
            }
        }
    }
})
</script>
