<template>
  <div class="about">
    <div id="nav">
      <Header></Header>
    </div>
    <h1>This is an about page</h1>
    <div id="footer">
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  components: { Header, Footer }
}
</script>
