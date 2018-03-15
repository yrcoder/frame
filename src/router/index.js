import Vue from 'vue'
import Router from 'vue-router'

// 引入各个模块的路由设置，应是一个对象
import routes from './routes'

Vue.use(Router)

export default new Router({
    routes,
    linkActiveClass: 'active'
})
