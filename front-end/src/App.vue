<template>
  <div id="app">
    <div id="nav">
      <Header></Header>
    </div>
    <b-container>
      <router-view/>
    </b-container>
    <br/>
    <br/>
    <br/>
    <br/>
    <div id="footer">
      <Footer></Footer>
    </div>
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
</style>
<script>
import Header from './components/Header'
import Footer from './components/Footer'
import './assets/darcula.css'
export default {
  components: { Footer, Header }
}
</script>
