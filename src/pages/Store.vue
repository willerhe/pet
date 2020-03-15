<template>
  <div>
    <Header/>
    <div class="content">
      <div style="padding: 40px 10%;display: flex;justify-content: center;align-items: center">
            <div style="display: flex;justify-content: start;align-items: center;flex-flow: wrap;width: 100%">
              <el-card :body-style="{ padding: '0px' }"  style="width: 20%;margin: 10px" v-for="(o, index) in goods" :key="o" :offset="index > 0 ? 2 : 0">
                <img :src="o.coverUrl" class="image" style="width: 100%;height: 200px">
                <div style="padding: 14px;">
                  <span>精品狗粮进口500g全国门店有售</span>
                  <div class="bottom clearfix">
                    <span style="color: red">￥ {{o.price}}</span>
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
  import API from '@/api/api'

  export default {
    name: "Store",
    components: {Footer, Header},
    data(){
      return{
        goods:[],
        currentDate: new Date()
      }
    },
    methods:{
      toDetail(){
        alert('查看详情')
      }
    },
    mounted() {
      API.goods.list().then(res=>{
        this.goods =  res.data.data.data
      })
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
