<template>
  <div style="padding:20px">
    <el-button @click="back">返回</el-button>
    <p>病人名称：{{medical.patientName}}</p>
    <p>病情描述：{{medical.reason}}</p>
    <p>诊断结果：{{medical.result}}</p>
    <div>
      <el-button type="primary" @click="dialogVisible1 = true">添加药品</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="medicalName"
        label="药品名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="药品价格"
        width="180">
      </el-table-column>
      <el-table-column
        prop="method"
        label="用法用量">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="医嘱">
      </el-table-column>
    </el-table>
    <p>金额：{{prescription.total || 0}}</p>
    <p>数量:{{prescription.count || 0}}</p>

    <div>
      <el-button type="primary" @click="savePrescription">保存</el-button>
    </div>

    <el-dialog
      title="开具药方"
      :visible.sync="dialogVisible1"
      width="30%"
      :before-close="handleClose1">
      <el-select @change="change" v-model="newPrescription.prescriptionId" placeholder="请选择药品" style="margin-top: 10px">
        <el-option
          v-for="item in medicalList"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>

      <el-input placeholder="用法用量（选填）" v-model="newPrescription.method" style="margin-top: 10px"></el-input>

      <el-input
        type="textarea"
        style="margin-top: 10px"
        :rows="4"
        v-model="newPrescription.remark"
        placeholder="输入医嘱（选填）">
      </el-input>

      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="addNewPrescription">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import Admin from "../../components/Admin";
  import API from '@/api/api'

  export default {
    name: "TakePrescription",
    components: {Admin},
    watch: {
      tableData() {
        let total = 0
        let count = 0
        for (let t of this.tableData) {
          total += t.price
          count++
        }
        this.prescription.total = total
        this.prescription.count = count
      }
    },
    data() {
      return {
        dialogVisible1: false,
        medical: {},
        medicalList: [],
        newPrescription: {},
        prescription:{},
        tableData: []
      }
    },
    methods: {
      savePrescription() {
        this.prescription.fees = this.tableData
        this.prescription.phoneNumber = this.medical.phoneNumber
        this.prescription.patientName = this.medical.patientName
        this.prescription.patientId = this.medical.patientId
        this.prescription.medicalId = this.medical.id
        console.log('要保存的药方综合记录',this.prescription)
        API.prescription.store(this.prescription).then(res => {
          this.$message.success('保存成功')
          this.$router.go(-1)
        })
      },
      change(e) {
        console.log(e)
      },
      addNewPrescription() {
        console.log(this.newPrescription)
        for (let i of this.medicalList) {
          if (i.id === this.newPrescription.prescriptionId) {
            this.newPrescription.medicalName = i.name
            this.newPrescription.price = i.price
            if (!this.newPrescription.method) {
              this.newPrescription.method = i.method
            }
            if (!this.newPrescription.price) {
              this.newPrescription.price = i.price
            }
            break
          }
        }
        this.tableData.push(this.newPrescription)
        console.log(this.tableData)
        this.dialogVisible1 = false
        this.newPrescription = {}
      },
      handleClose1(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      back() {
        this.$router.push('/admin/his')
      }
    },
    mounted() {
      console.log('this.$route.query.id', this.$route.query.id)
      this.medical.id = this.$route.query.id
      API.medicalRecord.get(this.medical.id).then(res => {
        this.medical = res.data.data.data
      })
      API.medical.list().then(res => {
        this.medicalList = res.data.data.data
      })
    }
  }
</script>

<style scoped>

</style>
