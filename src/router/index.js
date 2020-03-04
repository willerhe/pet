import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/Index";
import Blank from "../components/Blank";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect:'/index',
      component: Blank
    },
    {
      path: '/index',
      name: "Index",
      component: Index
    }
  ]
})
