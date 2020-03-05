<template>
  <div class="page1">
    <Header/>
    <div class="content" style="min-height: 100vh;display: flex;justify-content: center;align-items: center">
      <video class="banner-video" autoplay loop muted poster="">
        <source src="@/assets/homepage.mp4" type="video/mp4">
      </video>
      <div>
        <div style="display: flex;justify-content: center;align-items: center">
          <img src="@/assets/logo.png" alt="" style="width: 120px;border-radius: 40px">
          <p style="margin-left: 10px;letter-spacing: 3px;font-size: 38px;font-weight: bolder">派特医疗,连接生活</p>
        </div>
        <p class="wt" align="center" style="font-size: 28px;font-weight: bolder;">派特宠物医疗集团是一家
          以宠物医疗服务为主营的大型综合性企业集团</p>
        <p class="wt" style="font-size: 18px;font-weight: normal" align="center">业务涵盖：宠物医疗保健、实验室诊断、宠物美容造型、
          宠物商品贸易、宠物供应链、宠物<br>医院、远程互联网诊断、医疗信息化建设、兽医继续教育、宠物美容学校<br>
          宠物文化传播等，覆盖宠物产业链的主要环节！</p>
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

  export default {
    name: "Index",
    components: {Footer, Header},
    data() {
      return {
        numbers: [1300, 15000, 50, 600, 15, 1200]
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
