<template>
  <div>
    <insidepageheader></insidepageheader>
    <!--  地图-->
    <div class="about_case">
      <div class="w">
        <div class="about_case-map" id="allmap"></div>
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
                <div class="name public" ref="nameBox">
                  <input v-model="fromData.feddBackName" type="text" placeholder="您的姓名" @change="validationName">
                </div>
                <div class="phone public" ref="phoneBox">
                  <input v-model="fromData.feddBackTel" type="text" placeholder="您的电话" @change="PhoneVerification">
                </div>
                <div class="feedback">
                  <textarea v-model="fromData.feddBackContent" placeholder="您反馈的内容"></textarea>
                </div>
            </div>
            <el-button style="width: 100%;background-color:#332c2b; height: 60px; color: #fff;" @click="SubmitForm">
              确认提交
            </el-button>
          </div>
        </div>
      </div>
    </div>
    <CompanyProfile></CompanyProfile>
  </div>
</template>

<script>
import {reqFrom} from "@/api";

export default {
  name: "relation",
  data() {
    return {
      // 姓名正则
      nameRegular: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,
      // 电话正则
      phoneRegular: /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/,
      // 表单数据
      fromData: {
        feddBackName: '',
        feddBackTel: '',
        feddBackContent: ''
      }
    }
  },
  mounted() {
    // 地图
    var map = new BMapGL.Map('allmap');
    var point = new BMapGL.Point(114.671202, 33.616546);
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
  methods: {
    // 姓名验证
    validationName() {
      let nameBox = this.$refs.nameBox
      if (this.nameRegular.test(this.fromData.feddBackName)) {
        nameBox.style.borderBottom = '2px solid green'
      } else {
        nameBox.style.borderBottom = '2px solid red'
      }
    },
    // 电话验证
    PhoneVerification() {
      let phoneBox = this.$refs.phoneBox
      if (this.phoneRegular.test(this.fromData.feddBackTel)) {
        phoneBox.style.borderBottom = '2px solid green'
      } else {
        phoneBox.style.borderBottom = '2px solid red'
      }
    },
    // 点击提交发送请求
    async SubmitForm() {
      let nameBox = this.$refs.nameBox
      let phoneBox = this.$refs.phoneBox
      // 判断 如果姓名不对 或者为空 或者电话不对 或者为空 或者 反馈内容为空 都 返回提交失败
      if (!this.nameRegular.test(this.fromData.feddBackName) ||
          this.fromData.feddBackName === '' ||
          !this.phoneRegular.test(this.fromData.feddBackTel) ||
          this.fromData.feddBackTel === '' ||
          this.fromData.feddBackContent === ''
      ) {
        this.$message.error('提交失败');
      } else {
        // 发送请求
        const result = await reqFrom(this.fromData)
        if (result.code === 200) {
          this.$message({message: '提交成功', type: 'success'});
          // 提交成功之后 吧 值清空 颜色变回来
          this.fromData.feddBackName = ''
          this.fromData.feddBackContent = ''
          this.fromData.feddBackTel = ''
          phoneBox.style.borderBottom = '2px solid #595353'
          nameBox.style.borderBottom = '2px solid #595353'
        } else {
          this.$message.error('提交失败');
        }
      }
    }
  },
}
</script>

<style scoped lang="less">
// 地图
.about_case {
  width: 100%;
  height: 715px;
  margin-bottom: 100px;
  //background-color: black;
  .about_case-map {
    width: 100%;
    height: 100%;
  }
}

// 联系我们
.box-contact {
  width: 100%;
  height: 350px;
  margin-bottom: 100px;
  //background-color: pink;
  .contact {
    display: flex;
    width: 100%;
    height: 100%;
    //background-color: green;
    .contact_left {
      width: 50%;
      height: 100%;
      //background-color: purple;
      padding-left: 40px;

      .title {
        color: #e6232b;

        h1 {
          font-size: 30px;
          font-weight: 500;
        }

        p {
          font-size: 15px;
          font-weight: 600;
          padding-top: 5px;
        }
      }

      .contact_list {
        margin-top: 30px;

        li {
          padding-bottom: 20px;
        }

        h3 {
          font-size: 15px;
          font-weight: 800;
        }

        p {
          font-size: 14px;
          padding-top: 5px;
        }
      }
    }

    .contact_right {
      width: 50%;
      height: 100%;
      //background-color: pink;
      .contact-right_form {
        width: 100%;
        height: 83%;
        //background-color: green;
        overflow: hidden;

        .public {
          width: 100%;
          height: 25px;
          //background-color: skyblue;
          border-bottom: 2px solid #595353;
          margin-bottom: 50px;
          padding-bottom: 5px;
        }

        .feedback {
          width: 100%;
          height: 100px;
          //background-color: skyblue;
          border-bottom: 2px solid #595353;

          textarea {
            width: 100%;
            height: 100%;
            border: 0;
            outline: none;
            // 禁止拉伸
            resize: none;
            font-size: 17px;
          }
        }

        input {
          width: 100%;
          height: 100%;
          border: 0;
          outline: none;
          font-size: 17px;
        }
      }
    }
  }
}
</style>
