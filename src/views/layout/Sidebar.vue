<template>
  <div class="sidebar">
    <el-menu :default-active="$route.path" theme="dark" unique-opened router>
      <template v-for="(item, index) in routes">
        <el-submenu v-if="item.name" :index="index+''">
          <template slot="title">
            <i :class="'icon-'+item.icon"></i>{{item.name}}
          </template>
          <el-menu-item v-if="!child.hidden" v-for="child in item.children" :index="child.path" :key="child.path">
            {{child.name}}
          </el-menu-item>
        </el-submenu>
        <template v-else>
          <el-menu-item v-if="!child.hidden" v-for="child in item.children" :index="child.path" :key="child.path">
            <i :class="'icon-'+child.icon"></i> {{child.name}}
          </el-menu-item>
        </template>

      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  computed: {
    routes() {
      return this.$router.options.routes.filter(x => !x.hidden)
    }
  }
}

</script>

<style lang="stylus" scoped>
.sidebar
  position: absolute;
  width: 250px;
  left: 0;
  top: 50px;
  bottom: 0;
  background: #324157;

.sidebar>ul
  height: 100%;

.el-menu [class^=icon]
  margin-right: 8px;
</style>
