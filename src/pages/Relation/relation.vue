<template>
<div>
  <!--  地图-->
  <div class="box-about">
    <div class="w">
      <div class="hander-text">
        <div class="title">
          <h1>联系我们</h1>
          <span></span>
        </div>
        <p>Coutact us</p>
      </div>
      <div class="about_case" id="allmap"></div>
    </div>
  </div>
<!--  信息and表单-->
  <div class="box-contact">
    <div class="w">
      <div class="contact">
        <div class="contact_left">
          <div class="title">
            <h1>PICTURES</h1>
            <p>中启影业</p>
          </div>
          <div class="contact_list">
            <ul>
              <li>
                <h3>品牌电话</h3>
                <p>4000006890</p>
              </li>
              <li>
                <h3>公司地址</h3>
                <p>周口市川汇区国贸10楼1010室内</p>
              </li>
              <li>
                <h3>公司邮箱</h3>
                <p>4000006890@qq.com</p>
              </li>
              <li>
                <h3>QQ</h3>
                <p>417035739</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="contact_right">
          <div class="contact-right_form">
            <from>
              <div class="name public"  ref="name">
                <input v-model="fromData.name" type="text" ref="name1"  placeholder="您的姓名" @change="validationName">
              </div>
              <div class="phone public">
                <input v-model="fromData.phone" type="text" name="" id="" placeholder="您的电话">
              </div>
              <div class="feedback">
                <textarea v-model="fromData.feedback" placeholder="您反馈的内容"></textarea>
              </div>
            </from>
          </div>
          <el-button style="width: 100%;background-color:#332c2b; height: 60px; color: #fff;">确认提交</el-button>
        </div>
      </div>
    </div>
  </div>
  <CompanyProfile></CompanyProfile>
</div>
</template>

<script>
export default {
  name: "relation",
  data(){
    return{
      fromData:{
        name:'',
        phone:'',
        feedback:''
      }
    }
  },
  mounted() {
    var map = new BMapGL.Map('allmap');
    var point = new BMapGL.Point(114.671202,33.616546);
    map.centerAndZoom(point, 18);
// 创建点标记
    var marker = new BMapGL.Marker(point);
    map.addOverlay(marker);
    var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
    map.addControl(scaleCtrl);
    var zoomCtrl = new BMapGL.ZoomControl();  // 添加比例尺控件
    map.addControl(zoomCtrl);
// 创建信息窗口
    var opts = {
      width: 200,
      height: 100,
      title: '河南中启影业科技有限公司'
    };
    var infoWindow = new BMapGL.InfoWindow('地址：河南省周口市川汇区交通大道国贸10楼1010室', opts);
// 点标记添加点击事件
    map.openInfoWindow(infoWindow, point); // 开启信息窗口
  },
  methods:{
    // 姓名验证
    validationName(){
      var reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
      let name = this.$refs.name
      let name1 = this.$refs.name1
      if (reg.test(name1.value)) {
        name.style.borderBottom = '2px solid green'
      }else {
        name.style.borderBottom = '2px solid red'
      }
    }
    // 电话验证

  },
}
</script>

<style scoped lang="less">
// 地图
.box-about{
  width: 100%;
  height: 910px;
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
  .about_case{
    width: 100%;
    height: 715px;
    background-color: black;
  }
}

// 联系我们
.box-contact{
  width: 100%;
  height: 350px;
  margin-bottom: 100px;
  //background-color: pink;
  .contact{
    display: flex;
    width: 100%;
    height: 100%;
    //background-color: green;
    .contact_left{
      width: 50%;
      height: 100%;
      //background-color: purple;
      padding-left: 40px;
      .title{
        color: #e6232b;
        h1{
          font-size: 30px;
          font-weight: 500;
        }
        p{
          font-size: 15px;
          font-weight: 600;
          padding-top: 5px;
        }
      }
      .contact_list{
        margin-top: 30px;
        li{
          padding-bottom: 20px;
        }
        h3{
          font-size: 15px;
          font-weight: 800;
        }
        p{
          font-size: 14px;
          padding-top: 5px;
        }
      }
    }
    .contact_right{
      width: 50%;
      height: 100%;
      //background-color: pink;
      .contact-right_form{
        width: 100%;
        height: 83%;
        //background-color: green;
        overflow: hidden;
        .public{
          width: 100%;
          height: 25px;
          //background-color: skyblue;
          border-bottom: 2px solid #595353;
          margin-bottom: 50px;
        }
        .feedback{
          width: 100%;
          height: 100px;
          //background-color: skyblue;
          border-bottom: 2px solid #595353;
          textarea{
            width: 100%;
            height: 100%;
            border: 0;
            outline: none;
            // 禁止拉伸
            resize: none;
          }
        }
        input{
          width: 100%;
          height: 100%;
          border: 0;
          outline: none;
        }
      }
    }
  }
}
</style>
