<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Login</div>

          <div class="card-body">
            <form v-on:submit.prevent="handleLogin">
              <div class="form-group row mb-2">
                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                <div class="col-md-8">
                  <input id="email" type="email" class="form-control" v-model="user.email" required autocomplete="email" autofocus>
                  <div class="form-group" v-if="error">{{ error }}</div>
                </div>
              </div>

              <div class="form-group row mb-2">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                <div class="col-md-8">
                  <input id="password" type="password" class="form-control" v-model="user.password" required autocomplete="current-password">
                </div>
              </div>

              <div class="form-group row mb-2">
                <div class="col-md-6 offset-md-4">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="user.remember_me" id="remember">
                    <label class="form-check-label" for="remember">
                      Remember Me
                    </label>
                  </div>
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" v-bind:disabled="processing" class="btn btn-primary">
                    {{ processing ? 'Loading...' : 'Login' }}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'

const user = reactive({
  email: '',
  password: '',
  remember_me: false
})

const error = ref(null)

const processing = ref(false)

const store = useStore()

const handleLogin = async () => {
  processing.value = true
  try {
    await store.dispatch('auth/login', user)
  } catch (err) {
    error.value = err.message
  } finally {
    processing.value = false
  }
}
</script>