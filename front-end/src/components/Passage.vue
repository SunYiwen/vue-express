<template>
  <div class="passage">
    <h1 class="sun_title">{{ passage.title }}</h1>
    <ul>
      <li><b-icon-calendar></b-icon-calendar>{{ create_time }}</li>
      <li><b-icon-folder></b-icon-folder>{{ getTypeName }}</li>
      <li><b-icon-tag></b-icon-tag>{{ getTagName }}</li>
      <li><b-icon-eye></b-icon-eye>{{ passage.read_Time}}</li>
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
  data () {
    return {
      // typeName: '',
      // tagName: ''
    }
  },
  mounted () {
  },
  created () {
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
    },
    getTypeName: function () {
      const typeId = this.passage.type_id
      const type = this.types.find(function (item) {
        return item.type_id === typeId
      })
      if (type === undefined) {
        return ''
      } else {
        return type.type_name
      }
    },
    getTagName: function () {
      const tagId = this.passage.tag_id
      const tag = this.tags.find(function (item) {
        return item.tag_id === tagId
      })
      if (tag === undefined) {
        return ''
      } else {
        return tag.tag_name
      }
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
    //float: left;
  }
  li{
    list-style-type:none;
    display:inline;
    margin-right:10px;
    font-size: 13px;
    margin-bottom: 20px;
    color: #777676;
  }
  .description{
    clear: left;
  }
</style>
