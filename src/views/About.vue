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

.body {
  width: 100%;
  height: 100%;
  padding-top:40px;
  padding-bottom:40px
}
</style>