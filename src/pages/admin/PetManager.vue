<template>
  <div style="padding: 20px">
    <h2>宠物信息管理</h2>
    <el-input placeholder="请输入宠物姓名" v-model="searchKey" class="input-with-select" style="margin-bottom: 20px;width: 400px">
      <el-button slot="append" type="primary" icon="el-icon-search" @click="loadData"></el-button>
    </el-input>

    <el-table
      :row-class-name="tableRowClassName"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="nickname"
        label="宠物名">
      </el-table-column>
      <el-table-column
        prop="age"
        label="宠物年龄">
      </el-table-column>
      <el-table-column
        prop="categoryName"
        label="宠物种类">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="说明">
      </el-table-column>
      <el-table-column
        prop="-"
        label="操作">
        <template slot-scope="scope">
          <div style="display: flex;justify-content: space-between;padding: 10px">
<!--            <el-button size="mini">修改</el-button>-->
            <el-button size="mini" type="danger" @click="deletePet(scope.row)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import API from '@/api/api'

  export default {
    name: "PetManager",
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      handleClick(row) {
        console.log(row);
      },
      deletePet(pet){
        API.pet.delete(pet).then(res=>{
          this.$message.success('删除成功')
          this.loadData()
        })
      },
      loadData(){
        API.pet.list({nickname:this.searchKey}).then(res=>{
          this.tableData = res.data.data.data
        })
      }
    },
    data() {
      return {
        searchKey:'',
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
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
