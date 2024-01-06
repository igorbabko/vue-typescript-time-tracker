import { computed } from 'vue'
import { calculateActivityCompletionPercentage } from '../activities'
import { getProgressColorClass } from '../functions'
import { calculateTrackedActivitySeconds, timelineItems } from '../timeline-items'
import type { ComputedRef } from 'vue'
import type { Activity, ProgressColorClass } from '../types'

export function useProgress(activity: Activity): {
  colorClass: ComputedRef<ProgressColorClass>
  percentage: ComputedRef<number>
  trackedActivitySeconds: ComputedRef<number>
} {
  const colorClass = computed((): ProgressColorClass => getProgressColorClass(percentage.value))

  const percentage = computed((): number =>
    calculateActivityCompletionPercentage(activity, trackedActivitySeconds.value)
  )

  const trackedActivitySeconds = computed((): number =>
    calculateTrackedActivitySeconds(timelineItems.value, activity)
  )

  return {
    colorClass,
    percentage,
    trackedActivitySeconds
  }
}
