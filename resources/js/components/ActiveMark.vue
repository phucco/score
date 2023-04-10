<template>
  <i v-if="active" class="bi-check-circle me-2"></i>
  <i v-else class="bi-x-circle me-2"></i>
</template>

<script setup>
const props = defineProps({
  active: {
    required: true,
    type: String
  }
})
</script>