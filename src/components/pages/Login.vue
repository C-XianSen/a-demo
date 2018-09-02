<template>
    <div>
        <van-nav-bar
        title="用户登录"
        left-text="返回"
        left-arrow
        @click-left="goBack"
        >
        </van-nav-bar>
        <div class="register-panel">
            <van-field
            v-model="username"
            label="用户名"
            icon="clear"
            placeholder="请输入用户名"
            required
            @click-icon="username = ''"
            :error-message="usernameErrorMsg"
            ></van-field>
            <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholde="请输入密码"
            :error-message="passwordErrorMsg"
            required
            ></van-field>
            <div class="register-button">
                <van-button type="primary" size="large" @click="LoginAction" :loading="openLoading">登录</van-button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import url from '@/serviceAPI.config.js'

export default {
  data () {
    return {
      username: '',
      password: '',
      openLoading: false,  // 是否出现loading效果
      usernameErrorMsg: '',  // 当用户名出现错的时候
      passwordErrorMsg: ''  // 当密码出现错的时候
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    LoginAction () {
      this.checkForm() && this.axiosLoginUser()
    },
    checkForm () {
      let isOK = true
      if (this.username.length < 5) {
        this.usernameErrorMsg = "用户名不能小于5位"
        isOK = false
      } else {
        if (this.password.length < 6) {
          this.passwordErrorMsg = "密码不能少于6位"
          isOK = false
        } else {
          this.passwordErrorMsg = ''
        }
        return isOK
      }
    },
    // ****axios登录用户方法****
    axiosLoginUser () {
      axios({
        url: url.registerUser,
        method: 'post',
        data: {
            username: this.username,
            password: this.password
        }
      })
      .then(res => {
      })
      .catch((err) => {
      })
    }
  }
}
</script>

<style>
.register-panel{
    width:96%;
    border-radius: 5px;
    margin:20px auto;
    padding-bottom:50px;
}
.register-button{
    padding-top:10px;
}
</style>
