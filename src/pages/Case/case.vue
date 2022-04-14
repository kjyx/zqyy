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
          <p>Our Case</p>
        </div>
      </div>
    </div>
    <!--  案例-->
    <div class="case_min">
      <div class="w">
        <!--      tabs列表-->
        <el-tabs :value="value" @tab-click="caseSwitch">
          <el-tab-pane :label="CaseType.caseTypeName" :name="CaseType.typeNameCn" v-for="CaseType in CaseTypeList"
                       :key="CaseType.id">
            <CaseList :caseList="caseList"></CaseList>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <div class="pagination">
      <!--      分页-->
      <el-pagination
          v-show="total > 12"
          background layout="prev, pager, next"
          :current-page="casePage.pageNum"
          :total="total"
          :page-size="casePage.pageSize"
          @current-change="getAllCaseList"
          style="text-align: center; margin:100px 0;"></el-pagination>
    </div>
  </div>
</template>

<script>
import CaseList from "@/pages/Case/CaseList/CaseList";
import {mapState} from 'vuex'

export default {
  name: "case",
  data() {
    return {
      value: 'qubu',
      // 总条数
      total: 0,
      // 获取案例列表带的参数
      casePage: {
        // 分类id
        typeId: "",
        // 当前页
        pageNum: 1,
        // 一页显示多少
        pageSize: 12
      },
      // 获取案例数据
      caseList: []
    }
  },
  mounted() {
    // 页面挂在调用事件
    this.$store.dispatch('Case/getCaseTitleList')
    this.getAllCaseList()
    this.Positioning(this.$route.params.id)
  },
  methods: {
    // 获取案例列表
    async getAllCaseList(page = 1) {
      if (this.$route.params.id) {
        this.casePage.typeId = this.$route.params.id
      }
      this.casePage.pageNum = page
      try {
        // 发送请求
        await this.$store.dispatch('Case/getAllCaseList', this.casePage)
        // 获取总条数
        this.total = this.CaseListDetaile.total
        // 获取数据
        this.caseList = this.CaseListDetaile.records
        // 翻页之后定位到顶部
        if (page !== 1) {
          window.scrollTo(0, 150);
        }
      } catch (e) {
        alert(e.message)
      }
    },
    // 切换列表
    caseSwitch(vc) {
      // 当前id为要的的参数
      let id = vc.index
      // id 如果等于零 就让id 等于空 因为获取全部案例的id参数为空
      if (id === '0') {
        id = ''
        // 点击的时候清除 id 重新更新 路由参数
        this.$route.params.id = ''
        this.$router.push({path: `/case`})
        this.casePage.typeId = id
        this.getAllCaseList()
      } else {
        this.casePage.typeId = Number(id) + 1
        this.$route.params.id = String(Number(id) + 1)
        this.$router.push({path: `/case/${this.$route.params.id}`})
        this.getAllCaseList()
      }
    },
    // 判断 页面初次挂在时 路由参数是多少
    Positioning(id) {
      switch (id) {
        case '2': {
          this.value = 'xuanchuan'
          break
        }
        case '3': {
          this.value = 'xingxiang'
          break
        }
        case '4': {
          this.value = 'guanggao'
          break
        }
        case '5': {
          this.value = 'chanpin'
          break
        }
        case '6': {
          this.value = 'dianying'
          break
        }
        case '7': {
          this.value = 'donghua'
          break
        }
      }
    }
  },
  computed: {
    // 获取案例导航
    ...mapState('Case', ['CaseTypeList']),
    // 获取案例列表数据
    ...mapState('Case', ['CaseListDetaile'])
  },
  components: {
    CaseList
  }
}
</script>

<style scoped lang="less">
::v-deep .el-tabs__nav-wrap {
  display: flex;
  justify-content: center;
}

::v-deep .el-tabs__header {
  margin: 0 0 50px;
}
</style>
