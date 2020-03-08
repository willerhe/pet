<template>
 <div>
   <el-menu
     :default-active="activeIndex2"
     mode="horizontal"
     style="display: flex;justify-content: space-between"
     @select="handleSelect"
     background-color="#0f1925"
     text-color="#fff"
     active-text-color="#ABCD04">

     <el-menu-item>
       <img src="@/assets/logo_small.png" alt="" style="width: 50px;padding: 3px;border-radius: 15px">
       <span style="font-weight: bolder;font-size: large;letter-spacing: 3px">派特宠物</span>
     </el-menu-item>
     <el-menu-item index="1"><a href="/">首页</a></el-menu-item>
     <el-menu-item index="5"><a href="#/appointment">预约挂号</a></el-menu-item>
     <el-menu-item index="6"><a href="#/store">宠物商城</a></el-menu-item>
     <el-menu-item index="4"><a href="#/about">关于我们</a></el-menu-item>
     <el-menu-item >
       <div @click="tips">
         <i class="el-icon-phone"></i>
         <span style="margin-left: 5px">400 8088 2088</span>
       </div>
     </el-menu-item>
     <el-menu-item v-if="!isLogin"><el-button plain style="background-color: #0f1925;color: white" @click="toLogin">登录/注册</el-button></el-menu-item>
     <el-menu-item v-else>

       <el-button plain style="background-color: #0f1925;color: white" @click="mySpace">个人中心</el-button>
       <el-button plain style="background-color: #0f1925;color: white" @click="toAdmin" v-if="">管理后台</el-button>

       <el-button plain style="background-color: #0f1925;color: white" @click="logout">退出</el-button>


     </el-menu-item>
   </el-menu>
 </div>


</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        isLogin:false,
        activeIndex: '1',
        activeIndex2: '1',
        isAdmin:false
      };
    },
    methods: {
      toAdmin(){
        this.$router.push('/admin')
      },
      mySpace(){
        this.$router.push('/my-space')
      },
      tips(){
        alert('已复制到粘贴板')
      },
      toLogin(){
        this.$router.push('/login')
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      logout(){
        window.localStorage.clear()
        this.$router.push('/')
        location.reload();
      }
    },
    mounted() {
      let user = window.localStorage.getItem('user')
      if (user){
        if(user.indexOf('admin') > -1){
          this.isAdmin = true
          debugger
        }
        this.isLogin = true
      }else{
        this.isLogin = false
      }
    }
  }
</script>

<style scoped>
  a{
    text-decoration: none;
  }

</style>
