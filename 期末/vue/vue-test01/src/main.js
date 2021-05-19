// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import NormailizeCss from 'normalize.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import axios from 'axios'
import store from './store' //引入 Vuex 状态管理
Vue.use(ElementUI);
Vue.use('icon', Icon);
Vue.prototype.$axios = axios    // 全局注册，使用方法为this.$axios

Vue.config.productionTip = false

axios.defaults.baseURL = '/'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store,
    axios
})