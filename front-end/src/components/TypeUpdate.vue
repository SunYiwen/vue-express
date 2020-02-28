<template>
  <div>
    <b-container>
      <h1>TypeUpdate</h1>
      <b-form @submit="onSubmit">
        <b-form-group label="Type Name:" label-for="input1">
          <b-form-input
            id="input1"
            v-model="type_name"
            required
            placeholder="Enter type name"
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
  name: 'TypeUpdate',
  data () {
    return {
      type_name: '',
      type_id: 0
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      https.fetchPost('/types/update', {
        type_name: this.type_name,
        type_id: this.type_id
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
    https.fetchGet('/types/update?id=' + id)
      .then(function (type) {
        // console.log(tag.name)
        that.type_name = type.type_name
        that.type_id = type.type_id
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>
