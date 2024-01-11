<script setup lang="ts">
import { useTotalProgress } from '../composables/total-progress'
import { HUNDRED_PERCENT } from '../constants'
import { navigate } from '../router'
import { IconName, PageName } from '../types'
import BaseIcon from './BaseIcon.vue'

const { colorClass, percentage } = useTotalProgress()
</script>

<template>
  <a :href="`#${PageName.PROGRESS}`" @click="navigate(PageName.PROGRESS)" class="text-sm">
    <div v-if="percentage < HUNDRED_PERCENT" class="flex items-center gap-1">
      <div>
        Progress: <span class="font-mono">{{ percentage }}%</span>
      </div>
      <div :class="`h-3 w-3 rounded-full ${colorClass}`" />
    </div>
    <div v-else class="flex items-center gap-1">
      Day complete!
      <BaseIcon :name="IconName.CHECK_CIRCLE" class="h-7 text-green-500" />
    </div>
  </a>
</template>
