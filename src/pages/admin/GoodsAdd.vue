<template>
  <div style="padding: 20px;display: flex;justify-content: center">
    <div style="width: 60%">
      <h2 style="color: green">添加商品</h2>
      <div>
        <el-input v-model="goods.name" placeholder="请输入商品名称" style="margin-top: 20px"></el-input>
        <el-input v-model="goods.price" placeholder="请输入价格" type="number" style="margin-top: 20px"></el-input>

        <el-upload
          style="margin-top: 20px"
          :action="uploadPath"
          :limit="1"
          :on-success="uploadSuccess"
          list-type="picture-card">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{file}">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url" alt=""
            >
            <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
          </div>
        </el-upload>

        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>

        <div style="margin-top: 20px">
          <el-button @click="back">返回</el-button>
          <el-button @click="submit">提交</el-button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import API from '@/api/api'

  export default {
    name: "GoodsAdd",
    data() {
      return {
        uploadPath: '',
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        goods: {}
      };
    },
    methods: {
      submit() {
        console.log('要上传的记录', this.goods)
        API.goods.create(this.goods).then(_ => {
          this.$message.success('保存成功')
          this.$router.go(-1)
        })
      },
      back() {
        this.$router.go(-1)
      },
      uploadSuccess(response, file, fileList) {
        console.log('response, file, fileList', response, file, fileList)
        this.goods.coverUrl = response.data
      },
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }
    },
    mounted() {
      this.uploadPath = process.env.uploadPath
    }
  }
</script>

<style scoped>

</style>
