import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'

export type PageName = typeof PAGE_TIMELINE | typeof PAGE_ACTIVITIES | typeof PAGE_PROGRESS

export interface Activity {
  id: string
  name: string
  secondsToComplete: number
}

export interface TimelineItem {
  hour: number
  activityId: string | null
  activitySeconds: number
  isActive: boolean
}

export interface ActivitySelectOption {
  value: string
  label: string
}

export interface State {
  timelineItems: any
  activities: Activity[]
  lastActiveAt: Date
}
