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
     <el-menu-item index="2">养宠CLUB</el-menu-item>
     <el-menu-item index="4"><a href="#/about">关于我们</a></el-menu-item>
     <el-menu-item index="5">预约挂号</el-menu-item>
     <el-menu-item index="6">宠物商城</el-menu-item>
     <el-menu-item >
       <div @click="tips">
         <i class="el-icon-phone"></i>
         <span style="margin-left: 5px">400 8088 2088</span>
       </div>
     </el-menu-item>
     <el-menu-item ><el-button plain style="background-color: #0f1925;color: white">登录/注册</el-button></el-menu-item>
   </el-menu>
 </div>


</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      tips(){
        alert('已复制到粘贴板')
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  a{
    text-decoration: none;
  }

</style>
