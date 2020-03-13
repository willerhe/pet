<template>
  <div style="padding: 20px">
    <el-button @click="back">返回</el-button>
    <div style="display: flex;justify-content: start;flex-flow: wrap">
      <p style="width: 33%">病人名称：{{prescription.patientName}}</p>
      <p style="width: 33%">联系方式：{{prescription.phoneNumber}}</p>
      <p style="width: 33%">总金额：￥{{prescription.total}}</p>
      <p style="width: 33%">总数量：{{prescription.count}}</p>
    </div>
    <p style="width: 33%">开具的药方：</p>
    <el-table
      :data="fees"
      style="width: 100%">
      <el-table-column
        prop="medicalName"
        label="药品名称">
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价">
      </el-table-column>
      <el-table-column
        prop="method"
        label="用法用量">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="特殊医嘱">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import API from '@/api/api'

  export default {
    name: "PrescriptionResult",
    data() {
      return {
        prescription: {},
        fees:[]
      }
    },
    methods:{
      back(){
        this.$router.go(-1)
      }
    },
    mounted() {
      this.prescription.id = this.$route.query.id
      API.prescription.get(this.prescription.id).then(res=>{
        this.prescription = res.data.data.data
      })


      API.fee.getByPrescriptionId(this.prescription.id).then(res=>{
        this.fees = res.data.data.data
      })

      console.log(this.prescription)
    }
  }
</script>

<style scoped>

</style>
