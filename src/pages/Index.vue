<template>
  <div>
    <Header/>
    <div class="content">
      <div style="margin-top: 100px">
        <p style="font-size: 45px;color: #ABCD04;margin: 0px" align="center">汪星人课堂</p>
        <p align=center style="font-size: 25px;color: #ABCD04;margin: 0px">DOG ENCYCLOPEDIA</p>

        <div class="jibing-list">
          <ul>
            <li v-for="op in options" @click="dogChangeTag(op.value)">
              <span v-if="dogTag === op.value" style="color: #ABCD04">{{op.value}}</span>
              <span v-else>{{op.value}}</span>
            </li>
          </ul>

        </div>
        <div style="margin: 30px 15%;display: flex;justify-content: flex-start;flex-flow: wrap;">
          <div style="display: flex;justify-content: center">
            <p align="center" style="color: #b2b2b2" v-if="dogArticles.length === 0">暂无文章内容</p>
          </div>
          <div class="prase" @click="toArticleDetail(ar)" v-for="ar in dogArticles" style="width: 20%;margin: 20px">
            <div style="display: flex;justify-content: center;">
              <img :src="ar.coverUrl" alt="" style="width: 280px;height: 200px">
            </div>
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
            <li v-for="op in options"  @click="catChangeTag(op.value)">
              <span v-if="catTag === op.value" style="color: #ABCD04">{{op.value}}</span>
              <span v-else>{{op.value}}</span>
            </li>
          </ul>
        </div>


        <div style="margin: 30px 15%;display: flex;justify-content: flex-start;flex-flow: wrap;">
          <div style="display: flex;justify-content: center">
            <p align="center" style="color: #b2b2b2" v-if="catArticles.length === 0">暂无文章内容</p>
          </div>
          <div class="prase" @click="toArticleDetail(ar)" v-for="ar in catArticles" style="width: 20%;margin: 20px">
            <div style="display: flex;justify-content: center;">
              <img :src="ar.coverUrl" alt="" style="width: 280px;height: 200px">
            </div>
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
        catTag:'疫苗',
        options: [{
          value: '疫苗',
          label: '疫苗'
        }, {
          value: '呕吐',
          label: '呕吐'
        }, {
          value: '驱虫',
          label: '驱虫'
        }, {
          value: '掉毛',
          label: '掉毛'
        }, {
          value: '寄生虫',
          label: '寄生虫'
        }, {
          value: '拉稀',
          label: '拉稀'
        }, {
          value: '发抖',
          label: '发抖'
        }, {
          value: '犬瘟',
          label: '犬瘟'
        }, {
          value: '肿瘤',
          label: '肿瘤'
        }, {
          value: '细小',
          label: '细小'
        }, {
          value: '打喷嚏',
          label: '打喷嚏'
        }, {
          value: '咳嗽',
          label: '咳嗽'
        }, {
          value: '白内障',
          label: '白内障'
        }, {
          value: '腿瘸',
          label: '腿瘸'
        }, {
          value: '皮肤痒',
          label: '皮肤痒'
        }, {
          value: '拉虫',
          label: '拉虫'
        }, {
          value: '抽搐',
          label: '抽搐'
        }, {
          value: '流鼻涕',
          label: '流鼻涕'
        }, {
          value: '手术',
          label: '手术'
        }, {
          value: '骨折',
          label: '骨折'
        }],
      }
    },
    methods: {
      dogChangeTag(tag){
        this.dogTag = tag
        this.loadDogArticles()
      },
      catChangeTag(tag){
        this.catTag = tag
        this.loadCatArticles()
      },
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
