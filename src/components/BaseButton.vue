<script lang="ts">
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING
} from '../constants'
import type { ButtonType } from '../types'

const typeClasses: Record<ButtonType, string> = {
  [BUTTON_TYPE_PRIMARY]: 'bg-purple-500 enabled:hover:bg-purple-600 text-white',
  [BUTTON_TYPE_SUCCESS]: 'bg-green-500 enabled:hover:bg-green-600 text-white',
  [BUTTON_TYPE_WARNING]: 'bg-yellow-500 enabled:hover:bg-yellow-600 text-white',
  [BUTTON_TYPE_DANGER]: 'bg-red-500 enabled:hover:bg-red-600 text-white',
  [BUTTON_TYPE_NEUTRAL]: 'bg-gray-100 enabled:hover:bg-gray-200'
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<{ type?: ButtonType }>(), {
  type: BUTTON_TYPE_PRIMARY
})

const classes = [
  'rounded p-3 disabled:cursor-not-allowed disabled:opacity-50',
  typeClasses[props.type]
]
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>
