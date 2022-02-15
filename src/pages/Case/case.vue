<template>
<div>
  <!--  关于-->
  <div class="box-about">
    <div class="w">
      <div class="hander-text">
        <div class="title">
          <h1>案例中心</h1>
          <span></span>
        </div>
        <p>Case center</p>
      </div>
    </div>
  </div>
<!--  案例-->
  <div class="case_min">
    <div class="w">
<!--      tabs数据-->
      <el-tabs value="quanbu">
        <el-tab-pane  label="全部案例" name="quanbu">
          <CaseChildren></CaseChildren>
        </el-tab-pane>
        <el-tab-pane  label="宣传片" name="xuanchuan">
          <CaseChildren></CaseChildren>
        </el-tab-pane>
        <el-tab-pane  label="形象片" name="xingxiang">
          <CaseChildren></CaseChildren>
        </el-tab-pane>
        <el-tab-pane  label="广告片" name="guanggao">
          <CaseChildren></CaseChildren>
        </el-tab-pane>
        <el-tab-pane  label="产品片" name="chanpin">
          <CaseChildren></CaseChildren>
        </el-tab-pane>
        <el-tab-pane  label="微电影" name="weidianying">
          <CaseChildren></CaseChildren>
        </el-tab-pane>
        <el-tab-pane  label="二维/三维动画" name="donghua">
          <CaseChildren></CaseChildren>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
  <div class="pagination">
    <!--      分页-->
    <el-pagination background layout="prev, pager, next" :total="1000" style="text-align: center; margin:100px 0;"></el-pagination>
  </div>
</div>
</template>

<script>
import CaseChildren from "@/pages/Case/CaseChildren/CaseChildren";
export default {
  name: "case",
  methods:{
  },
  components:{
    CaseChildren
  }
}
</script>

<style scoped lang="less">
.box-about{
  width: 100%;
  height: 120px;
  //background-color: pink;
  .hander-text{
    width: 100%;
    height: 70px;
    //background-color: green;
    text-align: center;
    margin-bottom: 30px;
    .title{
      position: relative;
      width: 130px;
      margin: 0 auto;
      h1{
        display: inline-block;
        font-size: 27px;
        font-weight: 550;
        letter-spacing: 4px;
      }
      span{
        position: absolute;
        top: -7px;
        left: -5px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: rgba(230,33,42,0.9);
        z-index: -1;
      }
    }
    p{
      font-size: 20px;
      color: #7b7b7b;
    }
  }
}
::v-deep .el-tabs__nav-wrap{
  display: flex;
  justify-content: center;
}
::v-deep .el-tabs__header{
  margin: 0 0 50px;
}
</style>
