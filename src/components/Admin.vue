<template>
  <div style="display: flex;justify-content: space-between;flex-direction: row">
    <div style="min-height: 100vh;max-height: 100vh;width: 15%;background-color: #59524C">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#59524C"
        text-color="#fff"
        active-text-color="#ffd04b">


        <el-menu-item index="0">
          <i class="el-icon-menu"></i>
          <span slot="title"><a href="#/">主页面</a></span>
        </el-menu-item>

        <el-menu-item index="1">
          <i class="el-icon-soccer"></i>
          <span slot="title"><a href="#/admin/pet">宠物信息管理</a></span>
        </el-menu-item>

        <el-menu-item index="-1">
          <i class="el-icon-soccer"></i>
          <span slot="title"><a href="#/admin/article">文章管理</a></span>
        </el-menu-item>

        <el-menu-item index="2">
          <i class="el-icon-user"></i>
          <span slot="title"><a href="#/admin/enp">人员信息管理</a></span>
        </el-menu-item>



        <el-menu-item index="4">
          <i class="el-icon-paperclip"></i>
          <span slot="title"><a href="#/admin/appointment">挂号预约管理</a></span>
        </el-menu-item>

        <el-menu-item index="5">
          <i class="el-icon-tickets"></i>
          <span slot="title"><a href="#/admin/his">就诊记录管理</a></span>
        </el-menu-item>



<!--        <el-menu-item index="7">-->
<!--          <i class="el-icon-menu"></i>-->
<!--          <span slot="title"><a href="#/admin/balance">余额查询</a></span>-->
<!--        </el-menu-item>-->

        <el-menu-item index="8">
          <i class="el-icon-suitcase"></i>
          <span slot="title"><a href="#/admin/medical">药品管理</a></span>
        </el-menu-item>

        <el-menu-item index="6">
          <i class="el-icon-news"></i>
          <span slot="title"><a href="#/admin/fee">处方管理</a></span>
        </el-menu-item>

        <el-menu-item index="7">
          <i class="el-icon-news"></i>
          <span slot="title"><a href="#/admin/goods">商品管理</a></span>
        </el-menu-item>

        <el-menu-item index="9">
          <i class="el-icon-connection"></i>
          <span slot="title"><a href="#/admin/role">角色列表</a></span>
        </el-menu-item>

      </el-menu>
    </div>

    <div style="width: 85%;max-height: 100vh;min-height: 100vh;overflow: scroll">
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px;color: white"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{user.account}}</span>
          <span style="margin-left: 30px;cursor: pointer" @click="logout">退出</span>
        </el-header>

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Admin",
    data(){
      return{
        user :{}
      }
    },
    methods: {
      logout(){
        window.localStorage.clear()
        this.$router.push('/')
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted() {
      let u = window.localStorage.getItem('user')
      if(u){
        this.user = JSON.stringify(u)
      }
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #59524C;
    color: white;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  a{
    text-decoration: none;
    color: whitesmoke;
  }

  a:visited{
    color: whitesmoke;
  }
</style>
