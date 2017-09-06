<template>
  <div class="header">
    <span class="logo">后台管理系统</span>
    <div class="user-info">
      <el-dropdown trigger="click" @command="handleCommand">
        <a class="el-dropdown-link">
          {{name}}
        </a>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Admin'
    }
  },
  methods: {
    handleCommand(command) {
      if (command === 'loginout') {
        this.$router.replace('/login')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #fff;
  background-color: #242f42;

.logo
  margin-left: 20px;

.user-info
  float: right;
  margin-right: 20px;

.user-info .el-dropdown-link
  padding: 15px;
  color: #fff;
  cursor: pointer;
</style>
