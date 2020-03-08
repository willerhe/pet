<template>
  <div>

    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="patientName"
        label="就诊名称"
        width="150">
      </el-table-column>
      <el-table-column
        prop="doctorName"
        label="医生名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="reason"
        label="留言"
        width="120">
      </el-table-column>
      <el-table-column
        prop="result"
        label="就诊意见"
        width="120">
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" v-if="scope.row.status === 0">确认就医</el-button>
          <el-button type="text" size="small" v-else>已完成</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  import API from '@/api/api'

  export default {
    name: "MedicalManager",
    methods: {
      handleClick(row) {
        console.log(row);
      },
      loadData(){
        API.appointment.list().then(res=>{
          this.tableData = res.data.data.data
        })
      }
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

</style>
