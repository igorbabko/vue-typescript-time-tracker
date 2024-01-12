import { ref } from 'vue'
import { MILLISECONDS_IN_SECOND } from './constants'
import { activeTimelineItem, updateTimelineItem } from './timeline-items'
import type { TimelineItem } from './types'

const timelineItemTimer = ref<number | undefined>()

export function startTimelineItemTimer(timelineItem?: TimelineItem): void {
  timelineItem = timelineItem ?? activeTimelineItem.value

  updateTimelineItem(timelineItem as any, { isActive: true })

  timelineItemTimer.value = setInterval((): void => {
    updateTimelineItem(timelineItem as any, {
      activitySeconds: (timelineItem as any).activitySeconds + 1
    })
  }, MILLISECONDS_IN_SECOND)
}

export function stopTimelineItemTimer(): void {
  updateTimelineItem(activeTimelineItem.value as any, { isActive: false })

  clearInterval(timelineItemTimer.value)

  timelineItemTimer.value = undefined
}

export function resetTimelineItemTimer(timelineItem: TimelineItem): void {
  updateTimelineItem(timelineItem, { activitySeconds: 0 })

  if (activeTimelineItem.value) {
    stopTimelineItemTimer()
  }
}
