<template>
  <div>
    <Header/>
    <div class="content" style="background-color: #EFEFEF;display: flex;justify-content: center">
      <div style="width: 50%;background-color: white;margin: 50px;border-radius: 3px">
        <p class="art_tit">{{article.title}}</p>
        <div style="display: flex;justify-content: space-between;flex-wrap: wrap">
          <p style="padding: 20px;font-size: 14px;color: #ccc" align="right">发布日期：{{article.publishTime}}</p>
          <p style="padding: 20px;font-size: 14px;color: #ccc" align="right">文章标签：{{article.tags}}</p>
        </div>
        <p class="art_tutor" style="padding-left: 40px;padding-right: 40px;">概述：{{article.sample}}</p>
        <div style="display: flex;justify-content: center">
          <img :src="article.coverUrl" alt="" style="width: 60%">
        </div>
        <div style="padding: 20px" id="innerHtml">

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
    name: "ArticleDynamic",
    data() {
      return {
        article: {}
      }
    },
    components: {Footer, Header},
    mounted() {
      this.article.id = this.$route.query.articleId
      API.article.getByArticleId(this.article.id).then(res => {
        this.article = res.data.data.data
        console.log('当前文章', this.article)
        document.getElementById('innerHtml').innerHTML = this.article.content
      })
    }
  }
</script>

<style scoped>
  .art_tit {
    font-size: 20px;
    color: #222;
    letter-spacing: 0;
    line-height: 20px;
    font-weight: 600;
    padding: 15px 0;
    text-align: center;
    border-bottom: 1px solid #f5f5f5;
  }

  .ct {
    color: #222222;
    font-size: 14px;
    text-indent: 2em;
    line-height: 30px;
  }

  .art_tutor {
    font-size: 14px;
    color: #666;
    letter-spacing: 0;
    line-height: 24px;
    padding: 7px 20px;
    background: #f7f7f7;
  }

</style>
