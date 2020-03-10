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

        <div style="display: flex;justify-content: center;flex-direction: column;">
          <el-input
            placeholder="请输入昵称"
            class="mt-10"
            v-model="user.nickname"
            prefix-icon="el-icon-search">
          </el-input>
          <el-input
            placeholder="请输入账号"
            class="mt-10"
            v-model="user.account"
            prefix-icon="el-icon-search">
          </el-input>

          <el-input
            placeholder="请输入密码" class="mt-10"
            v-model="user.password"
            prefix-icon="el-icon-search">
          </el-input>

          <el-input
            placeholder="请再次输入密码" class="mt-10"
            v-model="user.password1"
            prefix-icon="el-icon-search">
          </el-input>
          <el-input
            placeholder="请输入手机号" class="mt-10"
            v-model="user.phoneNumber"
            prefix-icon="el-icon-search">
          </el-input>
          <el-input
            placeholder="请输入所在邮箱" class="mt-10"
            v-model="user.email"
            prefix-icon="el-icon-search">
          </el-input>
          <el-input
            placeholder="请输入所在地址" class="mt-10"
            v-model="user.address"
            prefix-icon="el-icon-search">
          </el-input>
          <el-button type="success" class="mt-10" @click="doRegister">立即注册</el-button>
          <div style="display: flex;justify-content: end;flex-direction: row">
            <a href="javascript:;" @click="toLogin" style="color: white;text-decoration: none;" class="mt-10"> 已有账户？去登录</a>
          </div>
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
    name: "Register",
    components: {LeaveWord, Footer, Header},
    data() {
      return {
        user:{},
        numbers: [1300, 15000, 50, 600, 15, 1200]
      }
    },
    methods:{
      doRegister(){
        console.log('当前的用户', this.user)
        this.user.roles = 'vip'
        API.register(this.user).then(res=>{
          if(res.data.ok){
            this.$message.success('注册成功,请登录')
            this.$router.push('/login')
          }
        })

      },
      toLogin(){
        this.$router.push('/login')
      }
    },
    mounted() {
      // /*1.拿到div元素对象*/
      // var elems = document.getElementsByName('grid');
      // /*2.监听window的滚动*/
      // window.addEventListener('scroll', () => {
      //   const rect = elems[0].getBoundingClientRect();
      //   /*3.通过rect的属性判断该元素是否在窗口中*/
      //   const inViewport = rect.bottom > 0 && rect.right > 0 &&
      //     rect.left < window.innerWidth &&
      //     rect.top < window.innerHeight;
      //   console.log(elems[0].innerText, inViewport);
      //   /*4.如果div出现在窗口（div可见）添加css动画*/
      //   if (inViewport) {
      //     elems[0].style.transform = 'scale(1.1, 1.1)'
      //     elems[0].style.transition = 'transform 1s linear'
      //   } else {
      //     elems[0].style = ''
      //   }
      // });
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
