<template>
  <full-page :options="options" ref="page" id="fullpage">
    <!--      第一屏-->
    <div class="section" ref="section1">
      <div class="mbox mbox1" style="cursor:pointer;">
        <!--        轮播图-->
        <div class="swiper-container" ref="floor1Swiper">
          <div class="swiper-wrapper">
            <!--            图一-->
            <div class="swiper-slide" v-for="item in videoList" :key="item.id">
              <div class="banImg">
                <div class="imgBg">
                  <video width="100%" height="100%" :src="item.url"
                         autoplay="autoplay" loop="loop" muted="muted">
                  </video>
                </div>
                <div class="mask"
                     style="position: absolute;top: 0;left: 0; width: 100%;height: 100%;background-color:rgba(0,0,0,0.5); z-index: 1"></div>
              </div>
              <!--              第一个轮播图里的内容-->
              <div class="banText">
                <h1 class="wow bounceInLeft" data-wow-duration="1s">做企业宣传片中启影业</h1>
                <h1 class="wow bounceInLeft" data-wow-duration="2s">用视频提升企业营销力</h1>
                <p class="wow  bounceInDown" data-wow-duration="3s">USE VIDEO TO ENHANCE CORPORATE SALES</p>
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <!--          <div class="swiper-pagination" style="bottom: 50px"></div>-->
        </div>
      </div>
    </div>

    <!--      第二屏-->
    <div class="section ">
      <div class="mbox mbox2">
        <div class="banImg banImg2 wow bounceInRight " data-wow-duration="2s" style=" width: 60%;">
          <!--          左边背景图片-->
          <div class="imgBg" style="background-image: url(./images/banner01.jpg);">
            <video width="100%" height="100%" src="http://image.zqszys.com/voide/1120X940-1_x264.mp4"
                   autoplay="autoplay" loop="loop" muted="muted"></video>
          </div>
          <div class="mask"
               style="position: absolute;top: 0;left: 0; width: 100%;height: 100%;background-color:rgba(0,0,0,0.5); z-index: 1"></div>
          <!--          数字滚动列表-->
          <div class="data" style="z-index: 1">
            <ul class=" middle_left_leftCont">
              <li v-for="(item,index) in middle_left_leftCont" :key="index">
                <div class="datalist">
                  <animate-number from="0" :to="item.num" duration="10000" class="h1"></animate-number>
                  <span>{{ item.name }}</span>
                </div>
                <p>{{ item.msg }}</p>
              </li>
            </ul>
          </div>
        </div>
        <!--        右边内容-->
        <div class="banText2 wow bounceInLeft " data-wow-duration="2s">
          <div class="box box1" style="max-height: 60%">
            <div class="box_top about">
              <h1>ABOUT</h1>
              <p>US</p>
              <p>中启影业</p>
            </div>
            <div class="box_bottom">
              <h1>我们能做什么</h1>
              <p>WE CAN DO IT</p>
              <div class="duanluo">
                <p>
                  中启影业是一家以影视策划制作为核心的传媒品牌公司。致力于影视广告策划、产品专题策划、企业宣传策划、品牌整合推广、媒体投放、晚会策划、平台直播等全系服务，为全国各类型企业、组织、个人提供一站式的影视制作及视频营销服务整
                  体解决方案。公司拥有才华横溢的创作团队和制作班底，运用特有的拍摄技巧和创意。迄今为止，中启影视拥有国内众多影视合作资源与协拍单位，服务多家国内有名企业，拍摄足迹遍布中国各个省市地区。</p>
              </div>
            </div>
            <el-button type="primary" style="padding: 0;" class="button" @click="$router.push({path:'/product'})">
              LOOKING MORE +
            </el-button>
          </div>
        </div>
      </div>
    </div>

    <!--    第三瓶-->
    <div class="section">
      <div class="mbox mbox3">
        <div class="banImg banImg2 wow fadeInDown" data-wow-duration="2s" style=" width: 60%;">
          <!--            背景图片-->
          <div class="imgBg" style="background-image: url(./images/banner01.jpg);">
            <video width="100%" height="100%" src="http://image.zqszys.com/voide/1120X940-2_x264.mp4"
                   autoplay="autoplay" loop="loop" muted="muted"></video>
          </div>
          <div class="mask"
               style="position: absolute;top: 0;left: 0; width: 100%;height: 100%;background-color:rgba(0,0,0,0.5); z-index: 1"></div>
          <!--            图片上内容-->
          <div class="data1" style="z-index: 2">
            <div class="case">
              <div class="swiper-container" ref="caseSwiper">
                <div class="swiper-wrapper" style="padding-bottom: 24%">
                  <div class="swiper-slide" v-for="item in swiperNewsList" :key="item.id"
                       @click="$router.push({path:`/newsinfo/${item.id}`})">
                    <div class="case_box">
                      <div class="case_image">
                        <img :src=item.pic alt="">
                      </div>
                      <div class="case_text">
                        <p>{{ item.newsBrief }}</p>
                        <span>view Details</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 如果需要分页器 -->
                <!--                <div class="swiper-pagination1" style="position: absolute; left: -100px"></div>-->
              </div>
            </div>
          </div>
        </div>
        <!--        右边内容-->
        <div class="banText2 banText3 wow fadeInUp " data-wow-duration="2s">
          <div class="w">
            <div class="box box1">
              <div class="box_top about">
                <h1>ABOUT</h1>
                <p>US</p>
                <p>中启影业</p>
              </div>
              <div class="bottom1">
                <ul>
                  <li class="wow rotateInDownLeft" data-wow-duration="2s" v-for="item in rightNewsList" :key="item.id"
                      @click="$router.push({path:`/newsinfo/${item.id}`})">
                    <div class="list">
                      <div class="list-left">
                        <h1>{{ filters.formatTimer(item.createTime) }}</h1>
                        <p>{{ filters1.formatTimer(item.createTime) }}</p>
                      </div>
                      <span class="list-center"></span>
                      <div class="list-riight">
                        <p>{{ item.newsTitle }}</p>
                        <span>view Details</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    第四屏-->
    <div class="section mobx4Bg">
      <div class="mbox mbox4">
        <div style="position: absolute;top: 0;left: 0; width: 100%;height: 100%;">
          <video width="100%" style="object-fit:fill" height="100%" src="http://image.zqszys.com/voide/1920X1080-2_x264.mp4" autoplay="autoplay"
                 loop="loop" muted="muted"></video>
        </div>
        <div class="mask"
             style="position: absolute;top: 0;left: 0; width: 100%;height: 100%;background-color:rgba(0,0,0,0.5); z-index: 0"></div>
        <div class="box-top_right about">
          <h1>ABOUT</h1>
          <p>US</p>
          <p>中启影业</p>
        </div>
        <div class="box-center_list">
          <ul>
            <li class="wow fadeInLeftBig" data-wow-duration="1s">
              <div class="min">
                <i class="iconfont icon-goutong"></i>
                <p>沟通需求</p>
              </div>
            </li>
            <li class="wow fadeInLeftBig" data-wow-duration="1.5s">
              <div class="min">
                <i class="iconfont icon-chuangyi"></i>
                <p>创意提案</p>
              </div>
            </li>
            <li class="wow fadeInDownBig" data-wow-duration="1s">
              <div class="min">
                <i class="iconfont icon-paishe"></i>
                <p>前期拍摄</p>
              </div>
            </li>
            <li class="wow fadeInDownBig" data-wow-duration="1.5s">
              <div class="min">
                <i class="iconfont icon-zhizuo"></i>
                <p>后期制作</p>
              </div>
            </li>
            <li class="wow fadeInUpBig" data-wow-duration="1s">
              <div class="min">
                <i class="iconfont icon-shenpian"></i>
                <p>审片</p>
              </div>
            </li>
            <li class="wow fadeInUpBig" data-wow-duration="1.5s">
              <div class="min">
                <i class="iconfont icon-dinggao"></i>
                <p>终极定稿</p>
              </div>
            </li>
            <li class="wow fadeInRightBig" data-wow-duration="1.5s">
              <div class="min">
                <i class="iconfont icon-dabao"></i>
                <p>资料打包</p>
              </div>
            </li>
            <li class="wow fadeInRightBig" data-wow-duration="1s">
              <div class="min">
                <i class="iconfont icon-jiaofu"></i>
                <p>交付成品</p>
              </div>
            </li>
          </ul>
          <ol class="tow wow fadeInUp" data-wow-duration="1s">
            <li>01.沟通细案</li>
            <li>02.细节修订</li>
            <li>03.现场勘察</li>
            <li>04.确定方案</li>
            <li>05.拍摄筹备</li>
          </ol>
          <ol class="Four wow fadeInUp" data-wow-duration="1s" style="left: 40%">
            <li>01.资料提供</li>
            <li>02.解说配音</li>
            <li>03.音乐剪辑</li>
            <li>04.画面初剪</li>
            <li>05.动画合成</li>
            <li>06.画面精简</li>
            <li>07.数字调色</li>
            <li>08.成品输出</li>
          </ol>
          <ol class="six wow fadeInUp" data-wow-duration="1s" style="left: 66.5%;">
            <li>01.成品修订</li>
          </ol>
          <ol class="eight wow fadeInUp" data-wow-duration="1s" style="left: 93%">
            <li>01.成品格式</li>
            <li>02.成品无字</li>
            <li>03.成品工程</li>
            <li>04.拍摄素材</li>
          </ol>
        </div>
        <div class="box-bottom_list"></div>
      </div>
    </div>

    <!--    第五屏-->
    <div class="section">
      <div class="mbox mbox5">
        <div class="banImg banImg2 wow bounceInRight " data-wow-duration="2s" style=" width: 60%;">
          <!--          左边背景图片-->
          <div class="imgBg" style="background-image: url(./images/banner01.jpg);">
            <img  src="./images/banner01.jpg" alt="">
          </div>
          <!--          左侧案例-->
          <div class="box_case-list5">
            <ul>
              <li v-for="item in CaseList" :key="item.id" @click="$router.push({path:`/casedetails/${item.id}`})">
                <div class="image5">
                  <img :src=item.pic alt="">
                </div>
                <div class="box-list5_icon iconfont icon-jiahao"></div>
                <div class="box-list5_text">
                  <h1>{{ item.caseTitle }}</h1>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--        右边内容-->
        <div class="banText2 wow bounceInLeft " data-wow-duration="2s">
          <div class="box box1 box5" style="max-height: 60%">
            <div class="box_top about">
              <h1>ABOUT</h1>
              <p>US</p>
              <p>中启影业</p>
            </div>
            <div class="box_bottom5">
              <ul>
                <li v-for="item in rightCaseText" :key="item.id" @click="$router.push({path:`/case`})">
                  <div class="letf-wire"></div>
                  <div class="right-text">{{ item.caseTypeName }}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    第六屏-->
    <div class="section mobx6Bg">
      <div class="mbox mbox6">
        <div style="position: absolute;top: 0;left: 0; width: 100%;height: 100%;">
          <video width="100%" style="object-fit: fill" height="100%" src="http://image.zqszys.com/voide/1920X1080-1_x264.mp4" autoplay="autoplay"
                 loop="loop" muted="muted"></video>
        </div>
        <div class="mask"
             style="position: absolute;top: 0;left: 0; width: 100%;height: 100%;background-color:rgba(0,0,0,0.3); z-index: 0"></div>
        <div class="box-top_right about">
          <h1>ABOUT</h1>
          <p>US</p>
          <p>中启影业</p>
        </div>
        <div class="box6-left">
          <div class="box6-left_top">
            <p>Don't be shy,<br>say hi.</p>
            <h1>联系我们</h1>
          </div>
          <div class="box6-left_center">
            <ul>
              <li>
                <p class="iconfont icon-dianhua">
                  400-000-6890
                </p>
              </li>
              <li>
                <p class="iconfont icon-weixin">
                  13137695001
                </p>
              </li>
              <li>
                <p class="iconfont icon-qq">
                  417035739
                </p>
              </li>
              <li class="fore">
                <p class="iconfont icon-ditu">
                  河南省周口市川汇区国贸10楼1010室
                </p>
              </li>
            </ul>
          </div>
          <div class="box6-left_bottom">
            <el-button class="iconfont icon-weixin" @click="$router.push({path:'/relation'})">需求联系</el-button>
          </div>
          <div class="box6-left_copyright">
            <p><a href="">Copyright-@202012-one.cn版权所有<br>闽ICP备案20006149号</a></p>
          </div>
        </div>
        <div class="box6-right">
          <div class="image_top">
            <img src="./images/erweima.jpg" alt="">
          </div>
          <ul>
            <li>业务范围</li>
            <li>关于我们</li>
            <li>回到首页</li>
          </ul>
        </div>
      </div>
    </div>
  </full-page>
</template>

<script>
import 'animate.css'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import mixin from '../../mixin/mixin'
import caseDateil from '@/mixin/caseDetail'
import {mapState} from "vuex";

export default {
  name: "home",
  mixins: [mixin, caseDateil],
  data() {
    return {
      // 全屏滚动数据
      options: {
        navigationTooltips: ['Home', 'Open', 'Easy', 'Touch'],
        css3: true,
        // 滚动速度
        scrollingSpeed: 600,
        // 是否显示项目导航
        navigation: true,
        responsiveHeight: 330,
        dragAndMove: true,
        dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
        controlArrows: false,
        // 字体是否随着窗口缩放而缩放
        resize: true,
        // 显示滚动条配合 动画使用
        scrollBar: true
        // sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f']
      },
      // 新闻数据
      homeNewsList: [],
      PageParmes: {
        // 当前页数
        pageNum: 1,
        // 每页显示多少个
        pageSize: 7,
      },
      filters: {
        formatTimer: (value) => {
          let date = new Date(value);
          let d = date.getDate();
          d = d < 10 ? "0" + d : d;
          return d;
        }
      },
      filters1: {
        formatTimer: (value) => {
          let date = new Date(value);
          let y = date.getFullYear();
          let MM = date.getMonth() + 1;
          MM = MM < 10 ? "0" + MM : MM;
          return y + "-" + MM;
        }
      },
      videoList: [
        {id: 1, url: 'http://image.zqszys.com/voide/1860X950-1_x264.mp4'},
        {id: 2, url: 'http://image.zqszys.com/voide/1860X950-2_x264.mp4'},
        {id: 3, url: 'http://image.zqszys.com/voide/1860X950-3_x264.mp4'}
      ]
    }
  },
  mounted() {
    new Swiper(this.$refs.floor1Swiper, {
      centeredSlides: true,
      loop: true, // 循环模式选项
      // 如果需要分页器
      // pagination: {
      //   el: '.swiper-pagination',
      //   // 点击小圆点切换图片
      //   clickable: true
      // },
      speed: 2000,
      autoplay: {
        delay: 14000,
        disableOnInteraction: true,
      },
    });
    new this.$wow.WOW({
      live: true,
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0
    }).init();
    this.getPageList()
    this.caseText()
  },
  watch: {
    swiperNewsList: {
      handler() {
        this.$nextTick(() => {
          new Swiper(this.$refs.caseSwiper, {
            centeredSlides: true,
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination1',
              // 点击小圆点切换图片
              clickable: true
            },
            autoplay: {
              delay: 5000,
              disableOnInteraction: true,
            },
          });
        })
      }
    }
  },
  methods: {
    click() {
      // vue调用fullpapge的方法
      this.$refs.page.api.moveSectionDown();
      // moveSectionDown();
    },
    // 发送请求获取新闻数据
    async getPageList(page = 1) {
      this.PageParmes.pageNum = page
      await this.$store.dispatch('News/NewsList', this.PageParmes)
      this.homeNewsList = this.allNewsList.records
    },

    // 获取第五页右侧数据
    async caseText() {
      await this.$store.dispatch('Case/getCaseTitleList')
    }
  },
  computed: {
    ...mapState('News', ['allNewsList']),
    ...mapState('Case', ['CaseTypeList']),
    // 截取轮播图的四个新闻案例
    swiperNewsList() {
      let swiperNewsList = []
      this.homeNewsList.forEach((item, index) => {
        if (index <= 3) {
          swiperNewsList.push(item)
        }
      })
      return swiperNewsList
    },

    // 截取右侧 三个新闻
    rightNewsList() {
      let rightNewsList = []
      this.homeNewsList.forEach((item, index) => {
        if (index > 3) {
          rightNewsList.push(item)
        }
      })
      return rightNewsList
    },

    // 截取 第五页右侧 案例导航
    // eslint-disable-next-line vue/no-dupe-keys
    rightCaseText() {
      let caseTextList = []
      this.CaseTypeList.forEach((item, index) => {
        if (index > 0) {
          caseTextList.push(item)
        }
      })
      return caseTextList
    }
  }
}
</script>

<style scoped lang="less">
.w {
  width: 1700px;
  margin: 0 auto;
}

.section {
  box-sizing: border-box;
  padding-left: 60px;
  overflow: hidden;
  height: 100%;
  text-align: center;

  .mbox {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;

    .banImg {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100%;

      .imgBg {
        width: 100%;
        height: 100%;
        img{
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        video {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .mbox1 {
    .banText {
      position: absolute;
      top: 33%;
      left: 7%;
      z-index: 1;
      min-width: 650px;
      color: #fff;
      text-align: left;

      h1 {
        letter-spacing: 5px;
        line-height: 67px;
        font-size: 50px;
      }

      p {
        font-size: 1px;
        padding-top: 25px;
        letter-spacing: 10px;
        font-weight: 100;
      }
    }
  }

  .mbox2, .mbox3, .mbox5 {
    display: flex;
    justify-content: space-between;

    .imgBg {
      img {
        transition: all 1.5s;

        &:hover {
          -webkit-transform: scale(1.1);
          -moz-transform: scale(1.1);
          -ms-transform: scale(1.1);
          -o-transform: scale(1.1);
          transform: scale(1.1);
        }
      }
    }

    .data {
      position: absolute;
      left: 50%;
      bottom: 24%;
      min-width: 850px;
      min-height: 120px;
      //background-color: green;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      transform: translateX(-50%);

      ul {
        display: flex;
        width: 100%;
        height: 100%;

        li {
          width: 25%;
          height: 100%;
          color: #fff;

          .h1 {
            display: inline-block;
            font-size: 45px;
          }

          span {
            display: inline-block;
            text-align: center;
            line-height: 30px;
          }

          .datalist {
            padding-top: 30px;
          }

          p {
            line-height: 35px;
            letter-spacing: 2px;
          }
        }
      }
    }

    .banText2 {
      position: relative;
      width: 40%;
      height: 100%;
      //background-color: pink;
      .box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80%;
        height: 100%;
        //background-color: green;
        overflow: hidden;
        -webkit-transform: translateY(-50%) translateX(-50%);
        -moz-transform: translateY(-50%) translateX(-50%);
        -ms-transform: translateY(-50%) translateX(-50%);
        -o-transform: translateY(-50%) translateX(-50%);
        transform: translateY(-50%) translateX(-50%);

        .box_top {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          width: 100%;
          height: 30%;
          //background-color: purple;
          overflow: hidden;
        }

        .box_bottom {
          width: 100%;
          height: 45%;
          //background-color: #000;
          text-align: left;

          h1 {
            font-size: 20px;
            letter-spacing: 2px;
          }

          p {
            font-size: 10px;
            letter-spacing: 1px;
          }

          .duanluo {
            margin-top: 15px;

            p {
              line-height: 35px;
              font-weight: bold;
              letter-spacing: 1.5px;
            }
          }
        }

        .el-button--primary {
          background-color: #a57c52;
          border-color: #a57c52;
          width: 140px;
          height: 30px;
          border-radius: 10px;
          margin-top: 8%;

          span {
            display: block !important;
            font-size: 10px !important;
            line-height: 1px !important;
          }
        }
      }
    }
  }

  .mbox3 {
    .box1 {
      max-height: 70% !important;

      /deep/ .el-button {
        padding: 0 !important;
      }
    }

    .bottom1 {
      width: 100%;
      height: 100%;
      //background-color: pink;
      overflow: hidden;
      margin-top: 10px;

      ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        li {
          width: 100%;
          height: 30%;
          border-bottom: 1px dashed #e5e5e5;
          cursor: pointer;

          .list {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            height: 100%;

            .list-left {
              margin-left: 20px;

              h1 {
                font-size: 35px;
              }

              p {
                width: 110%;
                font-size: 10px;
                font-weight: bold;
              }
            }

            .list-center {
              width: 2px;
              height: 40px;
              background-color: #ccc;
              margin-left: 50px;
            }

            .list-riight {
              margin-left: 50px;
              text-align: left;

              p {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                font-size: 15px;
                font-weight: bold;
              }

              span {
                display: block;
                padding-top: 5px;
                color: #ccc;
              }
            }
          }
        }
      }
    }

    .data1 {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 79%;
      height: 50%;
      //background-color: pink;
      -webkit-transform: translateX(-50%) translateY(-40%);
      -moz-transform: translateX(-50%) translateY(-40%);
      -ms-transform: translateX(-50%) translateY(-40%);
      -o-transform: translateX(-50%) translateY(-40%);
      transform: translateX(-50%) translateY(-40%);

      .case {
        width: 100%;
        height: 70%;
        //background-color: green;
        border-bottom: 1px solid #ccc;

        .swiper-container {
          overflow: auto;
          height: 100%;
        }

        .swiper-slide {
          background: transparent;
        }

        .case_box {
          display: flex;
          justify-content: space-between;
          width: 99%;
          height: 80%;
          margin-bottom: 60px;

          .case_image {
            flex: 1;
            //width: 45%;
            //height: 100%;
            //padding-bottom: 50px;
            img {
              width: 100%;
              height: 100%;
            }
          }

          .case_text {
            flex: 1;
            padding-left: 50px;
            color: #fff;

            p {
              padding-top: 50px;
              text-align: left;
              font-size: 25px;
              font-weight: bold;
              letter-spacing: 1px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }

            span {
              display: block;
              text-align: left;
              font-size: 10px;
              font-weight: bold;
              padding-top: 40px;
              color: #ff3700;
            }
          }
        }

        ::v-deep .swiper-container-horizontal > .swiper-pagination-bullets {
          //left: -42% !important;
        }

        ::v-deep .swiper-pagination-bullet {
          //border-radius: 0 !important;
          //background-color: #8b6239 !important;
        }

        .swiper-slide {
          cursor: pointer;
        }
      }
    }
  }

  .mbox5 {
    .box_case-list5 {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80%;
      height: 50%;
      //background-color: pink;
      -webkit-transform: translateX(-50%) translateY(-50%);
      -moz-transform: translateX(-50%) translateY(-50%);
      -ms-transform: translateX(-50%) translateY(-50%);
      -o-transform: translateX(-50%) translateY(-50%);
      transform: translateX(-50%) translateY(-50%);

      ul {
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: space-between;
        width: 100%;
        height: 100%;

        li {
          position: relative;
          width: 30%;
          height: 45%;
          background-color: green;
          cursor: pointer;
          overflow: hidden;

          .image5 {
            width: 100%;
            height: 100%;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .box-list5_icon {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: #000;
            opacity: 0;
            transform: scale(10);
            transition: all .5s;
          }

          .box-list5_text {
            position: absolute;
            bottom: -32%;
            width: 100%;
            height: 15%;
            //background-color: black;
            line-height: 32px;
            transition: bottom .5s;
            color: white;

            h1 {
              font-size: 15px;
            }
          }

          &:hover {
            .box-list5_icon {
              opacity: 0.5;
              transform: scale(1.1);
            }

            .box-list5_text {
              bottom: 0;
            }
          }
        }
      }
    }

    .box5 {
      width: 80%;
      height: 100%;
      //background-color: pink;
      .box_bottom5 {
        width: 100%;
        height: 70%;
        //background-color: green;
        ul {
          display: flex;
          align-content: space-around;
          flex-wrap: wrap;
          width: 100%;
          height: 70%;

          li {
            width: 100%;
            height: 10%;
            //background-color: purple;
            .letf-wire {
              float: left;
              width: 50%;
              height: 1px;
              margin-top: 3.5%;
              margin-left: 38px;
              background-color: #b2b2b2;
            }

            .right-text {
              float: left;
              height: 100%;
              margin-left: 20%;
              //background-color: #ff3700;
              line-height: 40px;
              font-size: 16px;
              font-weight: 800;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}

.mobx4Bg {

  .box-center_list {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateY(-50%) translateX(-50%);
    -moz-transform: translateY(-50%) translateX(-50%);
    -ms-transform: translateY(-50%) translateX(-50%);
    -o-transform: translateY(-50%) translateX(-50%);
    transform: translateY(-50%) translateX(-50%);
    width: 90%;
    height: 35%;
    //background-color: pink;
    ul {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 35%;

      li {
        width: 8%;
        height: 100%;
        background-color: #212121;
        border-radius: 20px;
        transition: all 0.5s;

        .min {
          width: 100%;
          height: 100%;
          text-align: center;

          i {
            display: inline-block;
            padding-top: 20px;
            color: white;
          }

          p {
            font-size: 17px;
            color: white;
            padding-top: 5px;
          }
        }

        &:hover {
          cursor: pointer;
          transform: scale(1.2);
        }
      }
    }

    .list1 {
      position: relative;

      ol {
        width: 10%;
        height: 20%;
        background-color: pink;
        position: absolute;
      }
    }

    .tow,
    .Four,
    .six,
    .eight {
      position: absolute;
      top: 45%;
      left: 13.5%;
      width: 7%;
      height: 100%;
      //background-color: pink;
      li {
        font-size: 15px;
        line-height: 35px;
        font-weight: bold;
        color: white;
      }
    }
  }
}

.mobx6Bg {
  .mbox6 {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .box6-left {
    position: absolute;
    top: 25%;
    left: 10%;
    width: 40%;
    height: 70%;
    //background-color: pink;
    .box6-left_top {
      color: white;

      p {
        font-size: 15px;
        font-weight: bold;
        text-align: left;
      }

      h1 {
        text-align: left;
        font-size: 48px;
        padding-top: 20px;
        letter-spacing: 5px;
      }
    }

    .box6-left_center {
      width: 100%;
      height: 20%;
      //background-color: green;
      margin-top: 8%;

      ul {
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: space-between;
        width: 100%;
        height: 100%;

        li {
          width: 30%;
          height: 40%;
          //background-color: purple;
          text-align: left;
          color: white;

          p {
            font-size: 18px;
            font-weight: 200;
          }
        }

        .fore {
          width: 100%;
        }
      }
    }

    .box6-left_bottom {
      width: 100%;
      height: 15%;
      margin-top: 10%;
      //background-color: green;
      .iconfont {
        float: left;

        span {
          font-size: 30px;
        }
      }
    }

    .box6-left_copyright {
      width: 100%;
      height: 10%;
      margin-top: 10%;
      //background-color: green;
      p {
        float: left;

        a {
          color: white;
        }
      }
    }
  }

  .box6-right {
    position: absolute;
    right: 6%;
    bottom: 6%;
    width: 6%;
    height: 40%;
    //background-color: pink;
    .image_top {
      width: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      width: 100%;
      height: 50%;
      margin-top: 30%;
      //background-color: green;
      li {
        width: 100%;
        height: 20%;
        //background-color: purple;
        color: white;
        font-size: 15px;
        cursor: pointer;
      }
    }
  }
}

.about {
  h1 {
    font-size: 30px;
    line-height: 50px;
  }

  p {
    line-height: 40px;

    &:nth-child(2) {
      font-size: 25px;
    }

    &:nth-child(3) {
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.box-top_right {
  position: absolute;
  top: 15%;
  right: 6%;
  color: white;
  text-align: right;
}
</style>
