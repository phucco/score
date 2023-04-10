<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">List of clubs</div>
      <div class="card-body">
        <router-link v-bind:to="{ name: 'clubs.add' }" class="btn btn-primary mb-4"><i class="bi bi-plus-lg me-2"></i>Add new club</router-link>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th class="col-md-0-5">No.</th>
              <th class="col-md-auto">Name</th>
              <th class="col-md-0-5">Holes</th>
              <th class="col-md-3">Address</th>
              <th class="col-md-1">City</th>
              <th class="col-md-1-5">Phone</th>
              <th class="col-md-0-5">Active</th>
              <th class="col-md-1-5">Actions</th>
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
                <td>{{ item.phone }}</td>
                <td><ActiveMark active="item.is_active" /></td>
                <td>
                  <router-link v-bind:to="{ name: 'clubs.show', params: { id: item.id } }" class="btn btn-info me-2"><i class="bi bi-eye"></i></router-link>
                  <router-link v-bind:to="{ name: 'clubs.edit', params: { id: item.id } }" class="btn btn-warning me-2"><i class="bi bi-pencil"></i></router-link>
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
import ActiveMark from '@/components/ActiveMark.vue'

const { clubs, getClubs, total, destroyClub } = useClubs()

const deleteClub = async (id) => {
  await destroyClub(id)
  await getClubs()
}

onMounted(getClubs)
</script>