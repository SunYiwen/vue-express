<template>
  <div class="tags">
    <div id="nav">
      <Header></Header>
    </div>
    <h1>This is a tags page</h1>
    <div v-for="tag in tags" v-bind:key="tag._id">
      <span>{{ tag.tag_name}}</span>
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
      tags: []
    }
  },
  mounted () {
    https.fetchGet('/tags')
      .then((tags) => {
        this.tags = tags
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
