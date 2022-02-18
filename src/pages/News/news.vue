<template>
<div>
  <!--  关于-->
  <insidepageheader></insidepageheader>
  <div class="news">
    <div class="w">
      <div class="news-box">
        <!--  左侧导航区-->
        <div class="news_navigation">
          <ul class="navigation-list">
            <li class="all-news box" v-for="item in newsNavigation" :key="item.id" @click="className(item.id)" :class="{active:current === item.id}">
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
        <!--  右侧列表-->
        <NewsList :newsInfo="newsInfo"></NewsList>
      </div>
    </div>
  </div>
<!--  分页器-->
  <div class="pagination">
    <!--      分页-->
    <el-pagination
        background layout="prev, pager, next"
        :current-page="PageParmes.pageNum"
        :total="total"
        :page-size="PageParmes.pageSize"
        @current-change="getPageList"
        style="text-align: center; margin:100px 0;"></el-pagination>
  </div>
</div>
</template>

<script>
import NewsList from "@/pages/News/NewsList/NewsList";
import { getNewsType } from "@/api";
import {mapState} from "vuex";
export default {
  name: "news",
  data(){
    return{
      //总页数
      total:0,
      PageParmes:{
        // 当前页数
        pageNum:1,
        // 每页显示多少个
        pageSize:5,
      },
      // 左侧新闻导航数据
      newsNavigation:[
        {id:"" , name: '全部新闻/ALL news'},
        {id:2 , name: '公司新闻/Company news'},
        {id:3 , name: '行业新闻/Industry news'}
      ],
      current:'',
      // 进行遍历的数据
      newsInfo:[],
    }
  },
  mounted() {
    this.getPageList()
  },
  methods:{
    // 点击导航发送请求 获取新闻分类
    async className(id){
      this.current = id
      // 切换的时候添加 typeId 属性
      this.$set(this.PageParmes,'typeId',id)
      this.PageParmes.pageNum = 1
      const result = await getNewsType(this.PageParmes)
      if(result.code === 200){
        this.total = result.data.total
        this.newsInfo = result.data.records
        delete this.PageParmes.typeId
      }
    },

    // 获取新闻列表 这里时在仓库发送的请求 因为home页面也要用到那个数据
   async getPageList( page = 1 ){
      this.PageParmes.pageNum = page
     try {
        // 发送请求
       await this.$store.dispatch('News/NewsList',this.PageParmes)
       this.newsInfo = this.allNewsList.records
       this.total = this.allNewsList.total
       window.scrollTo(0,document.body.scrollHeight);
       window.scrollTo(0,0);
     }catch (e) {
       alert(e.message)
     }
    }
  },
  computed:{
    ...mapState('News',['allNewsList'])
  },
  components:{
    NewsList
  }
}
</script>

<style scoped lang="less">
// 新闻
.news{
  margin-bottom: 30px;
}
.news-box{
  display: flex;
  width: 100%;
  height: 1600px;
  //background-color: pink;
  .news_navigation{
    width: 550px;
    height: 570px;
    margin-right: 70px;
    //background-color: green;
    .navigation-list{
      width: 100%;
      height: 100%;
      .box{
        width: 70%;
        height: 120px;
        margin: 0 auto 60px auto;
        background-color: #332C2B;
        cursor: pointer;
        color:#7F7B7A ;
        border-radius: 30px;
        p{
          font-size: 20px;
          text-align: center;
          line-height: 120px;
        }
      }
    }
  }
}
.active{
  background-color: red!important;
  color: white !important;
}
</style>
