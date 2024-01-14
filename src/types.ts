import {
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING,
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  PAGE_ACTIVITIES,
  PAGE_PROGRESS,
  PAGE_TIMELINE
} from './constants'

export type PageName = typeof PAGE_TIMELINE | typeof PAGE_ACTIVITIES | typeof PAGE_PROGRESS

export type ButtonType =
  | typeof BUTTON_TYPE_PRIMARY
  | typeof BUTTON_TYPE_SUCCESS
  | typeof BUTTON_TYPE_WARNING
  | typeof BUTTON_TYPE_NEUTRAL
  | typeof BUTTON_TYPE_DANGER

export interface TimelineItem {
  hour: number
  activityId: string | null
  activitySeconds: number
  isActive: boolean
}

export interface NavItem {
  page: PageName
  icon: any
}

export interface Activity {
  id: string
  name: string
  secondsToComplete: number
}

export interface ActivitySelectOption {
  value: string
  label: string
}

export interface PeriodSelectOption {
  value: number
  label: string
}

export interface State {
  timelineItems: any
  activities: Activity[]
  lastActiveAt: Date
}

export enum ProgressColorClass {
  RED = 'bg-red-500',
  YELLOW = 'bg-yellow-500',
  BLUE = 'bg-blue-500',
  GREEN = 'bg-green-500'
}
