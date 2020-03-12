<template>
  <div>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="patientName"
        label="病人名称">
      </el-table-column>
<!--      <el-table-column-->
<!--        prop="doctorName"-->
<!--        label="医生名称"-->
<!--        width="120">-->
<!--      </el-table-column>-->
      <el-table-column
        prop="reason"
        label="病情描述">
      </el-table-column>
      <el-table-column
        prop="phoneNumber"
        label="联系电话">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.status === 1" size="mini">诊断完成</el-tag>
          <el-tag type="warning" v-else size="mini">待诊断</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="result"
        label="诊断结果">
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" v-if="scope.row.status === 0" @click="confirm(scope.row)">完成诊断</el-button>
          <el-button type="text" size="small" v-else>开药</el-button>
          <el-button type="text" size="small" @click="deleteMedical(scope.row)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>


    <el-dialog
      title="填写诊断结果"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-input
        type="textarea"
        :rows="6"
        placeholder="请输入内容"
        v-model="result">
      </el-input>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="confirmMedicalRecord">完 成</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import API from '@/api/api'

  export default {
    name: "MedicalManager",
    methods: {
      deleteMedical(item){
        API.medicalRecord.delete(item).then(()=>{
          this.$message.success('删除成功')
          this.loadData()
        })
      },
      confirm(item){
        this.selectedItem = item
        this.dialogVisible = true
      },
      confirmMedicalRecord(){
        this.selectedItem.status = 1
        this.selectedItem.result = this.result
        API.medicalRecord.update(this.selectedItem).then(res=>{
          this.$message.success('诊断成功')
          this.result = ''
          this.selectedItem = null
          this.dialogVisible = false
          this.loadData()
        })
      },
      handleClick(row) {
        console.log(row);
      },
      loadData(){
        API.medicalRecord.list().then(res=>{
          this.tableData = res.data.data.data
        })
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    },
    data() {
      return {
        selectedItem:{},
        result:'',
        tableData: [],
        dialogVisible: false
      }
    },
    mounted() {
      this.loadData()
    }
  }
</script>

<style scoped>

</style>
