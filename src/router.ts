import { ref, type Component } from 'vue'
import { NAV_ITEMS } from './constants'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheTimeline from './pages/TheTimeline.vue'
import { PageName } from './types'

export const routes: Record<PageName, Component> = {
  [PageName.TIMELINE]: TheTimeline,
  [PageName.ACTIVITIES]: TheActivities,
  [PageName.PROGRESS]: TheProgress
}

export const currentPage = ref<PageName>(normalizePageHash())

export function navigate(page: PageName): void {
  document.body.scrollIntoView()

  currentPage.value = page
}

export function normalizePageHash(): PageName {
  const page = window.location.hash.slice(1)

  if (NAV_ITEMS.some((navItem): boolean => navItem.page === page)) {
    return page as PageName
  }

  window.location.hash = PageName.TIMELINE

  return PageName.TIMELINE
}
