<template>
  <div class="page1">
    <Header/>
    <LeaveWord style="z-index: 100000"/>
    <div class="content" style="min-height: 100vh;display: flex;justify-content: center;align-items: center">
      <video class="banner-video" autoplay loop muted poster="">
        <source src="@/assets/homepage.mp4" type="video/mp4">
      </video>
      <div>
        <div style="display: flex;justify-content: center;align-items: center">
          <img src="@/assets/logo.png" alt="" style="width: 120px;border-radius: 40px">
          <p style="margin-left: 10px;letter-spacing: 3px;font-size: 38px;font-weight: bolder">派特医疗,连接生活</p>
        </div>

        <div style="display: flex;justify-content: center;flex-direction: column;" v-if="!isLogin">
          <el-input
            placeholder="请输入账号"
            class="mt-10"
            v-model="user.account"
            prefix-icon="el-icon-search">
          </el-input>
          <el-input
            placeholder="请输入密码" class="mt-10"
            show-password
            v-model="user.password"
            prefix-icon="el-icon-search">
          </el-input>
          <el-button type="success" class="mt-10" @click="toLogin">登录</el-button>
          <div style="display: flex;justify-content: end;flex-direction: row">
            <a href="javascript:;" @click="toRegister" style="color: white;text-decoration: none;" class="mt-10"> 没有账户？
              去创建</a>
          </div>
        </div>
        <div v-else>
          <p style="color: white;font-size: 20px;letter-spacing: 10px;" align="center">已登录</p>
        </div>
      </div>


    </div>
    <div class="grid-group">
      <div name="grid" class="bg1">
        <div>
          <p align="center" style="font-size: 24px;color: #5E6360">
          <span style="color: #5E6360;font-size: 100px;margin-right: -30px;margin-bottom: -30px">
         1200
        </span> +家</p>
          <p align="center" style="font-size: 22px;color: #5E6360">全球分院</p>
          <p align="center" style="font-size: 12px;color: #5E6360">GLOBAL BRANCH</p>
        </div>
      </div>
      <div class="bg2">

        <div>
          <p align="center" style="font-size: 24px;color: #5E6360">
          <span style="color: #5E6360;font-size: 100px;margin-right: -30px;margin-bottom: -30px">
         15000
        </span> +名</p>
          <p align="center" style="font-size: 22px;color: #5E6360">员工总数</p>
          <p align="center" style="font-size: 12px;color: #5E6360">TOTAL EMPLOYEES</p>
        </div>

      </div>
      <div class="bg3">
        <div>
          <p align="center" style="font-size: 24px;color: #5E6360">
            <span style="color: #5E6360;font-size: 100px;margin-right: -30px;margin-bottom: -30px">50</span></p>
          <p align="center" style="font-size: 22px;color: #5E6360">覆盖城市</p>
          <p align="center" style="font-size: 12px;color: #5E6360">COVERING CITIES</p>
        </div>

      </div>
      <div class="bg4">


        <div>
          <p align="center" style="font-size: 24px;color: #5E6360">
            年
            <span style="color: #5E6360;font-size: 100px;margin-right: -30px;margin-bottom: -30px">
         600
        </span>&nbsp;万</p>
          <p align="center" style="font-size: 22px;color: #5E6360">诊逾病例</p>
          <p align="center" style="font-size: 12px;color: #5E6360">PRACTICING VETERINGARIAN</p>
        </div>

      </div>
      <div class="bg5">


        <div>
          <p align="center" style="font-size: 24px;color: #5E6360">
            设
            <span style="color: #5E6360;font-size: 100px;margin-right: -30px;margin-bottom: -30px">
         15
        </span>&nbsp;大</p>
          <p align="center" style="font-size: 22px;color: #5E6360">宠物专科</p>
          <p align="center" style="font-size: 12px;color: #5E6360">PET SPECIALIST</p>
        </div>

      </div>
      <div class="bg6">
        <div>
          <p align="center" style="font-size: 24px;color: #5E6360">
            <span style="color: #5E6360;font-size: 100px;margin-right: -30px;margin-bottom: -30px">
         1200
        </span>&nbsp;名</p>
          <p align="center" style="font-size: 22px;color: #5E6360">职业兽医</p>
          <p align="center" style="font-size: 12px;color: #5E6360">DIAGNOSIS EACH YEAR</p>
        </div>

      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>

  import Header from "../components/Header";
  import Footer from "../components/Footer";
  import LeaveWord from "../components/LeaveWord";
  import API from '@/api/api'

  export default {
    name: "Index",
    components: {LeaveWord, Footer, Header},
    data() {
      return {
        isLogin: false,
        numbers: [1300, 15000, 50, 600, 15, 1200],
        user: {}
      }
    },
    methods: {
      toLogin() {
        if (this.user.account === '') {
          this.$message.warning('请输入账号')
          return
        }
        if (this.user.password === '') {
          this.$message.warning('请输入密码')
        }
        let _this = this
        API.login(this.user).then(res => {
          if (res.data.data.reason) {
            console.log(res.data.data.reason)
            _this.$message.warning(res.data.data.reason)

          }else{
            if (res.data.ok) {
              _this.$message.success('登录成功')
              window.localStorage.setItem('user', JSON.stringify(res.data.data.data))
              location.reload();
            }
          }

        })
      },
      toRegister() {
        this.$router.push('/register')
      }
    },
    mounted() {

      let user = window.localStorage.getItem('user')
      if (user) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    }

  }
</script>

<style scoped>
  .banner-video {
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    /*background: url(../images/homepage.jpg) no-repeat;*/
    background-size: cover;
  }

  .page1 {
    background-color: rgba(0, 104, 183, 0.2);
    z-index: 10;
  }

  .wt {
    color: white;
  }


  .grid-group {
    display: flex;
    flex-flow: wrap;
    width: 100vw;
  }

  .grid-group > div {
    width: 33.3%;
    height: 50vh;
    background-size: cover;
    min-height: 100%;
    max-font-size: 100%;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bg1 {
    background: url("../assets/index-bg1.png") no-repeat no-repeat;
  }

  .bg2 {
    background: url("../assets/index-bg2.png") no-repeat no-repeat;
  }

  .bg3 {
    background: url("../assets/index-bg3.png") no-repeat no-repeat;
  }

  .bg4 {
    background: url("../assets/index-bg4.png") no-repeat no-repeat;
  }

  .bg5 {
    background: url("../assets/index-bg5.png") no-repeat no-repeat;
  }

  .bg6 {
    background: url("../assets/index-bg6.png") no-repeat no-repeat;
  }

  p {
    margin: 10px;
  }


</style>
