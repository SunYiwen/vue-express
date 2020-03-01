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
  name: 'BlogUpdate',
  data () {
    return {
      content: '',
      title: ' ',
      description: ' ',
      id: 0,
      tags: [],
      types: [],
      typeSelect: [],
      tagSelect: [],
      tag_id: 0,
      type_id: 0
    }
  },
  methods: {
    saveBlog: function () {
      // console.log('blog:' + typeof this.title)
      https.fetchPost('/blogs/update', {
        title: this.title,
        content: this.content,
        description: this.description,
        id: this.id,
        tag_name: this.tagSelect,
        type_name: this.typeSelect
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
        that.tag_id = passage.tag_id
        that.type_id = passage.type_id
        return https.fetchGet('/tags')
      })
      .then(function (tags) {
        that.tags = tags
        const tag = tags.find(function (item) {
          return item.tag_id === that.tag_id
        })
        that.tagSelect = tag.tag_name
        return https.fetchGet('/types')
      })
      .then(function (types) {
        that.types = types
        const type = types.find(function (item) {
          return item.type_id === that.type_id
        })
        // console.log(type)
        that.typeSelect = type.type_name
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
