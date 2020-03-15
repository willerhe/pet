<template>
  <div>
    <div class="s-footer">
      <div class="sub-fo">
        <p>企业动态</p>
        <a href="#/about">品牌介绍</a>
        <a href="#/store">宠物商城</a>
      </div>
      <div>
        <p>关于我们</p>
        <a href="#/about">品牌故事</a>
      </div>
      <div>
        <p>联系我们</p>
        <a href="#/about">企业总部</a>
        <a href="#/">门店展示</a>
      </div>
      <div>
        <p>站点相关信息</p>
        <a href="#/appointment">核心业务</a>
        <a href="#/">养宠俱乐部</a>
      </div>
      <div>
        <i class="el-icon-phone-outline" style="font-size: 60px"></i>
        <p style="font-size: large">4008-820088</p>
      </div>

      <div class="social">
        <div>
          <img src="@/assets/wechat.png" alt="" class="small-icon">
          <span>
            微信：XXXXXX
          </span>
        </div>
        <div>
          <img src="@/assets/weibo.png" alt="" class="small-icon">
          <span>微博:XXXXX</span>
        </div>
        <div>
          <img src="@/assets/qq.png" alt="" class="small-icon">
          <span>在线咨询:XXXXX</span>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  span {
    color: white;
  }

  .s-footer{
    height: 315px;
    background-color: #414b57;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 0% 20%;
  }

  .s-footer > div {
    margin: 40px;
    display: flex;
    flex-direction: column;
  }
  a{
    color: white;
    text-decoration: none;
    font-size: small;
    padding: 3px;
  }
  .small-icon{
    width: 35px;
    height: 35px;
  }
  .social{
    display: flex;
    justify-content: start;
    flex-direction: row;
    line-height: 35px;
    vertical-align: center;
  }
</style>
