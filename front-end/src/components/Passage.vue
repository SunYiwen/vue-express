<template>
  <div class="passage">
    <h1 class="sun_title">{{ passage.title }}</h1>
    <ul>
      <li><b-icon-calendar></b-icon-calendar>{{ create_time }}</li>
      <li v-for="type in types" v-bind:key="type._id" ><span v-if="type.type_id===passage.type_id">
        <b-icon-folder></b-icon-folder>{{ type.type_name }}
      </span></li>
      <li v-for="tag in tags" v-bind:key="tag._id"><span v-if="tag.tag_id===passage.tag_id">
        <b-icon-tag></b-icon-tag>{{ tag.tag_name}}
      </span></li>
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
    passage: Object,
    types: Array,
    tags: Array
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
    },
    create_time: function () {
      let time = this.passage.create_time.slice(0, 10)
      time = time.split('-')
      const Time = parseInt(time[0]) + '年' + parseInt(time[1]) + '月' + parseInt(time[2]) + '日'
      return Time
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
