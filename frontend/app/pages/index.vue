<script setup lang="ts">
import type { Tip } from '@@/types'

// Lazy load du composant lourd
const TipsCard = defineAsyncComponent(() => import('~/components/TipsCard.vue'))

const { data: tips } = await useFetch<Tip[]>('/api/tips')

</script>

<template>
  <section class="max-w-5xl mx-auto space-y-6 py-12">
    <TipsCard v-for="tip in tips" :key="tip.id" :tip="tip" />
  </section>
</template>
