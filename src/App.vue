<template>
  <div id="app">
    <Header/>
    <div class="body">
      <MainPage/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
    Header,
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
