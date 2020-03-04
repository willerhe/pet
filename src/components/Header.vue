<template>
 <div>
   <el-menu
     :default-active="activeIndex2"
     class="el-menu-demo"
     mode="horizontal"
     @select="handleSelect"
     background-color="#0f1925"
     text-color="#fff"
     active-text-color="#ffd04b">
     <el-menu-item index="1">首页</el-menu-item>
     <el-menu-item index="2">养宠CLUB</el-menu-item>
     <el-menu-item index="3">核心业务</el-menu-item>
     <el-menu-item index="4">关于我们</el-menu-item>
     <el-menu-item index="5">预约挂号</el-menu-item>
     <el-menu-item index="6">宠物商城</el-menu-item>
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
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>
