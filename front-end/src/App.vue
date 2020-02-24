<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#fbf9f4;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
h2{
  font-size: 1.5em!important;
  border-bottom: 1px dotted #eee!important;
  word-break: break-word!important;
  font-weight: 400!important;
}
h3{
  font-size: 1.3em!important;
  border-bottom: 1px dotted #eee!important;
  word-break: break-word!important;
  font-weight: 400!important;
}
p{
  font-size: 17px;
  margin: 0 0 20px 0;
}
</style>
<script>
import './assets/darcula.css'
export default {
}
</script>
