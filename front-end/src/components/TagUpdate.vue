<template>
  <div>
    <b-container>
      <h1>TagUpdate</h1>
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
      tag_name: '',
      tag_id: 0
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      https.fetchPost('/tags/update', {
        tag_name: this.tag_name,
        tag_id: this.tag_id
      })
        .then(function (ret) {
          if (ret.data) {
            alert('修改成功！')
          } else {
            alert('修改失败！')
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  },
  mounted () {
    const id = this.$route.params.id
    const that = this
    https.fetchGet('/tags/update?id=' + id)
      .then(function (tag) {
        // console.log(tag.name)
        that.tag_name = tag.tag_name
        that.tag_id = tag.tag_id
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>
