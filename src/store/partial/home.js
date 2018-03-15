import _ from 'lodash'
import Ajax from '@/axios'

export default {
    name: 'home',
    state() {
        return {
            list: null
        }
    },
    // mutation 命名：动作 + 模块名 + 变量名
    mutations: {
        // 初始化 home 模块中的变量 list
        initHomeList(state, data) {
            state.list = data
        },
        // 添加
        pushHomeList() {
        },
        // 更新
        updateHomeList() {
        },
        // 删除
        deleteHomeList() {
        }
    },
    getters: {
    },
    // axtions 命名：请求类型 + 模块名 + 变量名
    actions: {
        getHomeList({ commit }) {
            Ajax.get('/home/list').then(r => {
                const arr = _.concat(r.data, [{ name: '李月茹' }])
                commit('initHomeList', arr)
            })
        },
        putHomeList() {
        },
        postHomeList() {
        },
        deleteHomeList() {
        }
    }
}
