<template>
  <div class="d-flex align-items-center min-vh-100">
   
    <b-jumbotron class="container" bg-variant="dark" text-variant="white" border-variant="light">
       <div v-for="todo in allTodos" :key="todo.id" >{{ todo.title }} </div>
    </b-jumbotron>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name:"Todos",
  methods: {
    ...mapActions(['fetchTodos']),
  },
  computed: {
    ...mapGetters(['allTodos'])
  },
  created() {
    this.fetchTodos()
  }
  
}
</script>
<style scoped>
.container{
  max-width: 100%
}
</style>