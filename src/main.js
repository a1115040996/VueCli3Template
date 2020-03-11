import Vue from 'vue'
import './plugins/element.js'
import './utils/validate.js'; // 验证
import './utils/forbidRepeatClick.js'; // 防抖
import './utils/toast.js'; // 封装弹窗配置项 防止后期全局替换toast
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false;


/*  测试mock 数据 */
/*import {mock} from "./mock/index";
mock.bootstrap();*/
/* end 测试mock 数据 */



// 追加axios 接口请求插件
import './style.less'; // 引入 全局样式
export const MainVue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
