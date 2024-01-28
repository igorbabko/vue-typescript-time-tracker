<script setup lang="ts">
import { computed } from 'vue'
import { currentPage, navigate } from '../router'
import { scrollToCurrentHour } from '../timeline-items'
import BaseIcon from './BaseIcon.vue'
import { PageName, type NavItem } from '../types'

const props = defineProps<{ navItem: NavItem }>()

const classes = computed((): string[] => [
  'flex flex-col items-center p-2 text-xs capitalize',
  props.navItem.page === currentPage.value ? 'bg-gray-200' : 'hover:bg-gray-100'
])

function handleClick(): void {
  currentPage.value === PageName.TIMELINE && props.navItem.page === PageName.TIMELINE
    ? scrollToCurrentHour(true)
    : navigate(props.navItem.page)
}
</script>

<template>
  <li class="flex-1">
    <a :href="`#${navItem.page}`" :class="classes" @click="handleClick">
      <BaseIcon :name="navItem.icon" class="h-6 w-6" /> {{ navItem.page }}
    </a>
  </li>
</template>
