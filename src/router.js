import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

const createView = relativePath => () => import('@/views/' + relativePath)

/**
 * 创建可用于组建一级菜单及其子菜单的路由
 * @param {Object[]} routes - 菜单下的子菜单路由集合
 * @param {String=} name - 菜单名称，为空时其子菜单将与该菜单同级
 * @param {String=} icon - 菜单图标
 */
const createMenuRoutes = (routes, name, icon) => ({
  path: '/', component: Layout, children: routes, name, icon
})

export default new Router({
  routes: [
    { path: '/login', component: createView('Login'), hidden: true },
    createMenuRoutes([
      { path: '/', component: createView('Demo'), name: '控制面板', icon: 'home' }
    ]),
    createMenuRoutes([
      { path: '/demo1', component: createView('Demo'), name: '子菜单1' },
      { path: '/demo2', component: createView('Demo'), name: '子菜单2' }
    ], '测试菜单1', 'equalizer'),
    createMenuRoutes([
      { path: '/demo3', component: createView('Demo'), name: '子菜单3' },
      { path: '/demo4', component: createView('Demo'), name: '子菜单4' }
    ], '测试菜单2', 'map')
  ]
})
