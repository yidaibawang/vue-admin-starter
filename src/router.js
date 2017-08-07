import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'

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
      { path: '/', component: createView('Home'), name: '控制面板', icon: 'home' },
      { path: '/user', component: createView('User'), name: '用户管理', icon: 'people' }
    ]),
    createMenuRoutes([
      { path: '/system', component: createView('System'), name: '参数设置' }
    ], '系统管理', 'equalizer'),
    createMenuRoutes([
      { path: '/data/roleType', component: createView('Home'), name: '用户角色' }
    ], '数据字典', 'map')
  ]
})
