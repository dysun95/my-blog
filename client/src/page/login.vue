<template>
  <div class="login">
    <div class="logo-wrap">
      <div class="logo"></div>
      <div class="text">MY BLOG</div>
    </div>
    <div class="input-wrap">
      <div class="input-filed">
        <input type="text" placeholder="username" v-model="username">
      </div>
      <div class="input-filed">
        <input type="password" placeholder="password" v-model="passwd">
      </div>
    </div>
    <div class="error-wrap"></div>
    <div class="button-wrap">
      <button class="submit" @click="login">Login</button>
      <button class="submit register" @click="register">Register</button>
    </div>
    <div class="background-image"></div>
  </div>
</template>

<script>
import {login} from '../api/login'
import toastr from '../common/toastr'
import md5 from 'blueimp-md5'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      passwd: ''
    }
  },
  methods: {
    login () {
      if (!this.username) {
        toastr.error('Username cannot be blank')
        return
      }
      if (!this.passwd) {
        toastr.error('Password cannot be blank')
        return
      }
      login({
        name: this.username,
        passwd: md5(this.passwd)
      }).then(res => {
        toastr.success('Login Success')
        this.$router.push('/')
      }).catch(err => {
        console.error(err)
      })
    },
    register () {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="less">
  .login {
    width: 363px;
    // height: 500px;
    margin: 20vh auto 0;
    padding: 50px 0;
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 4px;
    text-align: center;
    font-size: 14px;
  }
  .login {
    .logo-wrap {
      margin-bottom: 40px;
      text-align: center;
      .logo {
        display: inline-block;
        width: 180px;
        height: 60px;
        margin: 0;
        margin-bottom: 6px;
        background: url('../assets/logo.png') no-repeat;
        background-size: auto 100%;
        background-position: 50% 50%;
      }
      .text {
        // font-size: 16px;
        color: #757c80;
      }
    }
    .input-wrap {
      text-align: center;
      .input-filed {
        margin: 0px auto;
        width: 300px;
        border: solid 1px #dfebf2;
        border-bottom: none;
        border-radius: 4px 4px 0 0;
        background: #fff;
        &:last-child {
          border-bottom: solid 1px #dfebf2;
        }
        input {
          display: block;
          width: 290px;
          height: 40px;
          line-height: 40px;
          padding: 0;
          padding-left: 10px;
          border: none;
          border-radius: 4px;
          font-size: 16px;
        }
      }
    }
    .error-wrap {
      width: 300px;
      height: 12px;
      line-height: 12px;
      margin: 0 auto 3px;
      color: red;
      text-align: left;
    }
    .button-wrap {
      width: 300px;
      height: 40px;
      margin: 0 auto;
      font-size: 0;
      button {
        display: inline-block;
        width: 120px;
        height: 40px;
        line-height: 40px;
        margin: 0;
        padding: 0;
        border: none;
        border-radius: 4px;
        background-color: #25c6ff;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
      }
      .register {
        margin-left: 20px;
        background-color: aquamarine;
      }
    }
    .background-image {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: url('../assets/bg_01.jpg') no-repeat;
      background-size: cover;
      background-position: 50% 0;
      z-index: -1;
      filter: blur(2px);
    }
  }
</style>
