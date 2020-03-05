<template>
  <div>
    <Header/>
    <div class="content" style="display: flex;justify-content: center;align-items: start;background-color: #EFEFEF;padding: 50px">
      <div style="width: 60%;padding: 50px">
        <h1 style="color: #ABCD04" align="center">我的预约</h1>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="预约时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="主人姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="预约区域">
          </el-table-column>
          <el-table-column
            prop="pet"
            label="宠物名">
          </el-table-column>
          <el-table-column
            prop="age"
            label="宠物年龄">
          </el-table-column>
          <el-table-column
            prop="status"
            label="预约状态">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from "../../components/Header";
  import Footer from "../../components/Footer";
  export default {
    name: "MyAppointment",
    components: {Footer, Header},
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          pet: '小黑',
          age: '6',
          status: '已就医',
        }]
      }
    }
  }
</script>

<style scoped>

</style>
