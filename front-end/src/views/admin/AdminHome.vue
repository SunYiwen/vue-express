<template>
    <div>
      <div class="header">
        <h1 class="title">Sun Yiwen's Blog<img src="https://img.icons8.com/doodle/96/000000/sun.png"></h1>
        <div class="sun_nav">
          <b-nav>
            <b-nav-item><router-link to="/admin/home">Home</router-link></b-nav-item>
            <b-nav-item><router-link to="/admin/blogs">Blogs</router-link></b-nav-item>
            <b-nav-item><router-link to="/admin/types">Types</router-link></b-nav-item>
            <b-nav-item><router-link to="/admin/tags">Tags</router-link></b-nav-item>
          </b-nav>
        </div>
        <hr/>
      </div>
      <router-view></router-view>
      <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../../components/Footer'
export default {
  name: 'AdminHome',
  components: { Footer }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Lacquer|Lemonada&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Barlow|Lacquer|Lemonada&display=swap');
  .header{
    width:80%;
    margin: 0 auto;
  }
  .title{
    font-family: 'Lacquer', sans-serif;
    font-family: 'Lemonada', cursive;
    margin: 0 5%;
  }
  hr{
    background-color: #e13d3d;
    height:1px;
    border:none;
    margin: 0;
  }
  .sun_nav{
    font-family: 'Lacquer', sans-serif;
    font-family: 'Lemonada', cursive;
    font-family: 'Barlow', sans-serif;
    font-size: 20px;
    margin: 0 auto;
    margin-top: 3%;
    padding-left: 10%;
  }
  .nav-link {
    display: block;
    padding: 0.5rem 6rem;
  }

</style>
