import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
// 控制视图
import {ViewCtrl} from "./ViewCtrl";
import {RouteExtend} from "./RouteExtend";
import {PageJump} from "./PageJump";
import {User} from "./User";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        activeRoute: ''// path
    },
    mutations: {
        handleActiveRoute: function (state, payload) {
            state.activeRoute = payload['path'];
        }
    },
    actions: {},
    modules: {
        ViewCtrl, // 视图
        RouteExtend, // 路由
        PageJump, // 页面跳转数据衔接
        User // 用户
    },
    // 防止刷新丢失数据 如果不设置 默认使用localStorage方式存放
    plugins: [persistedState()]
})
