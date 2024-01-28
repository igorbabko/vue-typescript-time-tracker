import {
  CheckCircleIcon as CheckCircle,
  ListBulletIcon as ListBullet,
  ArrowPathIcon as ArrowPath,
  ChartBarIcon as ChartBar,
  ClockIcon as Clock,
  TrashIcon as Trash,
  XMarkIcon as XMark,
  PauseIcon as Pause,
  PlayIcon as Play,
  PlusIcon as Plus
} from '@heroicons/vue/24/outline'
import { IconName } from './types'
import type { Component } from 'vue'

export const ICONS: Record<IconName, Component> = {
  [IconName.CHECK_CIRCLE]: CheckCircle,
  [IconName.LIST_BULLET]: ListBullet,
  [IconName.ARROW_PATH]: ArrowPath,
  [IconName.CHART_BAR]: ChartBar,
  [IconName.CLOCK]: Clock,
  [IconName.TRASH]: Trash,
  [IconName.X_MARK]: XMark,
  [IconName.PAUSE]: Pause,
  [IconName.PLAY]: Play,
  [IconName.PLUS]: Plus
}
