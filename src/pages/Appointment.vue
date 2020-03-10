<template>
  <div>
    <Header />
    <div class="content"  style="background-color: #EFEFEF;display: flex;justify-content: center">
      <div style="background-color: white;margin: 30px;padding: 30px;width: 50%" v-if="isLogin">
        <el-form ref="form" :model="form" label-width="80px" style="width: 100%">
          <h1 style="color: #ABCD04" align="center" >在线预约</h1>

          <el-form-item label="情况描述">
            <el-input
              type="textarea"
              :rows="6"
              v-model="form.remark"
              placeholder="请输入内容">
            </el-input>
          </el-form-item>

          <el-form-item label="手机号">
            <el-input v-model="form.phoneNumber"></el-input>
          </el-form-item>

          <el-form-item label="主人称呼">
            <el-input v-model="form.usreName"></el-input>
          </el-form-item>



          <el-form-item label="宠物称呼">
            <el-input v-model="form.petName"></el-input>
          </el-form-item>


<!--          <el-form-item label="宠物品种">-->
<!--            <el-input v-model="form.nickname"></el-input>-->
<!--          </el-form-item>-->

          <el-form-item label="宠物年龄">
            <el-input v-model="form.age" type="number"></el-input>
          </el-form-item>



<!--          <el-form-item label="所在区域">-->
<!--            <el-select v-model="form.region" placeholder="请选择活动区域">-->
<!--              <el-option label="区域一" value="shanghai"></el-option>-->
<!--              <el-option label="区域二" value="beijing"></el-option>-->
<!--            </el-select>-->
<!--          </el-form-item>-->

          <el-form-item label="预约时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.promiseTime" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>

          <el-form-item>
            <el-button type="success" @click="onSubmit">立即预约</el-button>
            <el-button @click="back">取消</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div v-else style="display: flex;justify-content: center;align-items: center">
        <h1 style="color: #ABCD04" align="center"><a  style="color: #00aef3;text-decoration: none;letter-spacing: 10px" href="#/login">先去登录<i class="el-icon-d-arrow-right"></i></a></h1>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  import API from '@/api/api'

  export default {
    name: "Appointment",
    components: {Footer, Header},
    data(){
      return{
        form: {
        },
        user :{},
        isLogin:false
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!',this.form);
        var nowDate = this.form.promiseTime
        var year = nowDate.getFullYear();
        var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1)
          : nowDate.getMonth() + 1;
        var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate
          .getDate();
        var dateStr = year + "-" + month + "-" + day;
        this.form.promiseTime = dateStr
        API.appointment.create(this.form).then(res=>{
          if(res.data.ok){
            this.$message.success('预约成功')
            this.$router.push('/my-appointment')
          }
        })
      },
      back(){
        this.$router.back()
      }
    },
    mounted() {
      let user = window.localStorage.getItem('user')
      if (user){
        this.isLogin = true
        let user = JSON.parse(window.localStorage.getItem('user'))
        this.form.phoneNumber = user.phoneNumber
        this.form.usreName = user.nickname
        this.form.userId = user.id
        console.log(this.form)
      }
    }
  }
</script>

<style scoped>
.content{
  min-height: 70vh;
}
</style>
