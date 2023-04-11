<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">Add groups to Tournament: {{ tournament.name }}</div>
      <div class="card-body">
        <form v-on:submit.prevent="addGroup">
          <div class="form-group row mb-2">
            <label class="col-md-2 col-form-label">Groups:</label>
            <div class="col-md-10">
              <input type="number" class="form-control" v-model="number_of_groups">
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
                <template v-for="(group, index) in groups" v-bind:key="index">
                   <tr>
                      <td><input class="form-control" type="text" v-model="group.name"></td>
                      <td>
                        <select class="form-control" v-model="group.gender">
                          <option value="m" selected="selected">Male</option>
                          <option value="f">Female</option>
                        </select>
                      </td>
                      <td><input class="form-control" type="number" v-model="group.handicap_index_limit" step="0.1"></td>
                      <td><input class="form-control" type="number" v-model="group.handicap_course_limt"></td>
                      <td><input class="form-control" type="text" v-model="group.note"></td>
                      <input type="hidden" v-model="group.tournament_id">
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
import useGroups from '@/composables/groups'

const { tournament, getTournament } = useTournaments()
const { storeGroup } = useGroups()
const number_of_groups = ref(2)
const groups = ref([{'tournament_id': props.id, 'gender': 'm'}, {'tournament_id': props.id, 'gender': 'm'}])

const addGroup = async () => {
  groups.value = groups.value.filter(e => Object.keys(e).length)
  groups.value.forEach(async (group) => {
    await storeGroup({ ... group })
  })
}

watch(number_of_groups, (newVal, oldVal) => {
  if (newVal > oldVal) {
    for(var i = 0; i < newVal - oldVal; i++ ) {
      groups.value.push({'tournament_id': props.id, 'gender': 'm'})
    }
  } else {
    groups.value = groups.value.slice(0, newVal - oldVal)
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