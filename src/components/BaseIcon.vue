<script setup lang="ts">
import { ICONS } from '../icons'
import type { IconName } from '../types'

defineProps<{ name: IconName }>()
</script>

<template>
  <component :is="ICONS[name]" :class="$attrs.class || 'h-8'" />
</template>
