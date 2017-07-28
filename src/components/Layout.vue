<template>
  <div>
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-if="parentMenuName">{{parentMenuName}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{menuName}}</el-breadcrumb-item>
    </el-breadcrumb>
    <transition name="move" mode="out-in">
      <div class="content-body">
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
import vHeader from './Header'
import vSidebar from './Sidebar'
export default {
  components: {
    vHeader,
    vSidebar
  },
  computed: {
    menuName() {
      return this.$route.name
    },
    parentMenuName() {
      const routes = this.$router.options.routes.filter(x => !x.hidden)
      for (let route of routes) {
        if (route.children.find(x => x.path === this.$route.path)) {
          return route.name
        }
      }
      return null
    }
  },
  mounted() {
  }
}
</script>

<style>
.el-breadcrumb {
  position: absolute;
  top: 60px;
  left: 250px;
  right: 0;
  display: block;
  width: auto;
  height: 36px;
  line-height: 38px;
  padding: 0 15px;
  background: #f5f7f9;
  border-bottom: 1px solid #eee;
}

.el-breadcrumb__item__inner {
  color: #777 !important;
  cursor: unset !important;
}

.content-body {
  position: absolute;
  left: 250px;
  right: 0;
  top: 96px;
  bottom: 0;
  padding: 15px;
  width: auto;
  box-sizing: border-box;
  overflow-y: scroll;
}
</style>
