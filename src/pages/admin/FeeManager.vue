<template>
  <div>

    <el-table
      :data="tableData"
      :expand-change="loadSpec"
      style="width: 100%">
      <el-table-column
        prop="patientName"
        label="患者名称">
      </el-table-column>
      <el-table-column
        prop="phoneNumber"
        label="联系电话">
      </el-table-column>
      <el-table-column
        prop="count"
        label="药品数量">
      </el-table-column>

      <el-table-column
        prop="total"
        label="总金额">
      </el-table-column>

      <el-table-column
        prop="-"
        label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="toDetail(scope.row)"> 诊断结果</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import API from '@/api/api'

  export default {
    name: "AppointmentManager",
    methods: {
      toDetail(item) {
        this.$router.push('/admin/prescription/result?id=' + item.id)
      },
      loadSpec(row, e) {
        console.log(row, e)
      },
      handleClick(row) {
        console.log(row);
      },
      loadData() {
        API.prescription.list().then(res => {
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
