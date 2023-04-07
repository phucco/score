<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">Edit club: {{ club.name }}</div>
      <div class="card-body">
        <router-link v-bind:to="{ name: 'clubs.index' }" class="btn btn-primary mb-4"><i class="bi bi-arrow-left me-2"></i>Back to list</router-link>
        <form v-on:submit.prevent="editClub">
          <div v-if="errors" class="alert alert-danger">
            {{ errors }}
          </div>
          <div class="form-group row mb-2">
            <label class="col-md-2 col-form-label">Name:</label>
            <div class="col-md-4">
              <input type="text" class="form-control" v-model="club.name">
            </div>
            <label class="col-md-2 col-form-label">Holes:</label>
            <div class="col-md-4">
              <input type="number" class="form-control" v-model="club.num_holes">
            </div>
          </div>
          <div class="form-group row mb-2">
            <label class="col-md-2 col-form-label">Address:</label>
            <div class="col-md-4">
              <input type="text" class="form-control" v-model="club.address">
            </div>
            <label class="col-md-2 col-form-label">City:</label>
            <div class="col-md-4">
              <input type="text" class="form-control" v-model="club.city">
            </div>
          </div>
          <div class="form-group row mb-2">
            <label class="col-md-2 col-form-label">State:</label>
            <div class="col-md-4">
              <input type="text" class="form-control" v-model="club.state">
            </div>
            <label class="col-md-2 col-form-label">Country:</label>
            <div class="col-md-4">
              <input type="text" class="form-control" v-model="club.country">
            </div>
          </div>
          <div class="form-group row mb-2">
            <label class="col-md-2 col-form-label">Phone:</label>
            <div class="col-md-4">
              <input type="text" class="form-control" v-model="club.phone">
            </div>
            <label class="col-md-2 col-form-label">Email:</label>
            <div class="col-md-4">
              <input type="text" class="form-control" v-model="club.email">
            </div>
          </div>
          <div class="form-group row mb-2">
            <label class="col-md-2 col-form-label">Website:</label>
            <div class="col-md-4">
              <input type="text" class="form-control" v-model="club.website">
            </div>
            <label class="col-md-2 col-form-label">Logo:</label>
            <div class="col-md-4">
              <input type="text" class="form-control" v-model="club.logo">
            </div>
          </div>
          <div class="form-group row mb-4">
            <label class="col-md-2 col-form-label">Investor:</label>
            <div class="col-md-4">
              <input type="text" class="form-control" v-model="club.investor">
            </div>
          </div>
          <button class="btn btn-success"><i class="bi bi-save me-2"></i>Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import useClubs from '@/composables/clubs'
import { onMounted } from 'vue'

const { errors, updateClub, getClub, club } = useClubs()

const editClub = async () => {
  await updateClub(props.id)
}

const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

onMounted(() => getClub(props.id))
</script>