<template>
  <div id="nav">
    <!-- <router-link to="/">HelloWorld</router-link> |
    <router-link to="/user">User</router-link> | -->
    
  </div>
  <router-view/>
</template>

<script>

// import user from './components/user.vue'
export default {
  name: 'App',
  components: {
  //  user
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
