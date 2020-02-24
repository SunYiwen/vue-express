<template>
  <div class="blog">
    <h1>{{ passage.title }}</h1>
    <br/>
    <div v-html="passage.content" class="blog_content"></div>
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
    // console.log('id:' + this.id)
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
  .blog{
    font-family: "Open Sans","Clear Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
    color: rgb(51, 51, 51);
    line-height: 1.6
  }
  .blog_content{
    text-align: left;
    margin: 0 auto;
    padding-left: 15%;
  }
  h1{
    text-align: center;
  }
</style>
