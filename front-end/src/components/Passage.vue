<template>
  <div class="passage">
    <h1 class="sun_title">{{ passage.title }}</h1>
    <ul>
      <li><b-icon-calendar></b-icon-calendar>{{ passage.create_time }}</li>
      <li><b-icon-folder></b-icon-folder>Algorithm</li>
      <li><b-icon-tag></b-icon-tag>SPFA</li>
      <li><b-icon-eye></b-icon-eye>12</li>
    </ul>
    <p class="description">{{ passage.description }}...</p>
    <a class="link_more"  v-on:click="showBlog">read more-></a>
    <hr/>
  </div>
</template>

<script>
export default {
  name: 'Passage',
  props: {
    passage: Object
  },
  mounted () {
  },
  methods: {
    showBlog: function () {
      return this.$router.push({
        path: this.read_link
      })
    }
  },
  computed: {
    // eslint-disable-next-line vue/no-dupe-keys
    read_link: function () {
      return '/blog/' + this.passage.id
    }
  }
}
</script>

<style scoped>
  .sun_title{
    font-size: 25px;
  }
  .link_more{
    color: #e13d3d;
  }
  .passage{
    width:60%;
    margin:0 auto;
    margin-top: 3%;
    margin-bottom: 6%;
  }
  hr{
    background-color: #e13d3d;
    height:1px;
    border:none;
    margin: 10px;
  }
  ul{
    float: left;
  }
  li{
    list-style-type:none;
    display:inline;
    margin-right:10px;
    font-size: 13px;
    margin-right: 10px;
    margin-bottom: 20px;
    color: #777676;
  }
  .description{
    clear: left;
  }
</style>
