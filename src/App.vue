<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width:100%;
  margin: 0px 0px 0px 0px;
}

</style>
