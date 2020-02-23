<template>
  <div class="blog">
    <h1 >Blog</h1>
    <p>{{ passage.content }}</p>
  </div>
</template>

<script>
const https = require('../../http.js')
export default {
  name: 'Blog',
  props: {
  },
  data () {
    return {
      id: String,
      passage: Object
    }
  },
  mounted () {
    this.id = this.$route.params.id
    console.log('id:' + this.id)
    https.fetchGet('/blog?id=' + this.id)
      .then((data) => {
        this.passage = data
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>
