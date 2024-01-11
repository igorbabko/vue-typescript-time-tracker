import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING
} from './constants'

export enum PageName {
  TIMELINE = 'timeline',
  ACTIVITIES = 'activities',
  PROGRESS = 'progress'
}

export type Hour =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23

export enum IconName {
  CHECK_CIRCLE = 'CheckCircle',
  LIST_BULLET = 'ListBullet',
  ARROW_PATH = 'ArrowPath',
  CHART_BAR = 'ChartBar',
  CLOCK = 'Clock',
  TRASH = 'Trash',
  X_MARK = 'XMark',
  PAUSE = 'Pause',
  PLAY = 'Play',
  PLUS = 'Plus'
}

export type ButtonType =
  | typeof BUTTON_TYPE_PRIMARY
  | typeof BUTTON_TYPE_SUCCESS
  | typeof BUTTON_TYPE_WARNING
  | typeof BUTTON_TYPE_NEUTRAL
  | typeof BUTTON_TYPE_DANGER

export interface Activity {
  id: string
  name: string
  secondsToComplete: number
}

export interface SelectOption<T> {
  value: T
  label: string
}

export interface TimelineItem {
  hour: Hour
  activityId: Activity['id'] | null
  activitySeconds: number
  isActive: boolean
}

export interface NavItem {
  page: PageName
  icon: IconName
}

export interface State {
  timelineItems: TimelineItem[]
  activities: Activity[]
  lastActiveAt: Date
}

export enum ProgressColorClass {
  RED = 'bg-red-500',
  YELLOW = 'bg-yellow-500',
  BLUE = 'bg-blue-500',
  GREEN = 'bg-green-500'
}
