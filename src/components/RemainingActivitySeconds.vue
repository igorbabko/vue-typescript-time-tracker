<script setup lang="ts">
import { computed } from 'vue'
import { formatSecondsWithSign } from '../functions'
import { calculateTrackedActivitySeconds, timelineItems } from '../timeline-items'
import type { Activity } from '../types'

const props = defineProps<{ activity: Activity }>()

const classes = computed((): string[] => [
  'flex items-center rounded px-2 font-mono text-xl',
  remainingSeconds.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
])

const remainingSeconds = computed(
  (): number =>
    calculateTrackedActivitySeconds(timelineItems.value, props.activity) -
    props.activity.secondsToComplete
)
</script>

<template>
  <div :class="classes">{{ formatSecondsWithSign(remainingSeconds) }}</div>
</template>
