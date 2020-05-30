<template>
  <div class="my-5">
    <b-jumbotron class="" bg-variant="dark" text-variant="white" border-variant="light">
    <vue-horizontal-timeline :items="items" timeline-background="none" clickable="false" line-color="#E9E9E9" />
    </b-jumbotron>
    <span class="pt-5"/>
  </div>
  
</template>
<script>
import { VueHorizontalTimeline } from "vue-horizontal-timeline";
export default {
  data(){
    const example1 = {
        title: "2018",
        content:
          "Lorem ipsum da luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio."
      };
      const example2 = {
        title: "2020",
        content:
          "Lorem ipsum da luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio."
      };
      const example3 = {
        title: "202X",
        content:
          "Lorem ipsum da luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio."
      };
      const items = [example1, example2, example3];

      return { items };
  },
  components:{
    VueHorizontalTimeline
  }
}
</script>
<style>
.no-border{
  border: none;
}
</style>