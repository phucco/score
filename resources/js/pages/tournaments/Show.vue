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
              <td class="col-md-2">Auto assign to groups:</td>
              <td class="col-md-4"><ActiveMark active="item.auto_assign_to_groups" /></td>
            </tr>
            <tr>
              <td class="col-md-2">Groups:</td>
              <td class="col-md-4" v-if="tournament.groups">{{ tournament.groups.map(a => a.name).toString() }}</td>
            </tr>
          </tbody>
        </table>
        <router-link v-if="tournament.id" v-bind:to="{ name: 'tournaments.edit', params: { id: tournament.id } }" class="btn btn-warning me-2"><i class="bi bi-pencil me-2"></i>Edit</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import useTournaments from '@/composables/tournaments'
import { onMounted } from 'vue'
import ActiveMark from '@/components/ActiveMark.vue'

const { tournament, getTournament } = useTournaments()

const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

onMounted(() => getTournament(props.id))
</script>