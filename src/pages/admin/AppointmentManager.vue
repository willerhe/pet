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
        prop="userName"
        label="预约人"
        width="150">
      </el-table-column>
      <el-table-column
        prop="petName"
        label="宠物名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="留言"
        width="120">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
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
    name: "AppointmentManager",
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
