<script setup lang="ts" generic="T extends number | string">
import { computed } from 'vue'
import { BUTTON_TYPE_NEUTRAL } from '../constants'
import { normalizeSelectValue } from '../functions'
import { ICON_X_MARK } from '../icons'
import { isUndefinedOrNull } from '../validators'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import type { SelectOption } from '../types'

const props = defineProps<{
  options: SelectOption<T>[]
  placeholder: string
  selected: T | null
}>()

const emit = defineEmits<{
  // (e: 'select', value: T | null): void
  select: [value: T | null]
}>()

const isNotSelected = computed((): boolean => isUndefinedOrNull(props.selected))

function select(value: string | null): void {
  emit('select', normalizeSelectValue(value))
}
</script>

<template>
  <div class="flex gap-2">
    <BaseButton :type="BUTTON_TYPE_NEUTRAL" @click="select(null)">
      <BaseIcon :name="ICON_X_MARK" />
    </BaseButton>
    <select
      class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl"
      @change="select(($event.target as HTMLSelectElement).value)"
    >
      <option :selected="isNotSelected" disabled value="">
        {{ placeholder }}
      </option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
