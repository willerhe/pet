<template>
  <div>

    <el-input placeholder="请输入角色名称" class="input-with-select" style="margin-bottom: 20px">
      <el-button slot="append" type="primary" icon="el-icon-search"></el-button>
    </el-input>

    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="角色名称"
        width="150">
      </el-table-column>
      <el-table-column
        prop="permissions"
        label="权限"
        width="120">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import API from '@/api/api'

  export default {
    name: "RoleManager",
    methods: {
      handleClick(row) {
        console.log(row);
      },
      loadData(){
        API.role.list().then(res=>{
          this.tableData = res.data.data.data
        })
      }
    },
    data() {
      return {
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
