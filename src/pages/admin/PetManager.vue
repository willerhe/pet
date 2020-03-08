<template>
  <div>

    <el-input placeholder="请输入宠物姓名" class="input-with-select" style="margin-bottom: 20px">
      <el-button slot="append" type="primary" icon="el-icon-search"></el-button>
    </el-input>

    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="nickname"
        label="宠物名"
        width="150">
      </el-table-column>
      <el-table-column
        prop="age"
        label="宠物年龄"
        width="120">
      </el-table-column>
      <el-table-column
        prop="categoryName"
        label="宠物种类"
        width="120">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="说明"
        width="120">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import API from '@/api/api'

  export default {
    name: "PetManager",
    methods: {
      handleClick(row) {
        console.log(row);
      },
      loadData(){
        API.pet.list().then(res=>{
          this.tableData = res.data.data.data
        })
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
      }
    },
    mounted() {
      this.loadData()
    }
  }
</script>

<style scoped>

</style>
