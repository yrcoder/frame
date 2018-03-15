import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations, actions, getters } from './global'

// 引入各个模块的store
import home from './partial/home'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        home
    }
})
