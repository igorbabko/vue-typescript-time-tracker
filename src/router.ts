import { ref } from 'vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'
import { isPageValid } from './validators'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import type { Component } from 'vue'
import type { PageName } from './types'

export const routes: Record<PageName, Component> = {
  [PAGE_TIMELINE]: TheTimeline,
  [PAGE_ACTIVITIES]: TheActivities,
  [PAGE_PROGRESS]: TheProgress
}

export const currentPage = ref<PageName>(normalizePageHash())

export function navigate(page: PageName): void {
  document.body.scrollIntoView()

  currentPage.value = page
}

export function normalizePageHash(): PageName {
  const page = window.location.hash.slice(1)

  if (isPageValid(page)) {
    return page as PageName
  }

  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}
