<template>
  <div>
    <b-container>
      <h1>AdminTags</h1>
      <a href="#" role="button" class="tag_new">新增</a>
        <table class="table">
          <thead>
          <tr>
            <th>#</th>
            <th>Tag Id</th>
            <th>Tag Name</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
          </thead>
          <tbody v-for="(tag,index) in tags" v-bind:key="tag._id">
          <tr>
            <th scope="row">{{ index }}</th>
            <td>{{ tag.tag_id }}</td>
            <td>{{ tag.tag_name }}</td>
            <td><a role="button" v-on:click="deleteTags(tag.tag_id)">删除</a></td>
            <td><a href="#" role="button">修改</a></td>
          </tr>
          </tbody>
        </table>
    </b-container>
  </div>
</template>

<script>
const https = require('../../../http.js')
export default {
  name: 'AdminTags',
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
  },
  methods: {
    deleteTags: function (id) {
      const that = this
      console.log(id)
      https.fetchPost('/tags/delete', {
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
    }
  }
}
</script>

<style scoped>
  .tag_new{
    float: left;
  }

</style>
