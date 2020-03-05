<template>
  <div class="leave-word">

    <div v-if="show">
      <el-collapse-transition>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>请您留言</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="show = false">关闭</el-button>
          </div>
          <div class="word-form">
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入留言内容(必填)">
            </el-input>
            <el-input placeholder="姓名" size="mini" class="mr-5"></el-input>
            <el-input placeholder="电话" size="mini" class="mr-5"></el-input>
            <el-input placeholder="邮箱" size="mini" class="mr-5"></el-input>
            <el-input placeholder="地址" size="mini" class="mr-5"></el-input>
            <el-button type="primary" size="mini" class="mr-5" @click="show=false">发送</el-button>
          </div>
        </el-card>
      </el-collapse-transition>
    </div>

    <div v-else>
      <el-collapse-transition>
        <div
          style="width: 240px;height: 35px;background-color: #00aef3;display: flex;justify-content: space-between;align-items: center;color: white;">
          <span style="margin-left: 5px;font-size: 14px">请您留言</span>
          <i  style="margin-right: 5px;cursor: pointer" class="el-icon-full-screen" @click="show = true" ></i>
        </div>
      </el-collapse-transition>

    </div>
  </div>
</template>

<script>
  export default {
    name: "LeaveWord",
    data() {
      return {
        show: false
      }
    }
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
    background-color: #00aef3;
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 240px;

  }

  .leave-word {
    position: fixed;
    bottom: 0px;
    left: 0px;
  }
</style>
