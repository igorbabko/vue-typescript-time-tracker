import { HOURS_IN_DAY, MIDNIGHT_HOUR, NAV_ITEMS } from './constants'
import { ICONS } from './icons'

export function isPageValid(page: any): boolean {
  return NAV_ITEMS.some((navItem): boolean => navItem.page === page)
}

export function isIconValid(icon: any): boolean {
  return Object.keys(ICONS).includes(icon)
}

export function isTimelineItemValid({ hour }: any): boolean {
  return isHourValid(hour)
}

export function isActivityValid({ id, name, secondsToComplete }: any): boolean {
  if (isNull(id)) {
    return true
  }

  return [isNotEmptyString(id), isNotEmptyString(name), isNumber(secondsToComplete)].every(Boolean)
}

export function isHourValid(hour: any): boolean {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

export function isUndefinedOrNull(value: any): boolean {
  return isUndefined(value) || isNull(value)
}

export function isNull(value: any): boolean {
  return value === null
}

function isUndefined(value: any): boolean {
  return value === undefined
}

function isNumber(value: any): boolean {
  return typeof value === 'number'
}

function isBetween(value: any, start: any, end: any): boolean {
  return value >= start && value <= end
}

function isNotEmptyString(value: any): boolean {
  return isString(value) && value.length > 0
}

function isString(value: any): boolean {
  return typeof value === 'string'
}
