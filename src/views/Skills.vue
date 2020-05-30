<template>
  <div class="my-5">
     <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    <b-jumbotron class="my-5" bg-variant="dark" text-variant="white" border-variant="light">

      <template v-slot:header>Skills In-Training</template>

      <template v-slot:lead>
        <hr class="m-4 border-white">
        <b-row class="justify-content-center mb-2">
          Web Development : Frontend
        </b-row>
        <b-row class="justify-content-center my-2">
          <i class="fa-3x fab fa-html5 mx-2"></i>
          <i class="fa-3x fab fa-js mx-2"></i>
          <i class="fa-3x fab fa-vuejs mx-2"></i>
        </b-row>
        <b-row class="justify-content-center mx-2 mt-4">
          Web Development : Backend
        </b-row>
        <b-row class="justify-content-center my-2">
          <i class="fa-3x fab fa-laravel mx-2"></i>
        </b-row>
       
      </template>
      
      
    </b-jumbotron>
  </div>
</template>
<script>


export default {
  components: {

  }
}
</script>
<style>

</style>