<template>
  <div class="home">
    <div class="container" v-for="passage in passages" v-bind:key="passage._id">
      <Passage v-bind:passage="passage"></Passage>
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
      passages: []
    }
  },
  mounted () {
    https.fetchGet('/')
      .then((data) => {
        this.passages = data
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

</script>
