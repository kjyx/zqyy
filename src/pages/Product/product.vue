<template>
  <div>
    <div class="box-about">
      <div class="w">
        <div class="hander-text">
          <div class="title">
            <h1>产品中心</h1>
            <span></span>
          </div>
          <p>Product Center</p>
        </div>
      </div>
    </div>
    <div class="min">
      <div class="w">
        <el-tabs :value="value" @tab-click="abc">
          <el-tab-pane :label="item.label" :name="item.value" v-for="item in titleList" :key="item.id"></el-tab-pane>
        </el-tabs>
          <router-view></router-view>
      </div>
    </div>
    <CompanyProfile></CompanyProfile>
  </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return {
      value:'xuanchuan',
      titleList: [
        {id: 1, value: 'xuanchuan', label: '宣传片', url: '/product/trailer'},
        {id: 2, value: 'xingxing', label: '形象片', url: '/product/image-slices'},
        {id: 3, value: 'guanggao', label: '广告片', url: '/product/commercials'},
        {id: 4, value: 'chanpin', label: '产品篇', url: '/product/product-piece'},
        {id: 5, value: 'dianying', label: '微电影', url: '/product/micro-film'},
        {id: 6, value: 'donghua', label: '二/三维动画', url: '/product/animation'}
      ]
    }
  },
  mounted() {
    this.Positioning(this.$route.path)
  },
  methods: {
    abc(a) {
      this.titleList.forEach(item => {
        if (item.label === a.label) {
          this.$router.push({path:item.url})
        }
      })
    },
    // 这个是页面第一次挂在时监听路由 显示高亮
    Positioning(path) {
      switch (path) {
        case '/product/trailer': {
          this.value = 'xuanchuan'
          break
        }
        case '/product/image-slices': {
          this.value = 'xingxiang'
          break
        }
        case '/product/commercials': {
          this.value = 'guanggao'
          break
        }
        case '/product/product-piece': {
          this.value = 'chanpin'
          break
        }
        case '/product/micro-film': {
          this.value = 'dianying'
          break
        }
        case '/product/animation': {
          this.value = 'donghua'
          break
        }
      }
    }
  },
  // 监听是为了防止用户在当前页面点击 footer下的导航 tabs 类名不切换
  watch:{
    $route(to){
      switch (to.path) {
        case '/product/trailer': {
          this.value = 'xuanchuan'
          break
        }
        case '/product/image-slices': {
          this.value = 'xingxiang'
          break
        }
        case '/product/commercials': {
          this.value = 'guanggao'
          break
        }
        case '/product/product-piece': {
          this.value = 'chanpin'
          break
        }
        case '/product/micro-film': {
          this.value = 'dianying'
          break
        }
        case '/product/animation': {
          this.value = 'donghua'
          break
        }
      }
    }
  }
}
</script>

<style scoped>

::v-deep .el-tabs__nav-wrap {
  display: flex;
  justify-content: center;
}

::v-deep .el-tabs__header {
  margin: 0 0 50px;
}
</style>
