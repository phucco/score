<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">List of clubs</div>
      <div class="card-body">
        <router-link v-bind:to="{ name: 'clubs.add' }" class="btn btn-primary mb-4" >Add new club</router-link>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Num holes</th>
              <th>Address</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, index) in clubs" :key="item.id">
              <tr>
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.num_holes }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.city }}</td>
                <td>
                  <router-link v-bind:to="{ name: 'clubs.show', params: { id: item.id } }" class="btn btn-success me-2"><i class="bi bi-eye"></i></router-link>
                  <button v-on:click="deleteClub(item.id)" class="btn btn-danger"><i class="bi bi-trash"></i></button>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
        <div class="row">
          <div class="col-md-6">
            Total {{ total }} records
          </div>
          <div class="col-md-6">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useClubs from '@/composables/clubs'
import { onMounted } from 'vue'

const { clubs, getClubs, total, destroyClub } = useClubs()

const deleteClub = async (id) => {
  await destroyClub(id)
  await getClubs()
}

onMounted(getClubs)
</script>