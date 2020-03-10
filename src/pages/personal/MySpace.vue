<template>
  <div style="background-color: #EFEFEF">
    <Header/>
    <el-dialog
      title="添加宠物"
      :visible.sync="dialogVisible"
      width="50%"

      :before-close="handleClose">

      <el-form style="padding: 20px">
        <el-form-item label="名称">
          <el-input v-model="form.nickname"></el-input>
        </el-form-item>

        <el-form-item label="年龄">
          <el-input v-model="form.age" type="number"></el-input>
        </el-form-item>

        <el-form-item label="品种">
          <el-input v-model="form.categoryName"></el-input>
        </el-form-item>

        <el-form-item label="备注">
          <el-input v-model="form.remark"></el-input>
        </el-form-item>

      </el-form>



      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="savePet">确 定</el-button>
  </span>
    </el-dialog>
    <div class="content" style="display: flex;justify-content: center;align-items: start">
      <el-tabs :tab-position="'left'" style="height: 70vh;width: 65%;background-color: white">
        <el-tab-pane label="个人信息" style="padding: 30px;display: flex;justify-content: start">
          <div>
            <p>个人信息管理</p>
            <div>
              <p>邮箱</p><p>{{user.email}}</p>
              <p>昵称</p><p>{{user.nickname}}</p>
              <p>账号</p><p>{{user.account}}</p>
              <p>密码</p><p>********</p>
              <p>地址</p><p>{{user.address}}</p>
              <p>手机号</p><p>{{user.phoneNumber}}</p>
            </div>
          </div>
          <el-button type="primary" size="mini" @click="toEdit">去修改</el-button>

        </el-tab-pane>
        <el-tab-pane label="宠物信息" style="padding: 30px">
          <el-button type="primary" size="mini" style="margin-bottom: 20px" @click="dialogVisible = true">添加我的宠物</el-button>

          <el-table
            :data="pets"
            border
            style="width: 100%">



            <el-table-column
              prop="nickname"
              label="宠物名">
            </el-table-column>
            <el-table-column
              prop="age"
              label="宠物年龄">
            </el-table-column>
            <el-table-column
              prop="categoryName"
              label="品种">
            </el-table-column>
            <el-table-column
              prop="remark"
              label="说明">
            </el-table-column>
            <el-table-column
              prop="remark"
              label="操作">
              <template slot-scope="scope">
                <el-button type="danger" size="mini" @click="deletePet(scope.row)">删除</el-button>
              </template>

            </el-table-column>
          </el-table>

        </el-tab-pane>
      </el-tabs>


    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from "../../components/Header";
  import Footer from "../../components/Footer";
  import API from '@/api/api'

  export default {
    name: "MySpace",
    components: {Footer, Header},
    data() {
      return {
        form:{},
        pets:[],
        user: {},
        dialogVisible: false,
        tableData: [{
          nickName: '2016-05-02',
          age: '王小虎',
          categoryName: '上海市普陀区金沙江路 1518 弄',
          remark: '小黑',
        }]
      }
    },
    methods:{
      savePet(){
        this.form.age = parseInt(this.form.age)
        API.pet.create(this.form).then(res=>{
          this.$message.success('创建成功')
          this.loadData()
          this.dialogVisible = false
        })
      },
      deletePet(p){
        console.log('删除',p)
        API.pet.delete(p).then(res=>{
          this.$message.success('删除成功')
          this.loadData()
        })
      },
      toEdit(){
        this.$router.push('/my-info')
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      loadData(){
        API.pet.list().then(res=>{
          this.pets = res.data.data.data
          console.log(this.pets)
          for(let p of this.pets){
          }
        })
      }
    },
    mounted() {
      let us = window.localStorage.getItem('user')
      if(us){
        this.user = JSON.parse(us)
        this.loadData()
      }

    }

  }
</script>

<style scoped>


</style>
