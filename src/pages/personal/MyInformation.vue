<template>
  <div>
    <Header />
    <div class="content"  style="background-color: #EFEFEF;display: flex;justify-content: center">
      <div style="background-color: white;margin: 30px;padding: 30px;width: 50%">
        <el-form ref="form" :model="form" label-width="80px" style="width: 100%">
          <h1 style="color: #ABCD04" align="center">个人中心</h1>
          <el-form-item label="邮箱号">
            <el-input v-model="user.email"></el-input>
          </el-form-item>

          <el-form-item label="地址">
            <el-input v-model="user.address"></el-input>
          </el-form-item>



          <el-form-item label="账号">
            <el-input v-model="user.account"></el-input>
          </el-form-item>


          <el-form-item label="密码">
            <el-input v-model="user.password"></el-input>
          </el-form-item>

          <el-form-item label="手机号">
            <el-input v-model="user.phoneNumber"></el-input>
          </el-form-item>



          <el-form-item label="所在区域">
            <el-select v-model="user.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="success" @click="onSubmit">更新</el-button>
            <el-button @click="back">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from "../../components/Header";
  import Footer from "../../components/Footer";
  import API from '@/api/api'

  export default {
    name: "MyInfomation",
    components: {Footer, Header},
    data(){
      return{
        user:{},
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        API.user.update(this.user).then(res=>{
          this.$message.success('更新成功')
          this.$router.push('/my-space')

          window.localStorage.setItem('user',JSON.stringify(res.data.data.data))
        })
      },
      back(){
        this.$router.back()
      }
    },
    mounted() {
      let u = window.localStorage.getItem('user')
      if(u){
        this.user = JSON.parse(u)
      }
    }
  }
</script>

<style scoped>
  .content{
    min-height: 70vh;
  }
</style>
