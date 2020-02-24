<template>
  <div class="home">
    <div class="container" v-for="passage in passages" v-bind:key="passage._id">
      <Passage v-bind:passage="passage" v-bind:types="types" v-bind:tags="tags"></Passage>
    </div>
  </div>
</template>
<script>
import Passage from '../components/Passage'
// eslint-disable-next-line no-unused-vars,import/no-absolute-path
const https = require('../../http.js')
export default {
  components: { Passage },
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
