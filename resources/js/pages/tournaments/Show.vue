<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">Club: {{ tournament.name }}</div>
      <div class="card-body">
        <router-link v-bind:to="{ name: 'tournaments.index' }" class="btn btn-primary mb-4"><i class="bi bi-arrow-left me-2"></i>Back to list</router-link>
        <table class="table table-borderless">
          <tbody>
            <tr>
              <td class="col-md-2">Name:</td>
              <td class="col-md-4">{{ tournament.name }}</td>
              <td class="col-md-2">Course:</td>
              <td class="col-md-4">{{ tournament.course_name_with_club }}</td>
            </tr>
            <tr>
              <td class="col-md-2">Format:</td>
              <td class="col-md-4" v-if="tournament.format">{{ tournament.format.name }}</td>
              <td class="col-md-2">Tie-breaking:</td>
              <td class="col-md-4" v-if="tournament.tiebreaking">{{ tournament.tiebreaking.name }}</td>
            </tr>
            <tr>
              <td class="col-md-2">Date time:</td>
              <td class="col-md-4">{{ tournament.datetime }}</td>
              <td class="col-md-2">Auto assign to divisions:</td>
              <td class="col-md-4"><ActiveMark active="item.auto_assign_to_divisions" /></td>
            </tr>
            <tr>
              <td>Note:</td>
              <td colspan="3">{{ tournament.note }}</td>
            </tr>
          </tbody>
        </table>

        <div class="ms-2 mb-2">Divisions: <span v-if="tournament.divisions && ! tournament.divisions.length">None</span></div>

        <table v-if="tournament.divisions && tournament.divisions.length" class="table table-bordered text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>HDC index</th>
              <th>HDC course</th>
              <th>Note</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody v-if="tournament.divisions">
            <template v-for="(item, index) in tournament.divisions" v-bind:key="index">
             <tr>
              <td>{{ item.name }}</td>
              <td>
                <span v-if="item.name === 'm'">Male</span>
                <span v-else>Female</span>
              </td>
              <td>{{ item.handicap_index_limit }}</td>
              <td>{{ item.handicap_course_limit }}</td>
              <td>{{ item.note }}</td>
              <td><button v-on:click="deleteDivision(item.id)" class="btn btn-danger"><i class="bi bi-trash"></i></button></td>
            </tr>
          </template>
        </tbody>
      </table>

      <router-link v-if="tournament.id" v-bind:to="{ name: 'tournaments.edit', params: { id: tournament.id } }" class="btn btn-warning me-2"><i class="bi bi-pencil me-2"></i>Edit</router-link>
      <router-link v-if="tournament.id" v-bind:to="{ name: 'divisions.add', params: { id: tournament.id } }" class="btn btn-primary me-2"><i class="bi bi-pencil me-2"></i>Add Divisions</router-link>
      <router-link v-if="tournament.id" v-bind:to="{ name: 'divisions.edit', params: { id: tournament.id } }" class="btn btn-warning me-2"><i class="bi bi-pencil me-2"></i>Edit Divisions</router-link>
    </div>
  </div>
</div>
</template>

<script setup>
import useTournaments from '@/composables/tournaments'
import useDivisions from '@/composables/divisions'
import { onMounted } from 'vue'
import ActiveMark from '@/components/ActiveMark.vue'

const { tournament, getTournament } = useTournaments()

const { destroyDivision } = useDivisions()

const props = defineProps({
  id: {
    required: true,
    type: String
  }
})

const deleteDivision = async (id) => {
  await destroyDivision(id)
  await getTournament(props.id)
}

onMounted(() => getTournament(props.id))
</script>