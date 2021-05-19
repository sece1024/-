<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <home /> -->
    <router-view />
    <!-- 主页路由 -->
    <!-- <router-view name='home'/> -->
    <!-- <login /> -->
  </div>
</template>

<script>
export default {
  name: "App",
  // ,
  // components:{
  //   'navmenu':NavMenu
  // }
  components: {
    // home: ()=>import('@/components/Home'),
    // login: ()=>import('@/components/MyLogin')
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
