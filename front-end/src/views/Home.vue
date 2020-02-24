<template>
  <div class="home">
    <div id="nav">
      <Header></Header>
    </div>
    <div class="container" v-for="passage in passages" v-bind:key="passage._id">
      <Passage v-bind:passage="passage" v-bind:types="types" v-bind:tags="tags"></Passage>
    </div>
    <div id="footer">
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Passage from '../components/Passage'
import Header from '../components/Header'
import Footer from '../components/Footer'
const https = require('../../http.js')
export default {
  components: { Passage, Header, Footer },
  data () {
    return {
      passages: [],
      types: [],
      tags: []
    }
  },
  mounted () {
    https.fetchGet('/')
      .then((passages) => {
        this.passages = passages.reverse()
        return https.fetchGet('/type')
      })
      .then((types) => {
        this.types = types
        return https.fetchGet('tag')
      })
      .then((tags) => {
        this.tags = tags
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

</script>
