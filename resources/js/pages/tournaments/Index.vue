<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">List of tournaments</div>
      <div class="card-body">
        <router-link v-bind:to="{ name: 'tournaments.add' }" class="btn btn-primary mb-4"><i class="bi bi-plus-lg me-2"></i>Add new tournament</router-link>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th class="col-md-0-5">No.</th>
              <th class="col-md-2">Course</th>
              <th class="col-md-auto">Name</th>
              <th class="col-md-2">Date & Time</th>
              <th class="col-md-1">Format</th>
              <th class="col-md-1">Tie breaking</th>
              <th class="col-md-1">Groups</th>
              <th class="col-md-1">Note</th>
              <th class="col-md-1-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, index) in tournaments" :key="item.id">
              <tr>
                <td>{{ index + 1 }}</td>
                <td>{{ item.course_name_with_club }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.datetime }}</td>
                <td>{{ item.format.name }}</td>
                <td>{{ item.tiebreaking.name }}</td>
                <td>{{ item.groups }}</td>
                <td>{{ item.note }}</td>
                <td>
                  <router-link v-bind:to="{ name: 'tournaments.show', params: { id: item.id } }" class="btn btn-info me-2"><i class="bi bi-eye"></i></router-link>
                  <router-link v-bind:to="{ name: 'tournaments.edit', params: { id: item.id } }" class="btn btn-warning me-2"><i class="bi bi-pencil"></i></router-link>
                  <button v-on:click="deleteTournament(item.id)" class="btn btn-danger"><i class="bi bi-trash"></i></button>
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
import useTournaments from '@/composables/tournaments'
import { onMounted } from 'vue'

const { tournaments, getTournaments, total, destroyTournament } = useTournaments()

const deleteTournament = async (id) => {
  await destroyTournament(id)
  await getTournaments()
}

onMounted(getTournaments)
</script>