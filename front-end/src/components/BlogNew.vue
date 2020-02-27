<template>
    <div>
      <b-container>
        <h1>New Blog</h1>
        <mavon-editor v-model="value"/>
        <br/>
        <br/>
        <br/>
      </b-container>
    </div>
</template>

<script>
export default {
  name: 'BlogNew',
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
.v-note-wrapper{
  min-height: 600px;
}
</style>
