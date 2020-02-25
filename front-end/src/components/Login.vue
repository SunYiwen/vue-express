<template>
  <div class="login">
    <b-container>
      <b-row>
        <b-col>
          <img :src='url'/>
        </b-col>
        <b-col class="form_outter">
          <form class="login_form" @submit="tryLogin">
            <h1>Log in</h1>
            <br/>
            <label for="text-username">Username</label>
            <b-input v-model="username" type="text" id="text-username" ></b-input>

            <label for="text-password">Password</label>
            <b-input v-model="password" type="password" id="text-password" ></b-input>

            <b-button type="submit" class="sun_button">Log in</b-button>
          </form>
        </b-col>
      </b-row>
    </b-container>

  </div>

</template>

<script>
const https = require('../../http.js')
export default {
  name: 'Login',
  data () {
    var urls = require('../assets/bread-on.jpg')
    return {
      url: urls,
      username: '',
      password: '',
      success: false
    }
  },
  methods: {
    tryLogin (e) {
      const that = this
      https.fetchPost('/user', {
        username: this.username,
        password: this.password
      })
        .then(function (ret) {
          if (ret.data) {
            that.$router.push('/admin')
          }
        })
      e.preventDefault()
    }
  }
}
</script>

<style scoped>
  *{
    box-sizing: border-box;
  }
  img{
    width: 100%;
    height: 100%;
    float: left;
  }
  .form_outter{
    text-align: left;
    float: right;
    width: 50%;
  }
  .login_form{
    width: 70%;
    margin: 0 auto;
    margin-top: 30%;
  }
  .sun_button{
    width:100%;
    margin-top: 5%;
    background-color: #f2d061;
    opacity: 0.8;
    border:0;

  }
  .sun_button:hover{
    background-color: #f2d061;
    border:0;
  }
  .sun_button:focus{
    background-color: #f2d061;
    border:0;
  }
  .container{
    padding: 0;
    margin-top: 5%;
    background-color: #efefef;
    border-radius:5%;
  }
</style>
