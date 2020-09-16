<template>
  <div id="app">
   <!-- <router-view/> -->
   <Menu></Menu>
   <Map></Map>
   <Bottom></Bottom>
   <router-view/>
  </div>
</template>

<script>
  // import Home from "./components/Home.vue";
  import Map from "./view/Map.vue"
  import Menu from "./view/Menu.vue"
  import Bottom from "./view/Bottom.vue"
  
export default {
  name: 'App',
  components:{
    // Home
    Map,
    Menu,
    Bottom,
  }
}
</script>

<style>

</style>
