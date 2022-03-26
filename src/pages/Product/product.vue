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
        <el-tabs :value="value">
          <el-tab-pane label="宣传片" name="xuanchuan">
            <trailer></trailer>
          </el-tab-pane>

          <el-tab-pane label="形象片" name="xingxiang">
            <image-slices></image-slices>
          </el-tab-pane>

          <el-tab-pane label="广告片" name="guanggao">
            <commercials></commercials>
          </el-tab-pane>

          <el-tab-pane label="产品片" name="chanpin">
            <product-piece></product-piece>
          </el-tab-pane>

          <el-tab-pane label="微电影" name="dianying">
            <micro-film></micro-film>
          </el-tab-pane>

          <el-tab-pane label="二维/三维动画" name="donghua">
            <animation></animation>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <CompanyProfile></CompanyProfile>
  </div>
</template>

<script>
import trailer from "@/pages/Product/trailer/trailer";
import ImageSlices from "@/pages/Product/ImageSlices/ImageSlices";
import ProductPiece from "@/pages/Product/ProductPiece/ProductPiece";
import Commercials from "@/pages/Product/Commercials/Commercials";
import MicroFilm from "@/pages/Product/MicroFilm/MicroFilm";
import Animation from "@/pages/Product/2-animation/animation";

export default {
  name: "product",
  data(){
    return{
      value: 'xuanchuan'
    }
  },
  components: {
    Animation,
    MicroFilm,
    Commercials,
    ProductPiece,
    ImageSlices,
    trailer
  },
  mounted() {
    this.handleChangProduct(this.$route.params.id)
  },
  methods: {
    handleChangProduct(id) {
      let Id = Number(id) - 1
        switch (Id) {
          case 0:{
            this.value = 'xuanchuan'
            break
          }
          case 1:{
            this.value = 'xingxiang'
            break
          }
          case 2:{
            this.value = 'guanggao'
            break
          }
          case 3:{
            this.value = 'chanpin'
            break
          }
          case 4:{
            this.value = 'dianying'
            break
          }
          case 5:{
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
