<script>
  import HeaderApp from './components/HeaderApp.vue';
  export default {
    name: 'App',
    components:{
      HeaderApp,
    },
  }
</script>

<template>
  <HeaderApp></HeaderApp>
  <router-view></router-view>
</template>

<style lang="scss" scoped>

</style>
