<template>
  <div>
    <Header/>
    <div class="content">
      <div style="padding: 40px 10%;display: flex;justify-content: center;align-items: center">
            <div style="display: flex;justify-content: start;align-items: center;flex-flow: wrap">
              <el-card :body-style="{ padding: '0px' }"  style="width: 25%;margin: 10px" v-for="(o, index) in 8" :key="o" :offset="index > 0 ? 2 : 0">
                <img src="@/assets/store1.png" class="image">
                <div style="padding: 14px;">
                  <span>精品狗粮进口500g全国门店有售</span>
                  <div class="bottom clearfix">
                    <span style="color: red">￥ 188元</span>
                    <el-button type="text" class="button" @click="toDetail">-</el-button>
                  </div>
                </div>
              </el-card>
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
    name: "Store",
    components: {Footer, Header},
    data(){
      return{
        currentDate: new Date()
      }
    },
    methods:{
      toDetail(){
        alert('查看详情')
      }
    }
  }
</script>

<style scoped>
  .content {
    min-height: 70vh;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    max-height: 300px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
