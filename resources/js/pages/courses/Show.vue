<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">Club: {{ course.name }}</div>
      <div class="card-body">
        <router-link v-bind:to="{ name: 'courses.index' }" class="btn btn-primary mb-4"><i class="bi bi-arrow-left me-2"></i>Back to list</router-link>
        <table class="table table-borderless">
          <tbody>
            <tr>
              <td class="col-md-2">Name:</td>
              <td class="col-md-4">{{ course.name }}</td>
              <td class="col-md-2">Club:</td>
              <td class="col-md-4" v-if="course.club">{{ course.club.name }}</td>
            </tr>
            <tr>
              <td class="col-md-2">Order:</td>
              <td class="col-md-4">{{ course.order }}</td>
              <td class="col-md-2">Default:</td>
              <td class="col-md-4">{{ course.is_default }}</td>
            </tr>
            <tr>
              <td class="col-md-2">Pars:</td>
              <td class="col-md-4">{{ course.pars }}</td>
              <td class="col-md-2">Total pars:</td>
              <td class="col-md-4">{{ course.total_pars }}</td>
            </tr>
            <tr>
              <td class="col-md-2">Indexes:</td>
              <td class="col-md-4">{{ course.indexes }}</td>
            </tr>
          </tbody>
        </table>
        <router-link v-if="course.id" v-bind:to="{ name: 'courses.edit', params: { id: course.id } }" class="btn btn-warning me-2"><i class="bi bi-pencil me-2"></i>Edit</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import useCourses from '@/composables/courses'
import { onMounted } from 'vue'

const { course, getCourse } = useCourses()

const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

onMounted(() => getCourse(props.id))
</script>