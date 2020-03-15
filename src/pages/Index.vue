<template>
  <div>
    <Header/>
    <div class="content">
      <div style="margin-top: 100px">
        <p style="font-size: 45px;color: #ABCD04;margin: 0px" align="center">汪星人课堂</p>
        <p align=center style="font-size: 25px;color: #ABCD04;margin: 0px">DOG ENCYCLOPEDIA</p>

        <div class="jibing-list">
          <ul>
            <li>疫苗</li>
            <li>呕吐</li>
            <li>驱虫</li>
            <li>掉毛</li>
            <li>寄生虫</li>
            <li>拉稀</li>
            <li>发抖</li>
            <li>犬瘟</li>
            <li>肿瘤</li>
            <li>细小</li>
            <li>打喷嚏</li>
            <li>咳嗽</li>
            <li>白内障</li>
            <li>腿瘸</li>
            <li>皮肤痒</li>
            <li>拉虫</li>
            <li>抽搐</li>
            <li>流鼻涕</li>
            <li>手术</li>
            <li>骨折</li>
          </ul>

        </div>
        <div style="margin: 30px 15%;display: flex;justify-content: start">

          <div class="prase" @click="toArticleDetail(ar)" v-for="ar in dogArticles" style="width: 25%">
            <img :src="ar.coverUrl" alt="" style="width: 280px;height: 200px">
            <a style="margin-top: 30px">{{ar.title}}</a>
            <p style="color: #5F5f5f;font-size: 12px;margin-top: 5px">{{ar.publishTime}}</p>
            <p class="mt-10" style="color: #5F5f5f;font-size: 14px;margin-top: 5px">
              {{ar.sample}}</p>
          </div>

        </div>

      </div>

      <img src="@/assets/div.png" alt="" style="max-height: 150px;width: 100%">

      <div style="margin-top: 100px">
        <p style="font-size: 45px;color: #ABCD04;margin: 0px" align="center">喵星人课堂</p>
        <p align=center style="font-size: 25px;color: #ABCD04;margin: 0px">CAT ENCYCLOPEDIA</p>
        <div class="jibing-list">
          <ul>
            <li>疫苗</li>
            <li>呕吐</li>
            <li>驱虫</li>
            <li>掉毛</li>
            <li>寄生虫</li>
            <li>拉稀</li>
            <li>发抖</li>
            <li>犬瘟</li>
            <li>肿瘤</li>
            <li>细小</li>
            <li>打喷嚏</li>
            <li>咳嗽</li>
            <li>白内障</li>
            <li>腿瘸</li>
            <li>皮肤痒</li>
            <li>拉虫</li>
            <li>抽搐</li>
            <li>流鼻涕</li>
            <li>手术</li>
            <li>骨折</li>
          </ul>
        </div>


        <div style="margin: 30px 15%;display: flex;justify-content: start">

          <div class="prase" @click="toArticleDetail(ar)" v-for="ar in catArticles" style="width: 25%">
            <img :src="ar.coverUrl" alt="" style="width: 280px;height: 200px">
            <a style="margin-top: 30px">{{ar.title}}</a>
            <p style="color: #5F5f5f;font-size: 12px;margin-top: 5px">{{ar.publishTime}}</p>
            <p class="mt-10" style="color: #5F5f5f;font-size: 14px;margin-top: 5px">
              {{ar.sample}}</p>
          </div>

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
    name: "Index",
    components: {Footer, Header},
    data() {
      return {
        dogArticles: [],
        catArticles: [],
        dogTag:'疫苗',
        catTag:'疫苗'
      }
    },
    methods: {
      toArticleDetail(ar) {
        console.log('进入文章详情页面')
        this.$router.push('/article?articleId=' + ar.id)
      },
      loadDogArticles() {
        API.article.list({kind: '汪星人课堂',tags:this.dogTag}).then(res => {
          this.dogArticles = res.data.data.data
          console.log('汪星人课堂',this.dogArticles)
        })
      },
      loadCatArticles() {
        API.article.list({kind: '喵星人课堂',tags:this.catTag}).then(res => {
          this.catArticles = res.data.data.data
          console.log('喵星人课堂',this.catArticles)
        })
      }
    },
    mounted() {
      this.loadDogArticles()
      this.loadCatArticles()
    }
  }
</script>

<style scoped>
  .jibing-list {
    width: 80%;
    margin: 30px auto;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 100px;

  }

  .jibing-list1 {
    width: 72%;
    margin: 30px auto;
  }

  .jibing-list ul li {
    display: block;
    float: left;
    padding-left: 33px;
    cursor: pointer;
  }

  .text {
    font-size: 14px;
  }

  .prase {
    width: 280px;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
  }

  .prase > p {
    margin: 0;
  }

  .prase > a {
    cursor: pointer;
    color: #555555;
    font-size: 20px;
  }


  .prase > a:hover {
    text-decoration: underline;
  }


  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 300px;
  }

  p {
    word-wrap: break-word;
  }
</style>
