<script setup lang="ts">
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING } from '../constants'
import { formatSeconds } from '../functions'
import { now } from '../time'
import {
  resetTimelineItemTimer,
  startTimelineItemTimer,
  stopTimelineItemTimer
} from '../timeline-item-timer'
import { activeTimelineItem } from '../timeline-items'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import { IconName, type TimelineItem } from '../types'

defineProps<{ timelineItem: TimelineItem }>()
</script>

<template>
  <div class="flex w-full gap-2">
    <BaseButton
      :type="BUTTON_TYPE_DANGER"
      :disabled="!timelineItem.activitySeconds"
      @click="resetTimelineItemTimer(timelineItem)"
    >
      <BaseIcon :name="IconName.ARROW_PATH" />
    </BaseButton>
    <div class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl">
      {{ formatSeconds(timelineItem.activitySeconds) }}
    </div>
    <BaseButton
      v-if="timelineItem === activeTimelineItem"
      :type="BUTTON_TYPE_WARNING"
      @click="stopTimelineItemTimer"
    >
      <BaseIcon :name="IconName.PAUSE" />
    </BaseButton>
    <BaseButton
      v-else
      :type="BUTTON_TYPE_SUCCESS"
      :disabled="timelineItem.hour !== now.getHours()"
      @click="startTimelineItemTimer(timelineItem)"
    >
      <BaseIcon :name="IconName.PLAY" />
    </BaseButton>
  </div>
</template>
