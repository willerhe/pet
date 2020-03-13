<template>
  <div style="padding: 20px">
    <el-button @click="back">返回</el-button>
    <p>病人名称：{{prescription.patientName}}</p>
    <p>联系方式：{{prescription.phoneNumber}}</p>
    <p>开具的药方：</p>
    <p>{{fees}}</p>
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
