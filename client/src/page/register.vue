<template>
  <div class="register">
    <div class="logo-wrap">
      <div class="logo"></div>
      <div class="text">Register your account</div>
    </div>
    <div class="input-wrap">
      <div class="input-filed">
        <input class="username" type="text" placeholder="username" v-model="username">
      </div>
      <div class="input-filed">
        <input class="passwd" type="password" placeholder="password" v-model="passwd">
      </div>
      <div class="input-filed">
        <input :class="passwdCorrect ? '' : 'wrong' " type="password" placeholder="confirm password" v-model="confirmPasswd" @input="confirm">
      </div>
    </div>
    <div class="error-wrap"></div>
    <div class="button-wrap">
      <button class="submit" @click="register">Register</button>
    </div>
    <div class="background-image"></div>
  </div>
</template>

<script>
import {register} from '../api/register'
import toastr from '../common/toastr'
import md5 from 'blueimp-md5'
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      passwd: '',
      confirmPasswd: '',
      passwdCorrect: true
    }
  },
  methods: {
    confirm () {
      if (this.confirmPasswd !== this.passwd) {
        this.passwdCorrect = false
      } else {
        this.passwdCorrect = true
      }
    },
    register () {
      if (!this.username) {
        toastr.error('Username cannot be blank')
        return
      }
      if (!this.passwd) {
        toastr.error('Password cannot be blank')
        return
      }
      if (this.confirmPasswd !== this.passwd) {
        toastr.error('Check password and confirm password')
        return
      }
      register({
        name: this.username,
        passwd: md5(this.passwd)
      }).then(res => {
        toastr.success('Register Success: ' + this.username)
        this.$router.push('/login')
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

<style lang="less">
  .register {
    width: 363px;
    // height: 500px;
    margin: 20vh auto 0;
    padding: 50px 0;
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 4px;
    text-align: center;
    font-size: 14px;
  }
  .register {
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
        .wrong {
          outline-color: #ff0000;
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
      button {
        display: block;
        width: 300px;
        height: 40px;
        line-height: 40px;
        margin: 0;
        padding: 0;
        border: none;
        border-radius: 4px;
        background-color: #25c6ff;
        color: #fff;
        font-size: 16px;
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
