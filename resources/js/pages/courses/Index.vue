<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">List of courses</div>
      <div class="card-body">
        <router-link v-bind:to="{ name: 'courses.add' }" class="btn btn-primary mb-4"><i class="bi bi-plus-lg me-2"></i>Add new course</router-link>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th class="col-md-0-5">No.</th>
              <th class="col-md-2">Club</th>
              <th class="col-md-1">Name</th>
              <th class="col-md-auto">Pars</th>
              <th class="col-md-1">Total pars</th>
              <th class="col-md-0-5">Default</th>
              <th class="col-md-0-5">Active</th>
              <th class="col-md-1-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, index) in courses" :key="item.id">
              <tr>
                <td>{{ index + 1 }}</td>
                <td>{{ item.club.name }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.pars }}</td>
                <td>{{ item.total_pars }}</td>
                <td><ActiveMark active="item.is_default" /></td>
                <td><ActiveMark active="item.is_active" /></td>
                <td>
                  <router-link v-bind:to="{ name: 'courses.show', params: { id: item.id } }" class="btn btn-info me-2"><i class="bi bi-eye"></i></router-link>
                  <router-link v-bind:to="{ name: 'courses.edit', params: { id: item.id } }" class="btn btn-warning me-2"><i class="bi bi-pencil"></i></router-link>
                  <button v-on:click="deleteCourse(item.id)" class="btn btn-danger"><i class="bi bi-trash"></i></button>
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
import useCourses from '@/composables/courses'
import { onMounted } from 'vue'
import ActiveMark from '@/components/ActiveMark.vue'

const { courses, getCourses, total, destroyCourse } = useCourses()

const deleteCourse = async (id) => {
  await destroyCourse(id)
  await getCourses()
}

onMounted(getCourses)
</script>