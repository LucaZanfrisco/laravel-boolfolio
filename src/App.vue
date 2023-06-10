<script>
  import HeaderApp from './components/HeaderApp.vue';
  import JumboApp from './components/JumboApp.vue';
  export default {
    name: 'App',
    components:{
      HeaderApp,
      JumboApp,
    },
  }
</script>

<template>
  <HeaderApp></HeaderApp>
  <JumboApp></JumboApp>
  <router-view></router-view>
</template>

<style>

</style>
