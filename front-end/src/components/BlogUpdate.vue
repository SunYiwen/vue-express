<template>
  <div>
    <b-container>
      <h1>Update Blog</h1>
      <b-input-group prepend="Title:" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input v-model="title"></b-input>
      </b-input-group>
      <mavon-editor v-model="content" v-on:save="saveBlog"/>
      <b-input-group prepend="Description:" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input v-model="description"></b-input>
      </b-input-group>
      <br/>
      <br/>
      <br/>
    </b-container>
  </div>
</template>

<script>
const https = require('../../http.js')
export default {
  name: 'BlogUpdate',
  data () {
    return {
      content: '',
      title: ' ',
      description: ' ',
      id: 0
    }
  },
  methods: {
    saveBlog: function () {
      // console.log('blog:' + typeof this.title)
      https.fetchPost('/blogs/update', {
        title: this.title,
        content: this.content,
        description: this.description,
        id: this.id
      })
        .then(function (ret) {
          console.log(ret.data)
          if (ret.data) {
            alert('修改成功！')
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  },
  mounted () {
    // console.log(this.$route.params.id)
    const id = this.$route.params.id
    const that = this
    https.fetchGet('/blogs/update?id=' + id)
      .then(function (passage) {
        that.content = passage.content
        that.title = passage.title
        that.description = passage.description
        that.id = passage.id
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style scoped>
  .v-note-wrapper{
    min-height: 600px;
  }
</style>
