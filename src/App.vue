<template>
  <router-link to="/">Home</router-link>|
  <router-link to="/log">login</router-link>|
  <router-link to="/pro">profile</router-link>|
<router-link to="/pro/client">Client</router-link>|
<router-link to="/pro/Dev">Developer</router-link>
<router-view />
</template>

<script>
export default {
  name: 'App',
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