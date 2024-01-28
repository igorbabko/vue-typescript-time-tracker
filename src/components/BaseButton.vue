<script lang="ts">
import { ButtonType } from '../types'

const typeClasses: Record<ButtonType, string> = {
  [ButtonType.PRIMARY]: 'bg-purple-500 enabled:hover:bg-purple-600 text-white',
  [ButtonType.SUCCESS]: 'bg-green-500 enabled:hover:bg-green-600 text-white',
  [ButtonType.WARNING]: 'bg-yellow-500 enabled:hover:bg-yellow-600 text-white',
  [ButtonType.DANGER]: 'bg-red-500 enabled:hover:bg-red-600 text-white',
  [ButtonType.NEUTRAL]: 'bg-gray-100 enabled:hover:bg-gray-200'
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<{ type?: ButtonType }>(), {
  type: ButtonType.PRIMARY
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
