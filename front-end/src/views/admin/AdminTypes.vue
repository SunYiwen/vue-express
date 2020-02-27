<template>
  <div>
    <b-container>
      <h1>AdminTypes</h1>
      <a href="#" role="button" class="type_new">新增</a>
      <table class="table">
        <thead>
        <tr>
          <th>#</th>
          <th>Type Id</th>
          <th>Type Name</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
        </thead>
        <tbody v-for="(type,index) in types" v-bind:key="type._id">
        <tr>
          <th scope="row">{{ index }}</th>
          <td>{{ type.type_id }}</td>
          <td>{{ type.type_name }}</td>
          <td><a role="button" v-on:click="deleteTypes(type.type_id)">删除</a></td>
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
  name: 'AdminTypes',
  data () {
    return {
      types: []
    }
  },
  mounted () {
    https.fetchGet('/types')
      .then((types) => {
        this.types = types
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    deleteTypes: function (id) {
      const that = this
      console.log(id)
      https.fetchPost('/types/delete', {
        id: id
      })
        .then(function (ret) {
          console.log(ret.data)
          if (ret.data) {
            that.$router.push({
              path: '/admin/types'
            })
              // eslint-disable-next-line no-unused-expressions
              .catch(err => { err })
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
  .type_new{
    float: left;
  }

</style>
