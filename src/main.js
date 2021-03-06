// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入elementui框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入element 内置动画
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(ElementUI)

Vue.config.productionTip = false

// 导入自定义css
import './style/style.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
