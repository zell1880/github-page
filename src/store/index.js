import Vuex from 'vuex'
import Vue from 'vue'
import todos from './module/todos'

Vue.use(Vuex)

export default new Vuex.store({
  modules:{
    todos
  }
})