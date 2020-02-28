<template>
  <div>
    <b-container>
      <h1>TagNew</h1>
      <b-form @submit="onSubmit">
        <b-form-group label="Tag Name:" label-for="input1">
          <b-form-input
            id="input1"
            v-model="tag_name"
            required
            placeholder="Enter tag name"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
const https = require('../../http.js')
export default {
  name: 'TagNew',
  data () {
    return {
      tag_name: ''
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      https.fetchPost('/tags/new', {
        tag_name: this.tag_name
      })
        .then(function (ret) {
          if (ret.data) {
            alert('添加成功！')
          } else {
            alert('已有该分类！')
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

</style>
