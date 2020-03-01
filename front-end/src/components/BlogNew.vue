<template>
    <div>
      <b-container>
        <h1>New Blog</h1>
        <b-input-group prepend="Title:" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input v-model="title"></b-input>
        </b-input-group>
        <mavon-editor v-model="content" v-on:save="saveBlog"/>
        <b-input-group prepend="Description:" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input v-model="description"></b-input>
        </b-input-group>
        <select class="form-control" v-model="typeSelect">
          <option v-for="type in types" v-bind:key="type._id">{{ type.type_name }}</option>
        </select>
        <select class="form-control" v-model="tagSelect">
          <option v-for="tag in tags" v-bind:key="tag._id">{{ tag.tag_name }}</option>
        </select>
        <br/>
        <br/>
        <br/>
      </b-container>
    </div>
</template>

<script>
const https = require('../../http.js')
export default {
  name: 'BlogNew',
  data () {
    return {
      content: '',
      title: '',
      description: '',
      types: [],
      tags: [],
      typeSelect: [],
      tagSelect: []
    }
  },
  methods: {
    saveBlog: function () {
      // console.log('blog:' + typeof this.title)
      https.fetchPost('/blogs/new', {
        title: this.title,
        content: this.content,
        description: this.description,
        tag_name: this.tagSelect,
        type_name: this.typeSelect
      })
        .then(function (ret) {
          console.log(ret.data)
          if (ret.data) {
            alert('保存成功！')
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  },
  mounted () {
    const that = this
    https.fetchGet('/types')
      .then(function (types) {
        // console.log(types)
        that.types = types
        return https.fetchGet('/tags')
      })
      .then(function (tags) {
        that.tags = tags
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
