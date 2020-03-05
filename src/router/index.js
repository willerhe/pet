import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/Index";
import Blank from "../components/Blank";
import About from "../pages/About";
import Appointment from "../pages/Appointment";
import Store from "../pages/Store";
import Article from "../pages/Article";
import MyAppointment from "../pages/personal/MyAppointment";

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
    },
    {
      path: '/about',
      name: "About",
      component: About
    },
    {
      path: '/appointment',
      name: "Appointment",
      component: Appointment
    },
    {
      path: '/my-appointment',
      name: "MyAppointment",
      component: MyAppointment
    },
    {
      path: '/store',
      name: "Store",
      component: Store
    },
    {
      path: '/article',
      name: "Article",
      component: Article
    }
  ]
})
