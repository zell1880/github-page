<template>
  <div id="app">
    <div class="body">
      <MainPage/>
    </div>
  </div>
</template>
<script>
import MainPage from '@/components/MainPage.vue'

export default {
  components: {
    MainPage
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
.body {
  width: 100%;
  height: 100%;
  padding-top:40px;
  padding-bottom:40px
}
</style>