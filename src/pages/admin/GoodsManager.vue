<template>
  <div style="padding: 20px">

    <div style="display: flex;justify-content: space-between">
      <div style="display: flex;justify-content: start">
        <!--        <el-select v-model="value" placeholder="请选择" style="width: 400px" :default-first-option="true" @change="reload">-->
        <!--          <el-option-->
        <!--            v-for="item in options"-->
        <!--            :key="item.value"-->
        <!--            :label="item.label"-->
        <!--            :value="item.value">-->
        <!--          </el-option>-->
        <!--        </el-select>-->

        <div></div>
<!--        <el-input placeholder="请输入用户名或者手机号" style="margin-left: 10px" v-model="searchKey"></el-input>-->
<!--        <el-button type="primary" style="margin-left: 10px" @click="loadData">搜索</el-button>-->
      </div>
      <div>
        <el-button type="primary" @click="toAddPage">添加</el-button>
      </div>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%;margin-top: 20px"
      :row-class-name="tableRowClassName">

      <el-table-column
        prop="coverUrl"
        label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.coverUrl" style="width: 60px;height: 60px" alt="">
        </template>

      </el-table-column>

      <el-table-column
        prop="name"
        label="商品名称">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
      </el-table-column>

      <el-table-column
        prop="-"
        label="操作">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" @click="deleteGoods(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="添加用户"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form label-width="80px">

        <el-form-item label="账号">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="form.password1" show-password></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-checkbox-group v-model="roles">
            <el-checkbox label="vip" name="vip" value="vip"></el-checkbox>
            <el-checkbox label="admin" name="admin" value="admin"></el-checkbox>
            <el-checkbox label="doctor" name="doctor" value="doctor"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

      </el-form>


      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitUser">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import API from '@/api/api'

  export default {
    name: "GoodsManager",
    methods: {
      toAddPage(){
        this.$router.push('/admin/goods/add')
      },
      submitUser() {
        let roleStr = ''
        for (let r of this.roles) {
          roleStr += r
          roleStr += ','
        }
        if (roleStr.length > 1) {
          roleStr = roleStr.slice(0, roleStr.length - 1)
        }
        this.form.roles = roleStr
        console.log(this.form)

        if (!this.form.account || this.form.account === '') {
          this.$message.warning('账号不能为空')
        } else if (!this.form.password || this.form.password === '') {
          this.$message.warning('账号不能为空')
        } else if (this.form.password !== this.form.password1) {
          this.$message.warning('两次输入密码不一致')
        } else if (!this.form.roles || this.form.roles === '') {
          this.$message.warning('请选择用户角色')
        } else {
          API.goods.create(this.form).then(res => {
            this.$message.success('添加成功')
            this.form = {}
            this.dialogVisible = false
            this.loadData()
          })
        }


      },
      handleClose(done) {
        this.$confirm('确定关闭吗？')
          .then(_ => {
            this.form = {}
            done();
          })
          .catch(_ => {
          });
      },
      deleteGoods(user) {
        console.log('删除这个用户')
        API.goods.delete(user).then(res => {
          this.$message.success('删除成功')
          this.loadData()
        })
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      loadData(param) {
        if (this.searchKey.length > 0){
          param.nickname =this.searchKey
          param.phoneNumber =this.searchKey
        }
        API.goods.list(param).then(res => {
          this.tableData = res.data.data.data
        })
      }
    },
    data() {
      return {
        searchKey:'',
        dialogVisible: false,
        tableData: [],
        roles: [],
        form: {},
        options: [{
          value: '全部',
          label: ''
        }, {
          value: 'doctor',
          label: '医生'
        }, {
          value: 'vip',
          label: '会员'
        }, {
          value: 'admin',
          label: '管理员'
        }],
        value: ''
      }
    },
    mounted() {
      this.loadData()
    }
  }
</script>
<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
