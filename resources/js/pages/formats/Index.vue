<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">List of formats</div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th class="col-md-0-5">No.</th>
              <th class="col-md-auto">Name</th>
              <th class="col-md-3">Note</th>
              <th class="col-md-0-5">Active</th>
              <th class="col-md-1-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, index) in formats" :key="item.id">
              <tr>
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.note }}</td>
                <td><ActiveMark active="item.is_active" /></td>
                <td>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import useFormats from '@/composables/formats'
import { onMounted } from 'vue'
import ActiveMark from '@/components/ActiveMark.vue'

const { formats, getFormats } = useFormats()

onMounted(getFormats)
</script>