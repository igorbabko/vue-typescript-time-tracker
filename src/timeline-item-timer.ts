import { ref } from 'vue'
import { MILLISECONDS_IN_SECOND } from './constants'
import { activeTimelineItem, updateTimelineItem } from './timeline-items'
import type { TimelineItem } from './types'

const timelineItemTimer = ref<NodeJS.Timeout | undefined>()

export function startTimelineItemTimer(timelineItem?: TimelineItem): void {
  timelineItem = timelineItem ?? activeTimelineItem.value

  if (!timelineItem) return

  updateTimelineItem(timelineItem, { isActive: true })

  timelineItemTimer.value = setInterval((): void => {
    if (!timelineItem) return

    updateTimelineItem(timelineItem, {
      activitySeconds: timelineItem.activitySeconds + 1
    })
  }, MILLISECONDS_IN_SECOND)
}

export function stopTimelineItemTimer(): void {
  if (!activeTimelineItem.value) return

  updateTimelineItem(activeTimelineItem.value, { isActive: false })

  clearInterval(timelineItemTimer.value)

  timelineItemTimer.value = undefined
}

export function resetTimelineItemTimer(timelineItem: TimelineItem): void {
  updateTimelineItem(timelineItem, { activitySeconds: 0 })

  if (activeTimelineItem.value) {
    stopTimelineItemTimer()
  }
}
