<template>
  <div>
    <Header/>
    <div>
      <p style="color: #ABCD04;font-size: 28px;letter-spacing: 5px" align="center">派特宠物医师团队</p>
      <img src="@/assets/about-people.png" alt="">
    </div>
    <div style="background-color: #ABCD04;margin-top: -3px">
      <img src="@/assets/about2.png" alt="">
    </div>
    <div style="display: flex;justify-content: start;align-items: center;padding-left: 80px">
      <img src="@/assets/honor.png" alt="" style="width: 74px;height: 69px">
      <p style="font-size: 45px;color: #ABCD04">荣誉证书</p>
    </div>
    <div style="display: flex;padding-left: 45px;padding-right: 45px;justify-content: space-between">
      <div style="width: 40%;height: 500px;background-color: #ABCD04;margin-right: 30px">
        <div style="padding-top:15px;padding-left: 45px">
          <p style="font-size: 134px;margin:10px;color: white" align="center">2019</p>
          <p style="font-size: 57px;margin:10px;color: white">派特宠物医疗集团</p>
          <p style="font-size: 76px;margin:10px;color: white">荣誉证书</p>
        </div>
      </div>
      <div style="width: 60%">
        <img src="@/assets/奖牌1.jpg" alt="">
        <img src="@/assets/奖牌2.jpg" alt="">
        <img src="@/assets/奖牌3.jpg" alt="">
        <img src="@/assets/奖牌4.jpg" alt="">
        <img src="@/assets/奖牌5.jpg" alt="">
        <img src="@/assets/奖牌6.jpg" alt="">
      </div>
    </div>


    <div style="display: flex;justify-content: start;align-items: center;padding-left: 80px">
      <img src="@/assets/honor.png" alt="" style="width: 74px;height: 69px">
      <p style="font-size: 45px;color: #ABCD04">精良设备</p>
    </div>
    <div>
      <el-carousel :interval="4000" type="card" height="500px">
        <el-carousel-item >
          <img src="@/assets/eq1.png" alt="" style="width: 100%">
        </el-carousel-item>
        <el-carousel-item >
          <img src="@/assets/eq2.jpg" alt="" style="width: 100%">
        </el-carousel-item>
        <el-carousel-item >
          <img src="@/assets/eq3.jpg" alt="" style="width: 100%">
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/eq4.jpg" alt="" style="width: 100%">
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/eq5.jpg" alt="" style="width: 100%">
        </el-carousel-item>
      </el-carousel>
    </div>
    <Footer style="margin-top: 150px"/>

  </div>
</template>

<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";

  export default {
    name: "About",
    data() {
      return {
        items: [
          {src: "@/assets/eq1.jpg"},
          {src: "@/assets/eq2.jpg"},
          {src: "@/assets/eq3.jpg"},
          {src: "@/assets/eq4.jpg"},
          {src: "@/assets/eq5.jpg"}
        ]
      }
    },
    components: {Footer, Header}
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
