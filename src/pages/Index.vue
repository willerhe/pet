<template>
  <div class="page1">
    <Header/>
    <div class="content" style="min-height: 100vh" >
      <video class="banner-video" autoplay loop muted poster="">
        <source src="@/assets/homepage.mp4" type="video/mp4">
      </video>
      <div style="margin-top: 17%;">
        <div style="display: flex;justify-content: center">
          <img src="@/assets/logo.png" alt="">
          <h1 style="padding-top: 30px">派特医疗,连接生活</h1>
        </div>
        <p class="wt" align="center" style="font-size: 28px;font-weight: bolder;">派特宠物医疗集团是一家
        以宠物医疗服务为主营的大型综合性企业集团</p>
        <p  class="wt" style="font-size: 18px;font-weight: normal" align="center">业务涵盖：宠物医疗保健、实验室诊断、宠物美容造型、
          宠物商品贸易、宠物供应链、宠物<br>医院、远程互联网诊断、医疗信息化建设、兽医继续教育、宠物美容学校<br>
          宠物文化传播等，覆盖宠物产业链的主要环节！</p>
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
    components: {Footer, Header}
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

  .wt{
    color: white;
  }

</style>
