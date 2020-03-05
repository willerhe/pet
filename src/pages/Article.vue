<template>
  <div>
    <Header/>
    <div class="content" style="background-color: #EFEFEF;display: flex;justify-content: center">
      <div style="width: 50%;background-color: white;margin: 50px;border-radius: 3px">
        <p class="art_tit">给狗狗打疫苗是必须的吗？狗狗打疫苗需要注意些什么？</p>
        <p class="art_tutor">【导读】狗狗是不是打了疫苗更健康啊，还有给狗狗打疫苗时需要注意些什么呢？瑞鹏宠物医院给大家说说狗狗打疫苗需要注意的一些事项，帮助宠主健康养宠。</p>
        <div style="display: flex;justify-content: center">
          <img src="@/assets/pt.jpg" style="width: 490px; height: 306px;">
        </div>
      <div style="padding: 20px">



        <p class="ct">问题:狗狗是不是打了疫苗更健康啊?!还有给狗狗打疫苗时需要注意些什么呢?!</p>
        <p class="ct">回答:给狗狗注射疫苗已经成为狗狗健康管理重要的一环。20世纪80年代初期，曾经出现犬小病毒肠炎大流行，造成相当多的狗狗死亡，而疫苗也很快地被制造出来。狗狗从出生开始，就会有许多新体验等着它们。所以带狗狗去打预防针是狗狗一生中不应缺失的大事之一，因为许多疾病发作后，常常会让狗狗丧失生命，像犬瘟，或细小等。因此，定期带狗狗打预防针是非常必要的。下面瑞鹏宠物医院给大家说说狗狗打疫苗需要注意的一些事项!</p>
        <p class="ct">1、未经免疫的幼犬到了新环境，饮食休息都要逐渐适应。如果小狗来自环境脏乱，瘟疫横行、挨饿受冻的市场，身体素质必然很差，往往已感染可怕的疾病，只是没有发作，这时打疫苗会适得其反。应调养观察10天左右，在医院化验确认健康后再进行免疫。</p>
        <p class="ct">2、弱毒疫苗注射后反应强烈，可能损伤胎儿。这类疫苗的说明中都明确写着“妊娠犬禁用”。如果狗妈妈的免疫时间正好赶在这个时候，则应等到哺乳之后再免疫。</p>
        <p class="ct">3、年龄太小时注射疫苗，可能遭到母源抗体的干扰，影响免疫效果。第一针六联苗应在小狗满45天以后注射，第一针狂犬疫苗应在小狗满三个月后注射。</p>
        <p class="ct">4、疫苗的作用是预防，而不是治疗。如果小狗已经感染病毒，或是体质、营养都不好，打了疫苗会害了它，应先对症治疗、调理身体、适应环境后，在非常健康的情况下方可免疫。</p>

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
    name: "Article",
    components: {Footer, Header}
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

  .ct{
    color: #222222;
    font-size: 14px;
    text-indent:2em;
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
