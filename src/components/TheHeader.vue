<script setup lang="ts">
import TheHeaderProgress from './TheHeaderProgress.vue'
import TheLogo from './TheLogo.vue'
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <TheLogo />
    <TheHeaderProgress />
  </header>
</template>
