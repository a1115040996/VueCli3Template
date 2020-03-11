import Vue from 'vue'
import Element from 'element-ui'
import '../assets/element-variables.scss'

// 全局注册 nav组件
import AppNav from '../components/nav/AppNav';
Vue.component('AppNav', AppNav);
Vue.use(Element)
