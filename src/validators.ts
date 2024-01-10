import { NAV_ITEMS } from './constants'

export function isPageValid(page: any): boolean {
  return NAV_ITEMS.some((navItem): boolean => navItem.page === page)
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
