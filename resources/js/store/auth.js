import axios from 'axios'
import router from '@/router'
import api from '@/plugins/api.js'

export default {
  namespaced: true,
  state: {
    authenticated: false,
    user: {}
  },
  mutations:{
    setAuthenticated (state, value) {
      state.authenticated = value
    },
    setUser (state, value) {
      state.user = value
    }
  },
  actions: {
    async login(context, user) {
      try {
        await axios.get('/sanctum/csrf-cookie')
        await axios.post('/api/auth/login', user).then(async (res) => {
          localStorage.setItem('accessToken', res.data.accessToken)
          const data = await api.get('/auth/user')
          context.commit('setUser', data.data)
          context.commit('setAuthenticated', true)
          router.push({ name: 'home' })    
        })               
      } catch (err) {
        console.log(err)
        context.commit('setUser', {})
        context.commit('setAuthenticated', false)
      }
    },
    async logout(context) {
      context.commit('setUser', {})
      context.commit('setAuthenticated', false)
      router.push({ name: 'login' })  
    }
  }
}

