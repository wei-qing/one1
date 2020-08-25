<template>
  <div>
    <div class="wrap">
      <div class="header">
        <!-- 头部 -->
        <div class="header_left_logo">
          <img src="../../public/切图/logo.png" alt="" />
        </div>
        <div class="header_center">装修流程</div>
        <div class="header_right_logo">
          <div>
            <p>
              <i
                class="iconfont icon-user"
                style="font-size:20px;color:#999999"
              ></i>
            </p>
            <p>我的</p>
          </div>
          <div>
            <p>
              <i
                class="iconfont icon-nav"
                style="font-size:20px;color:#999999"
              ></i>
            </p>
            <p style="margin-top:3px;">导航</p>
          </div>
        </div>
      </div>

      <div class="content">
        <p class="p1">【装修前】</p>
        <p class="p2">NO.1收房验房</p>
        <p class="p3">NO.2装修预算</p>
        <p class="p4">NO.2装修风水</p>
        <p class="p5">NO.2装修设计</p>
        <p class="p6">【装修中】</p>
        <p class="p7">NO.2材料选择</p>
        <p class="p8">NO.2材料选择</p>
        <p class="p9">NO.2材料选择</p>
        <p class="p10">NO.10材料选择</p>
        <p class="p11">NO.11材料选择</p>
        <p class="p12">NO.12材料选择</p>
        <p class="p13">NO.13材料选择</p>
        <p class="p14">NO.14材料选择</p>
        <p class="p15">【装修后】</p>

        <img width="100%" src="../../public/切图/process/process1.jpg" alt="" />
        <img width="100%" src="../../public/切图/process/process2.jpg" alt="" />
        <img width="100%" src="../../public/切图/process/process3.png" alt="" />
        <img src="../../public/切图/process/process4.jpg" width="100%" alt="" />
        <div>
          公司经营范围：各种涂料施工、居家、写字楼、店铺装饰、酒店、商场、娱乐城、别墅、工业厂房、钢结构厂房、厂房二次装修及整改、防水工程、水电空调设备安装工程、及各种设计等。多年来，业绩非凡。所承接并完成的各类大、中、小型工程均受到了业主的一致好评，在装饰市场赢得良好的信誉，在业界享有较高的知名度。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {},
};
</script>

<style scoped>
@import "../gongju/iconfont.css";
.p1{
  position: absolute;
  top: 200px;
  left: 40px;
  color: #FF4351;
  font-size: 36px;
}
.p2{
  position: absolute;
  top: 271px;
  left: 91px;
  color: #000;
  font-size: 23px;
  font-weight: 100;
}
.p3{
  position: absolute;
  top: 345px;
  left: 110px;
  color: #000;
  font-size: 23px;
  font-weight: 100;
}
.p4{
  position: absolute;
  top: 420px;
  left: 80px;
  color: #000;
  font-size: 23px;
  font-weight: 100;
}
.p5{
  position: absolute;
  top: 499px;
  left: 128px;
  color: #000;
  font-size: 23px;
  font-weight: 100;
}
.p6{
  position: absolute;
  top: 621px;
  left: 195px;
  color: #229CF4;
  font-size: 23px;
  font-weight: 100;
}
.p7{
 position: absolute;
  top: 692px;
  left: 128px;
  color: #000;
  font-size: 23px;
  font-weight: 100;
}
.p8{
 position: absolute;
  top: 769px;
  left: 78px;
  color: #000;
  font-size: 23px;
  font-weight: 100;
}
.p9{
 position: absolute;
  top: 846px;
  left: 128px;
  color: #000;
  font-size: 23px;
  font-weight: 100;
}
.p10{
 position: absolute;
  top: 923px;
  left: 128px;
  color: #000;
  font-size: 23px;
  font-weight: 100;
}
.p11{
 position: absolute;
  top: 1117px;
  left: 81px;
  color: #000;
  font-size: 23px;
  font-weight: 100;
}
.p12{
 position: absolute;
  top: 1268px;
  left: 79px;
  color: #000;
  font-size: 23px;
  font-weight: 100;
}
.p13{
 position: absolute;
  top: 1194px;
  left: 128px;
  color: #000;
  font-size: 23px;
  font-weight: 100;
}
.p14{
 position: absolute;
  top: 1343px;
  left: 128px;
  color: #000;
  font-size: 23px;
  font-weight: 100;
}
.p15{
 position: absolute;
  top: 1051px;
  left: 62px;
  color: #7B72E9;
  font-size: 23px;
  font-weight: 100;
}








.header {
  width: 100%;
  height: 64px;
  /* background: turquoise; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header_left_logo {
  width: 40%;
  height: 100%;
  /* background: chartreuse; */
}
.header_left_logo img {
  width: 80%;
  margin-top: 16px;
  margin-left: 10px;
}
.header_right_logo {
  width: 35%;
  height: 100%;
  /* background: cornflowerblue; */
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.header_right_logo div {
  margin-top: 6px;
}
.header_right_logo div p {
  text-align: center;
}

.header_center {
  font-size: 20px;
}
</style>
