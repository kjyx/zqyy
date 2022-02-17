<template>
  <div class="news_List">
    <ul>
      <li @click="$router.push({path:`/newsinfo/${newsListInfo.id}`})" v-for="newsListInfo in newsInfo" :key="newsListInfo.id">
        <div class="card-box">
          <div class="img-left">
            <img :src=newsListInfo.pic alt="">
          </div>
          <div class="text-right">
            <div class="text">
              <h1>{{newsListInfo.newsTitle}}</h1>
              <div class="text_p">
                <p>{{newsListInfo.newsBrief}}</p>
              </div>
              <span class="iconfont icon-chakan">查看更多</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NewsList",
  props:['newsInfo']
}
</script>
<style scoped lang="less">
.news_List{
  flex: 1;
  ul{
    width: 100%;
    height: 100%;
    //background-color: green;
    li{
      width: 100%;
      height: 240px;
      overflow: hidden;
      cursor: pointer;
      background-color: #FEFEFE;
      box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border-radius: 15px;
      margin-bottom: 100px;
      .card-box{
        display: flex;
        width: 100%;
        height: 100%;
        .img-left{
          width: 340px;
          height: 100%;
          //background-color: green;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .text-right{
          display: flex;
          align-items: center;
          flex: 1;
          margin: 0 50px;
          //background-color: green;
          .text{
            width: 100%;
            height: 170px;
            margin-top: 20px;
            //background-color: pink;
            h1{
              font-size: 20px;
            }
            .text_p{
              width: 100%;
              height: 50px;
              margin-top: 30px;
              padding-bottom: 5px;
              border-bottom: 2px solid #ccc;
              p{
                font-size: 13px;
                letter-spacing: 1px;
                line-height: 20px;
                color: #A1A1A1;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
            }
            span{
              display: inline-block;
              color: #A1A1A1;
              padding-top: 20px;
              font-size: 15px;
            }
          }
        }
      }
    }
  }
}
</style>
