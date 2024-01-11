<script setup lang="ts">
import { currentPage, navigate } from '../router'
import { scrollToCurrentHour } from '../timeline-items'
import { IconName, PageName } from '../types'
import BaseIcon from './BaseIcon.vue'

function handleClick(): void {
  currentPage.value === PageName.TIMELINE ? scrollToCurrentHour(true) : navigate(PageName.TIMELINE)
}
</script>

<template>
  <a
    :href="`#${PageName.TIMELINE}`"
    @click="handleClick"
    class="origin-left scale-125 rounded bg-black p-1 text-white"
  >
    <BaseIcon :name="IconName.CLOCK" class="h-5" />
  </a>
</template>
