<script setup lang="ts">
import { activities } from '../activities'
import ActivityItem from '../components/ActivityItem.vue'
import TheActivitiesEmptyState from '../components/TheActivitiesEmptyState.vue'
import TheActivityForm from '../components/TheActivityForm.vue'
</script>

<template>
  <div class="flex grow flex-col">
    <ul v-if="activities.length" class="grow divide-y">
      <ActivityItem v-for="activity in activities" :key="activity.id" :activity="activity" />
    </ul>
    <TheActivitiesEmptyState v-else />
    <TheActivityForm />
  </div>
</template>
