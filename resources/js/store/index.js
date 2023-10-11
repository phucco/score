import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from '@/store/auth'
import loading from '@/store/loading'

const store = createStore({
  plugins:[
    createPersistedState()
  ],
  modules:{
    auth,
    loading
  }
})

export default store