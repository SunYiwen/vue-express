<template>
  <div class="types">
    <div id="nav">
      <Header></Header>
    </div>
    <h1>This is a types page</h1>
    <div v-for="type in types" v-bind:key="type._id">
      <span>{{ type.type_name}}</span>
    </div>
    <div id="footer">
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
const https = require('../../http.js')
export default {
  components: { Header, Footer },
  data () {
    return {
      types: []
    }
  },
  mounted () {
    https.fetchGet('/types')
      .then((types) => {
        this.types = types
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
