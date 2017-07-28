<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
html, body, #app
  padding: 0
  margin: 0
  height: 100%
  width: 100%

body
	font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Microsoft YaHei', SimSun
	font-size: 14px
	-webkit-font-smoothing: antialiased

hr
  box-sizing: content-box
  height: 1px
  padding: 0
  margin: 16px 0
  background-color: #eee
  border: 0 none

input, textarea, keygen, select, button
  font-family: inherit

.fade-enter-active, .fade-leave-active
	transition: all .2s ease
.fade-enter, .fade-leave-active
	opacity: 0
</style>
