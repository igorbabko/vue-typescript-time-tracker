<script setup lang="ts">
import { onActivated } from 'vue'
import { scrollToCurrentHour, timelineItemRefs, timelineItems } from '../timeline-items'
import TheTimelineIndicator from '../components/TheTimelineIndicator.vue'
import TimelineItem from '../components/TimelineItem.vue'

onActivated(scrollToCurrentHour)
</script>

<template>
  <div class="relative mt-7">
    <TheTimelineIndicator />
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        ref="timelineItemRefs"
      />
    </ul>
  </div>
</template>
