<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">Add new tournament</div>
      <div class="card-body">
        <router-link v-bind:to="{ name: 'tournaments.index' }" class="btn btn-primary mb-4"><i class="bi bi-arrow-left me-2"></i>Back to list</router-link>
        <form v-on:submit.prevent="addTournament">
          <div v-if="errors" class="alert alert-danger">
            {{ errors }}
          </div>
          <div class="form-group row mb-2">
            <label class="col-md-2 col-form-label">Name:</label>
            <div class="col-md-4">
              <input type="text" class="form-control" v-model="tournament.name">
            </div>
            <label class="col-md-2 col-form-label">Course:</label>
            <div class="col-md-4">
              <select v-model="tournament.course_id" class="form-control">
                <template v-for="item in courses" v-bind:key="item.id">
                  <option v-bind:value="item.id">{{ item.name_with_course_name }}</option>
                </template>
              </select>
            </div>
          </div>
          <div class="form-group row mb-2">
            <label class="col-md-2 col-form-label">Format:</label>
            <div class="col-md-4">
              <select v-model="tournament.format_id" class="form-control">
                <template v-for="item in formats" v-bind:key="item.id">
                  <option v-bind:value="item.id">{{ item.name }}</option>
                </template>
              </select>
            </div>
            <label class="col-md-2 col-form-label">Tie breaking:</label>
            <div class="col-md-4">
              <select v-model="tournament.tiebreaking_id" class="form-control">
                <template v-for="item in tiebreakings" v-bind:key="item.id">
                  <option v-bind:value="item.id">{{ item.name }}</option>
                </template>
              </select>
            </div>
          </div>
          <div class="form-group row mb-2">
            <label class="col-md-2 col-form-label">Date time:</label>
            <div class="col-md-4">
              <input type="datetime-local" class="form-control" v-model="tournament.datetime">
            </div>
            <label class="col-md-2 col-form-label">Auto assign to divisions:</label>
            <div class="col-md-4">
              <input type="checkbox" class="form-check-input" v-model="tournament.auto_assign_to_divisions" v-bind:true-value="1"
    v-bind:false-value="0">
            </div>
          </div>
          <div class="form-group row mb-2">
            <label class="col-md-2 col-form-label">Note:</label>
            <div class="col-md-10">
              <input type="text" class="form-control" v-model="tournament.note">
            </div>
          </div>
          <button class="btn btn-success"><i class="bi bi-save me-2"></i>Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import useTournaments from '@/composables/tournaments'
import useCourses from '@/composables/courses'
import useFormats from '@/composables/formats'
import useTiebreakings from '@/composables/tiebreakings'
import { reactive, onMounted } from 'vue'

const { courses, getCourses } = useCourses()
const { formats, getFormats } = useFormats()
const { tiebreakings, getTiebreakings } = useTiebreakings()
const { errors, storeTournament } = useTournaments()

const tournament = reactive({
  name: '',
  format_id: '',
  tiebreaking_id: '',
  course_id: '',
  datetime: '',
  auto_assign_to_divisions: false,
  note: ''
})

const addTournament = async () => {
  tournament.datetime = new Date(Date.parse(tournament.datetime)).toISOString().slice(0, 19)
  // await storeTournament({ ...tournament })
  console.log(tournament)
}

onMounted(() => {
  getCourses()
  getFormats()
  getTiebreakings()
})
</script>