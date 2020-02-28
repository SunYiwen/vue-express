<template>
  <div>
    <b-container>
    <h1>AdminTags</h1>
    <a href="/admin/blogs/new" role="button" class="blog_new">新增</a>
    <table class="table">
      <thead>
      <tr>
        <th>#</th>
        <th>Blog Id</th>
        <th>Blog Title</th>
        <th>Delete</th>
        <th>Update</th>
      </tr>
      </thead>
      <tbody v-for="(blog,index) in blogs" v-bind:key="blog._id">
      <tr>
        <th scope="row">{{ index }}</th>
        <td>{{ blog.id }}</td>
        <td>{{ blog.title }}</td>
        <td><a role="button" v-on:click="deleteBlog(blog.id)">删除</a></td>
        <td><a role="button" v-on:click="updateBlog(blog.id)">修改</a></td>
      </tr>
      </tbody>
    </table>
  </b-container>
  </div>
</template>

<script>
const https = require('../../../http.js')
export default {
  name: 'AdminBlog',
  data () {
    return {
      blogs: [],
      types: [],
      tags: []
    }
  },
  mounted () {
    https.fetchGet('/')
      .then((passages) => {
        this.blogs = passages
        return https.fetchGet('/types')
      })
      .then((types) => {
        this.types = types
        return https.fetchGet('/tags')
      })
      .then((tags) => {
        this.tags = tags
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    deleteBlog: function (id) {
      const that = this
      console.log(id)
      https.fetchPost('/blogs/delete', {
        id: id
      })
        .then(function (ret) {
          console.log(ret.data)
          if (ret.data) {
            that.$router.go(0)
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    updateBlog: function (id) {
      return this.$router.push({
        path: '/admin/blogs/update/' + id
      })
    }
  }
}
</script>

<style scoped>
  .blog_new{
    float: left;
  }

</style>
