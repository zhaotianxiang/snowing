<template>
  <div class="components-container">
    <div class="search-panel">
      <div class="search-wrap">
        <el-input v-model="searchKey" type="primary" placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" :loading="loading" class="margin-top-10" @click="onclickSearchButton">搜索</el-button>
        </el-input>
      </div>
      <el-select v-model="selectedSearchOptions" multiple placeholder="请选择搜索引擎">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="search-result">
      <webview id="baidu_webview" :src="baidu_src" autosize min-width="1000" min-height="400" style="height: 400px; width: 90%" />
      <webview id="google_webview" :src="google_src" autosize min-width="1000" min-height="400" style="height: 400px; width: 90%" />
    </div>
  </div>
</template>
<script>

export default {
  name: 'Search',
  data() {
    return {
      options: [{
        value: 'rocket-reach',
        label: 'RocketReach'
      }, {
        value: 'hunter',
        label: 'Hunter'
      }, {
        value: 'google',
        label: 'Google'
      }, {
        value: 'baidu',
        label: 'Baidu'
      }],
      searchKey: '',
      searchType: '1',
      selectedSearchOptions: [],
      loading: false,
      baidu_src: '',
      google_src: ''
    }
  },
  methods: {
    resize() {
      console.log('resize')
    },
    onclickSearchButton() {
      if (!this.selectedSearchOptions.length) {
        return this.$message({ message: '请先选择搜索引擎！', type: 'warning' })
      }
      this.loading = true
      setInterval(() => {
        this.loading = false
      }, 2000)
      this.selectedSearchOptions.map(opt => {
        console.log(opt)
        if (opt === 'baidu') {
          this.baidu_src = `https://www.baidu.com/s?wd=${this.searchKey}`
        }
        if (opt === 'google') {
          this.google_src = `https://www.google.com/search?q=${this.searchKey}`
          console.log('set google', this.google_src)
        }
      })
    }
  }
}
</script>

<style  scoped>
.components-container {
  position: relative;
  height: 100vh;
  width: 100%;
}
.search-panel{
  height: 100vh;
  width: 20%;
  float: left;
}

.search-wrap{
  width: 90%;
  margin-top: 25px;
  margin-bottom: 25px;
}

.search-result{
  float: right;
  width: 80%;
}
</style>
