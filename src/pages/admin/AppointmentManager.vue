<template>
  <div style="padding: 20px">
    <h2>挂号预约管理</h2>
    <el-table
      :data="tableData"
      border
      style="width: 100%">

      <el-table-column
        prop="promiseTime"
        label="预约时间">
      </el-table-column>
      <el-table-column
        prop="userName"
        label="预约人">
      </el-table-column>
      <el-table-column
        prop="petName"
        label="宠物名称">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="留言">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
        <template slot-scope="scope">
          <div style="display: flex;justify-content: center">
            <el-tag type="warning" v-if="scope.row.status === 0">未就医</el-tag>
            <el-tag type="success" v-if="scope.row.status === 1">已就医</el-tag>
          </div>
        </template>
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" v-if="scope.row.status === 0" @click="confirmApit(scope.row)">确认就医
          </el-button>
          <el-button type="text" size="small" v-else>已完成</el-button>
          <el-button type="text" size="small" @click="deleteApit(scope.row)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>


    <el-dialog
      title="提示"
      :visible.sync="tipVisible"
      width="30%"
      :before-close="handleClose">
      <span>挂号预约成功，是否立即诊断</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="tipVisible = false">取 消</el-button>
    <el-button type="primary" @click="toHis">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import API from '@/api/api'

  export default {
    name: "AppointmentManager",
    methods: {
      toHis() {
        this.$router.push('/admin/his')
        this.tipVisible = false
      },
      handleClick(row) {
        console.log(row);
      },
      deleteApit(a) {
        API.appointment.delete(a).then(res => {
          this.$message.success('删除成功')
          this.loadData()
        })
      },
      confirmApit(a) {
        a.status = 1
        API.appointment.confirm(a).then(res => {
          this.$message.success('确认挂号成功')
          this.tipVisible = true

        })
      },
      loadData() {
        API.appointment.list().then(res => {
          this.tableData = res.data.data.data
        })
      }
    },
    data() {
      return {
        tipVisible: false,
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
