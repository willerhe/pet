import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/Index";
import Blank from "../components/Blank";
import About from "../pages/About";
import Appointment from "../pages/Appointment";
import Store from "../pages/Store";
import Article from "../pages/Article";
import MyAppointment from "../pages/personal/MyAppointment";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyPets from "../pages/personal/MyPets";
import MyInformation from "../pages/personal/MyInformation";
import Admin from "../components/Admin";
import Dashboard from "../pages/admin/Dashboard";
import MySpace from "../pages/personal/MySpace";
import PetManager from "../pages/admin/PetManager";
import EnpManager from "../pages/admin/EnpManager";
import CustomerManager from "../pages/admin/CustomerManager";
import HisManager from "../pages/admin/HisManager";
import FeeManager from "../pages/admin/FeeManager";
import BalanceManager from "../pages/admin/BalanceManager";
import MedicalManager from "../pages/admin/MedicalManager";
import RoleManager from "../pages/admin/RoleManager";
import AppointmentManager from "../pages/admin/AppointmentManager";
import TakePrescription from "../pages/admin/TakePrescription";

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
    },
    {
      path: '/login',
      name: "Login",
      component: Login
    },
    {
      path: '/register',
      name: "register",
      component: Register
    },
    {
      path: '/my-pets',
      name: "MyPets",
      component: MyPets
    },
    {
      path: '/my-info',
      name: "MyInfo",
      component: MyInformation
    },
    {
      path: '/my-space',
      name: "MySpace",
      component: MySpace
    },
    {
      path: '/admin',
      name: "Admin",
      component: Admin,
      redirect:'/admin/dashboard',
      children:[
        {
          path: 'pet',
          name: "pet",
          component: PetManager,
        },
        {
          path: 'dashboard',
          name: "Dashboard",
          component: Dashboard,
        },
        {
          path: 'enp',
          name: "enp",
          component: EnpManager,
        },
        {
          path: 'customer',
          name: "customer",
          component: CustomerManager,
        },
        {
          path: 'his',
          name: "his",
          component: HisManager,
        },
        {
          path: 'fee',
          name: "fee",
          component: FeeManager,
        },
        {
          path: 'balance',
          name: "balance",
          component: BalanceManager,
        },
        {
          path: 'medical',
          name: "medical",
          component: MedicalManager,
        },
        {
          path: 'role',
          name: "role",
          component: RoleManager,
        },
        {
          path: 'appointment',
          name: "appointment",
          component: AppointmentManager,
        },
        {
          path: 'prescription',
          name: "prescription",
          component: TakePrescription,
        },
      ]
    }
  ]
})
