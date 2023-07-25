<template>
<nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div class="container">
        <a class="navbar-brand" href="/">Laravel</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto" v-if="auth">
            <li class="nav-item">
              <router-link class="nav-link" v-bind:to="{ name: 'clubs.index' }">Clubs</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" v-bind:to="{ name: 'courses.index' }">Courses</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" v-bind:to="{ name: 'tournaments.index' }">Tournaments</router-link>
            </li>
            <li class="nav-item dropdown">
              <a id="navbarDropdownConfig" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                Config
              </a>
              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownConfig" style="margin: 0;">
                <router-link class="dropdown-item" v-bind:to="{ name: 'formats.index' }">Formats</router-link>
                <router-link class="dropdown-item" v-bind:to="{ name: 'tiebreakings.index' }">Tiebreakings</router-link>
              </div>
            </li>
          </ul>

          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown" v-if="auth">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{ user.name }}
              </a>
              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#" v-on:click.prevent="handleLogout">Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const auth = computed(() => store.state.auth.authenticated)
const user = computed(() => store.state.auth.user)

const handleLogout = async () => {
  await store.dispatch('auth/logout')
}
</script>