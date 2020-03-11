<template>
  <div>


    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="total"
        label="总花费"
        width="150">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型"
        width="120">
      </el-table-column>


    </el-table>
  </div>
</template>

<script>
  import API from '@/api/api'

  export default {
    name: "AppointmentManager",
    methods: {
      handleClick(row) {
        console.log(row);
      },
      loadData(){
        API.fee.list().then(res=>{
          this.tableData = res.data.data.data
        })
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
    },
    data() {
      return {
        tableData: []
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
