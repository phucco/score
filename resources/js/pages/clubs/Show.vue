<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">Club</div>
      <div class="card-body">
        <router-link v-bind:to="{ name: 'clubs.index' }" class="btn btn-primary mb-4" >Back to list</router-link>
        <table class="table table-borderless">
          <tbody>
            <tr>
              <td class="col-md-2">Name:</td>
              <td class="col-md-4">{{ club.name }}</td>
              <td class="col-md-2">Number of holes:</td>
              <td class="col-md-4">{{ club.num_holes }}</td>
            </tr>
            <tr>
              <td class="col-md-2">Address:</td>
              <td class="col-md-4">{{ club.address }}</td>
              <td class="col-md-2">City:</td>
              <td class="col-md-4">{{ club.city }}</td>
            </tr>
            <tr>
              <td class="col-md-2">State:</td>
              <td class="col-md-4">{{ club.state }}</td>
              <td class="col-md-2">Country:</td>
              <td class="col-md-4">{{ club.country }}</td>
            </tr>
            <tr>
              <td class="col-md-2">Phone:</td>
              <td class="col-md-4">{{ club.phone }}</td>
              <td class="col-md-2">Email:</td>
              <td class="col-md-4">{{ club.email }}</td>
            </tr>
            <tr>
              <td class="col-md-2">Website:</td>
              <td class="col-md-4">{{ club.website }}</td>
              <td class="col-md-2">Logo:</td>
              <td class="col-md-4">{{ club.logo }}</td>
            </tr>
            <tr>
              <td class="col-md-2">Investor:</td>
              <td class="col-md-4">{{ club.investor }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import useClubs from '@/composables/clubs'
import { onMounted } from 'vue'

const { club, getClub } = useClubs()

const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

onMounted(() => getClub(props.id))
</script>