<template>
  <div style="padding: 20px">

    <div style="display: flex;justify-content: space-between">
      <div style="display: flex;justify-content: start">
        <el-input placeholder="请输入药品名称" v-model="searchKey"></el-input>
        <el-button type="primary" style="margin-left: 10px" @click="loadData">搜索</el-button>
      </div>
      <div><el-button @click="dialogVisible = true" type="primary">新增药品</el-button></div>
    </div>

    <el-table
      :data="tableData"
      border
      style="width: 100%;margin-top: 20px">
      <el-table-column
        prop="no"
        label="编号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="药品名称">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="功能主治">
      </el-table-column>
      <el-table-column
        prop="method"
        label="用法用量">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status === 1" type="success">售卖中</el-tag>
          <el-tag v-if="scope.row.status === 0" type="warning">未上架</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small"  v-if="scope.row.status === 1" @click="updateStatus(scope.row,0)">下架</el-button>
          <el-button type="text" size="small"  v-if="scope.row.status === 0"  @click="updateStatus(scope.row,1)">上架</el-button>
          <el-button type="text" size="small" @click="deleteMedical(scope.row)">删除</el-button>

        </template>
      </el-table-column>

    </el-table>


    <el-dialog
      title="新增药品"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">


      <el-form ref="form"  label-width="80px" style="width: 100%">
        <el-form-item label="药品名称">
          <el-input v-model="medical.name"></el-input>
        </el-form-item>

        <el-form-item label="功能主治">
          <el-input v-model="medical.remark"></el-input>
        </el-form-item>
        <el-form-item label="用法用量">
          <el-input v-model="medical.method"></el-input>
        </el-form-item>
        <el-form-item label="售价">
          <el-input v-model="medical.price"></el-input>
        </el-form-item>

      </el-form>



      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="saveMedical">确 定</el-button>
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
        API.medical.delete(item).then(()=>{
          this.$message.success('删除成功')
          this.loadData()
        })
      },
      updateStatus(item,status){
        item.status = status
        API.medical.update(item).then(()=>{
          this.$message.success('更新成功')
          this.loadData()
        })
      },
      saveMedical(){
        API.medical.create(this.medical).then(()=>{
          this.$message.success('添加成功')
          this.medical = {}
          this.dialogVisible = false
          this.loadData()
        })
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleClick(row) {
        console.log(row);
      },
      loadData(){
        let param = {}
        if(this.searchKey &&this.searchKey.length > 0 ){
          param.name = this.searchKey
        }
        API.medical.list(param).then(res=>{
          this.tableData = res.data.data.data
        })
      }
    },
    data() {
      return {
        searchKey:'',
        medical:{},
        dialogVisible: false,
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
