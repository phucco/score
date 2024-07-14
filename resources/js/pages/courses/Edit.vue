<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">Edit course: {{ course.name }}</div>
            <div class="card-body">
                <router-link v-bind:to="{ name: 'courses.index' }" class="btn btn-primary mb-4"><i class="bi bi-arrow-left me-2"></i>Back to list</router-link>
                <form v-on:submit.prevent="editCourse">
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
                        <label class="col-md-2 col-form-label">Address:</label>
                        <div class="col-md-4">
                            <input type="text" class="form-control" v-model="course.address">
                        </div>
                        <label class="col-md-2 col-form-label">City:</label>
                        <div class="col-md-4">
                            <input type="text" class="form-control" v-model="course.city">
                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <label class="col-md-2 col-form-label">State:</label>
                        <div class="col-md-4">
                            <input type="text" class="form-control" v-model="course.state">
                        </div>
                        <label class="col-md-2 col-form-label">Country:</label>
                        <div class="col-md-4">
                            <input type="text" class="form-control" v-model="course.country">
                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <label class="col-md-2 col-form-label">Phone:</label>
                        <div class="col-md-4">
                            <input type="text" class="form-control" v-model="course.phone">
                        </div>
                        <label class="col-md-2 col-form-label">Email:</label>
                        <div class="col-md-4">
                            <input type="text" class="form-control" v-model="course.email">
                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <label class="col-md-2 col-form-label">Website:</label>
                        <div class="col-md-4">
                            <input type="text" class="form-control" v-model="course.website">
                        </div>
                        <label class="col-md-2 col-form-label">Logo:</label>
                        <div class="col-md-4">
                            <input type="text" class="form-control" v-model="course.logo">
                        </div>
                    </div>
                    <div class="form-group row mb-4">
                        <label class="col-md-2 col-form-label">Investor:</label>
                        <div class="col-md-4">
                            <input type="text" class="form-control" v-model="course.investor">
                        </div>
                    </div>
                    <button class="btn btn-success"><i class="bi bi-save me-2"></i>Save</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
import useClubs from '@/composables/clubs'
import useCourses from '@/composables/courses'

const { clubs, getClubs } = useClubs()

const { errors, updateCourse, getCourse, course } = useCourses()

const editCourse = async () => {
    await updateCourse(props.id)
}

const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

onMounted(() => {
  getCourse(props.id)
  getClubs()
})

</script>
