<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">Add new club</div>
      <div class="card-body">
        <router-link v-bind:to="{ name: 'clubs.index' }" class="btn btn-primary mb-4" >Back to list</router-link>
        <form v-on:submit.prevent="addClub">
          <div v-if="errors">
            <div v-for="(v, k) in errors" :key="k" class="bg-red-400 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
                <p v-for="error in v" :key="error" class="text-sm">
                    {{ error }}
                </p>
            </div>
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
          <div class="form-group row mb-4">
            <label class="col-md-2 col-form-label">Investor:</label>
            <div class="col-md-4">
              <input type="text" class="form-control" v-model="club.investor">
            </div>
          </div>
          <button class="btn btn-success">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import useClubs from '../../composables/clubs'
import { reactive } from 'vue'

const { errors, storeClub } = useClubs()

const club = reactive({
  name: '',
  num_holes: 18,
  city: '',
  country: '',
  address: '',
  phone: '',
  email: '',
  website: '',
  logo: '',
  state: '',
  investor: ''
})

const addClub = async () => {
  await storeClub({ ...club })
}
</script>