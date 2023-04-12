<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">Add divisions to Tournament: {{ tournament.name }}</div>
      <div class="card-body">
        <form v-on:submit.prevent="addDivision">
          <div class="form-group row mb-2">
            <label class="col-md-2 col-form-label">Divisions:</label>
            <div class="col-md-10">
              <input type="number" class="form-control" v-model="number_of_divisions">
            </div>
          </div>
          <div class="form-group mt-4 mb-2">
            <table class="table table-bordered text-center">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>HDC index</th>
                  <th>HDC course</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(division, index) in divisions" v-bind:key="index">
                   <tr>
                      <td><input class="form-control" type="text" v-model="division.name"></td>
                      <td>
                        <select class="form-control" v-model="division.gender">
                          <option value="m" selected="selected">Male</option>
                          <option value="f">Female</option>
                        </select>
                      </td>
                      <td><input class="form-control" type="number" v-model="division.handicap_index_limit" step="0.1"></td>
                      <td><input class="form-control" type="number" v-model="division.handicap_course_limit"></td>
                      <td><input class="form-control" type="text" v-model="division.note"></td>
                      <input type="hidden" v-model="division.tournament_id">
                    </tr>
                </template>
              </tbody>
            </table>
          </div>
          <button class="btn btn-success"><i class="bi bi-save me-2"></i>Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
import useTournaments from '@/composables/tournaments'
import useDivisions from '@/composables/divisions'

const { tournament, getTournament } = useTournaments()
const { storeDivision } = useDivisions()

const number_of_divisions = ref(2)
const divisions = ref([{'tournament_id': props.id, 'gender': 'm'}, {'tournament_id': props.id, 'gender': 'm'}])

const addDivision = async () => {
  divisions.value = divisions.value.filter(e => Object.keys(e).length)
  divisions.value.forEach(async (division) => {
    await storeDivision({ ... division })
    // console.log(division)
  })
}

watch(number_of_divisions, (newVal, oldVal) => {
  if (newVal > oldVal) {
    for(var i = 0; i < newVal - oldVal; i++ ) {
      divisions.value.push({'tournament_id': props.id, 'gender': 'm'})
    }
  } else {
    divisions.value = divisions.value.slice(0, newVal - oldVal)
  }
})

const props = defineProps({
  id: {
    required: true,
    type: String
  }
})

onMounted(() => {
  getTournament(props.id)
})
</script>