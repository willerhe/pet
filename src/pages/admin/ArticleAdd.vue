<template>
  <div style="padding-left: 20px">
    <h2>发布文章</h2>
    <div style="display: flex;justify-content: center;flex-direction: column">
      <div style="display: flex;justify-content: start;align-items: center">
        <p>封面：</p>
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


      </div>




      <el-input placeholder="文章标题" v-model="article.title" class="mt-10"></el-input>


      <div id="multipleContent" style="width: 100%;z-index: 1" class="mt-10"></div>
      <el-select v-model="tags" multiple placeholder="标签" class="mt-10">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="kind" placeholder="文章种类" class="mt-10">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-button type="primary" @click="publishArticle" class="mt-10">发布</el-button>
    </div>
  </div>
</template>

<script>
  import API from '@/api/api'

  export default {
    name: "ArticleAdd",
    data() {
      return {
        uploadPath:'',
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        kind: '',
        article: {},
        tags: [],
        editor2: null,
        options1: [
          {value: '汪星人课堂'},
          {value: '喵星人课堂'},
        ],
        options: [{
          value: '疫苗',
          label: '疫苗'
        }, {
          value: '呕吐',
          label: '呕吐'
        }, {
          value: '驱虫',
          label: '驱虫'
        }, {
          value: '掉毛',
          label: '掉毛'
        }, {
          value: '寄生虫',
          label: '寄生虫'
        }, {
          value: '拉稀',
          label: '拉稀'
        }, {
          value: '发抖',
          label: '发抖'
        }, {
          value: '犬瘟',
          label: '犬瘟'
        }, {
          value: '肿瘤',
          label: '肿瘤'
        }, {
          value: '细小',
          label: '细小'
        }, {
          value: '打喷嚏',
          label: '打喷嚏'
        }, {
          value: '咳嗽',
          label: '咳嗽'
        }, {
          value: '白内障',
          label: '白内障'
        }, {
          value: '腿瘸',
          label: '腿瘸'
        }, {
          value: '皮肤痒',
          label: '皮肤痒'
        }, {
          value: '拉虫',
          label: '拉虫'
        }, {
          value: '抽搐',
          label: '抽搐'
        }, {
          value: '流鼻涕',
          label: '流鼻涕'
        }, {
          value: '手术',
          label: '手术'
        }, {
          value: '骨折',
          label: '骨折'
        }],
      }
    },
    methods: {
      uploadSuccess(response, file, fileList) {
        console.log('response, file, fileList', response, file, fileList)
        this.article.coverUrl = response.data
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
      },
      publishArticle() {
        this.article.content = this.editor2.txt.html()
        this.article.tags = ''
        for (let t of this.tags) {
          this.article.tags += (t + ',')
        }
        if (this.article.tags.length > 0) {
          this.article.tags = this.article.tags.substring(0, this.article.tags.length - 1)
        }
        console.log('publishArticle', this.article)
        this.article.tags += ',' + this.kind
        API.article.create(this.article).then(_ => {
          this.$message.success('发布成功')
          this.$router.go(-1)
        })

      }
    },
    mounted() {
      var E = window.wangEditor
      this.editor2 = new E('#multipleContent')
      this.editor2.create()
      this.uploadPath = process.env.uploadPath

    }
  }
</script>

<style scoped>

</style>
