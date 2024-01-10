import { NAV_ITEMS } from './constants'
import { ICONS } from './icons'

export function isPageValid(page: any): boolean {
  return NAV_ITEMS.some((navItem): boolean => navItem.page === page)
}

export function isIconValid(icon: any): boolean {
  return Object.keys(ICONS).includes(icon)
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
