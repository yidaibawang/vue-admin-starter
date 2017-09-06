<template>
  <div>
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-if="parentMenuName">{{parentMenuName}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{menuName}}</el-breadcrumb-item>
      <el-button type="text" v-if="currentRoute.hidden" @click="$router.go(-1)">返回</el-button>
    </el-breadcrumb>
    <transition name="move" mode="out-in">
      <div id="content-body">
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
  methods: {
    getCurrentRoute(routes) {
      const route = routes.find(x => x.path === this.$route.path || x.name === this.$route.name)
      if (route) return route
      for (let r of routes) {
        if (r.children && r.children.length) {
          const route2 = this.getCurrentRoute(r.children)
          if (route2) return route2
        }
      }
      return undefined
    }
  },
  computed: {
    menuName() {
      return this.$route.name
    },
    currentRoute() {
      return this.getCurrentRoute(this.$router.options.routes)
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

<style lang="stylus">
.el-breadcrumb
  position: absolute;
  top: 50px;
  left: 250px;
  right: 0;
  display: block;
  width: auto;
  height: 36px;
  line-height: 38px !important;
  padding: 0 15px;
  background: #f5f7f9;
  border-bottom: 1px solid #eee;

.el-breadcrumb__item__inner
  color: #777 !important;
  cursor: unset !important;

#content-body
  position: absolute;
  left: 250px;
  right: 0;
  top: 86px;
  bottom: 0;
  padding: 15px 15px 30px;
  width: auto;
  box-sizing: border-box;
  overflow-y: scroll;
</style>
