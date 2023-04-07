<template>
  <button class="btn btn-danger ms-2 me-2" v-on:click="goBack"><i class="bi bi-arrow-left me-2"></i>Go Back</button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>