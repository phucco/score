<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">Dashboard</div>
      <div class="card-body">
        You successfully logged in as {{ user.email }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const user = computed(() => store.state.auth.user)
</script>