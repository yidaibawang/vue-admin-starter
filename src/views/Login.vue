<template>
  <div class="login-page">
    <div class="title">后台管理系统</div>
    <el-form class="form" :model="form" :rules="rules" ref="form" label-width="0px">
      <el-form-item prop="username">
        <el-input v-model="form.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="密码" v-model="form.password" @keyup.enter.native="submitForm"></el-input>
      </el-form-item>
      <div class="buttons">
        <el-button type="primary" @click="submitForm">登录</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import store from '../utils/store'
import { login } from '../api'
export default {
  data: function() {
    return {
      form: {
        username: 'admin',
        password: 'password'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (!valid) return
        login(this.form).then(data => {
          store.setUser(data)
          this.$router.replace('/')
        })
      })
    }
  }
}
</script>

<style lang="stylus">
.login-page
  position: relative;
  width: 100%;
  height: 100%;
  background: #324157;
  .title
    position: absolute;
    top: 50%;
    width: 100%;
    margin-top: -230px;
    text-align: center;
    font-size: 30px;
    color: #fff;
  .form
    position: absolute;
    left: 50%;
    top: 50%;
    width: 300px;
    height: 160px;
    margin: -150px 0 0 -190px;
    padding: 40px;
    border-radius: 5px;
    background: #fff;
  .buttons
    text-align: center;
    button
      width: 100%;
      height: 36px;
</style>
