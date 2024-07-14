<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">Add new course</div>
      <div class="card-body">
        <router-link v-bind:to="{ name: 'courses.index' }" class="btn btn-primary mb-4"><i class="bi bi-arrow-left me-2"></i>Back to list</router-link>
        <form v-on:submit.prevent="addCourse">
          <div v-if="errors" class="alert alert-danger">
            {{ errors }}
          </div>
          <div class="form-group row mb-2">
            <label class="col-md-2 col-form-label">Name:</label>
            <div class="col-md-4">
              <input type="text" class="form-control" v-model="course.name">
            </div>
            <label class="col-md-2 col-form-label">Club:</label>
            <div class="col-md-4">
              <select v-model="course.club_id" class="form-control">
                <template v-for="item in clubs" v-bind:key="item.id">
                  <option v-bind:value="item.id">{{ item.name }}</option>
                </template>
              </select>
            </div>
          </div>
          <div class="form-group row mb-2">
            <label class="col-md-2 col-form-label">Men's slope rating:</label>
            <div class="col-md-4">
              <input type="number" class="form-control" v-model="course.men_slope_rating">
            </div>
            <label class="col-md-2 col-form-label">Women's slope rating:</label>
            <div class="col-md-4">
              <input type="number" class="form-control" v-model="course.women_slope_rating">
            </div>
          </div>
          <div class="form-group row mb-2">
            <label class="col-md-2 col-form-label">Active:</label>
            <div class="col-md-4">
              <input type="checkbox" class="form-check-input" v-model="course.is_active">
            </div>
            <label class="col-md-2 col-form-label">Default:</label>
            <div class="col-md-4">
              <input type="checkbox" class="form-check-input" v-model="course.is_default">
            </div>
          </div>
          <div class="form-group mt-4 mb-2">
            <table class="table table-bordered text-center">
              <thead>
                <tr>
                  <td>Hole</td>
                  <template v-for="hole in 18" v-bind:key="hole">
                    <td>{{ hole }}</td>
                  </template>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="align-middle">Par</td>
                  <template v-for="hole in 18" v-bind:key="hole">
                    <td><input type="number" class="form-control" v-model="arrays.pars[hole-1]"></td>
                  </template>
                  <td class="align-middle">{{ total_pars }}</td>
                </tr>
                <tr>
                  <td class="align-middle">Index</td>
                  <template v-for="hole in 18" v-bind:key="hole">
                    <td><input type="number" class="form-control" v-model="arrays.indexes[hole-1]"></td>
                  </template>
                  <td></td>
                </tr>
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
import useCourses from '@/composables/courses'
import useClubs from '@/composables/clubs'
import { reactive, onMounted, computed } from 'vue'

const { clubs, getClubs } = useClubs()
const { errors, storeCourse } = useCourses()

const course = reactive({
  name: '',
  men_slope_rating: '',
  women_slope_rating: '',
  club_id: '',
  is_default: true,
  is_active: true
})

const arrays = reactive({
  pars: [],
  indexes: []
})

const total_pars = computed(() => {
  return arrays.pars.reduce((a, b) => a + b, 0)
})

const addCourse = async () => {
  course.total_pars = total_pars.value
  course.pars = JSON.stringify(arrays.pars)
  course.indexes = JSON.stringify(arrays.indexes)
  // await storeCourse({ ...course })
  console.log({ ...course })
}

onMounted(getClubs)
</script>