<template>
  <div class="box">
    <div class="mai_hete">
      <span class="hete_s1">
        <img src="../../public/切图/logo.png"/>
      </span>
      <span>装修方案</span>
      <span class="hete_s2">
        <span class="iconfont icon-user"></span>
        <span class="iconfont icon-nav"></span>
      </span>
    </div>
    <div class="mai_zhong">
     <div class="zh_a1">局部装修</div>
     <div class="zh_a2">
        <div class="a2_z">
          <p>399元/m²半包装修套餐</p>
          <p class="h">特惠：<span>可选300元/m²品牌主材包</span></p>
        </div>
        <div class="a2_y">已预约295套</div>
     </div>
    </div>
    <div class="mai_zx">
       <div class="zh_a1">全屋套餐</div>
      <div class="zh_a2">
        <div class="a2_z">
          <p>699元/m²全包精装套餐</p>
          <p class="h">正式发售：<span>全包套餐火爆预约中</span></p>
        </div>
        <div class="a2_y">已预约221套</div>
     </div>
    </div>
    <div class="mai_x">
      房先森互联网家装有别于传统装修公司与其他装修中介平台，
      以自营模式整合设计师与项目经理，杜绝项目转包外包，
      利用互联网将工地进行在线全景直播，通过去中间环节，
      提供装修套餐+个性化定制服务。
    </div>
    <div class="mai_xx">
      <p> 服务热线：400-9977-658</p>
        <ul>
          <li>触屏版</li>
          <li>电脑版</li>
          <li>关于我们</li>
          <li>联系我们</li>
        </ul>
    </div>
    <div class="mai_zt">
          <img src="../../public/切图/quoten_bottom.png">
    </div>
  </div>
</template>

<script>
export default {

};
</script>



<style>
@import "../gongju/iconfont.css";

.box {
  width: 100%;
  height: 500px;
  /* background: tomato; */
}
.mai_hete {
  width: 100%;
  height: 80px;
  border-bottom: 8px solid #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size:25px;
  margin-bottom: 5px;
}
.hete_s1 img {
  width: 135px;
}
.hete_s2 span{
    font-size: 25px;
    margin-left: 15px;
}
.mai_zhong{
  width: 100%;
  height:300px;
  /* background: teal; */
  background: url(../../public/切图/case/case.jpg) no-repeat 0px 0px;
  background-size: 100%;
  border-bottom: 10px solid #eeeeee;
  margin-bottom: 5px;
}
.zh_a1{
  width: 100px;
  height: 38px;
  line-height: 38px;
  background: #38C893;
  font-size: 24px;
  color: #eeeeee;
}
.zh_a2{
  margin-top: 150px;
  width: 100%;
  height: 100px;
  /* background:teal;  */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 21px;
}
.a2_z{
  margin: 10px;
}
.a2_z p{
  margin-bottom: 5px;
}
.a2_z .h{
    color: gray;
}
.a2_z span{
  color: #FE6971;
}
.a2_y{
  background: #FF4450;
  width: 145px;
  height: 70px;
  line-height: 70px;
  font-size: 23px;
  border-radius: 30px 0px 0px 30px;
  color: wheat;
}
.mai_zx{
  width: 100%;
  height:300px;
  /* background: teal; */
  background: url(../../public/切图/case/case1.jpg) no-repeat 0px 0px;
  background-size: 100%;
    border-bottom: 10px solid #eeeeee;
}
.mai_x{
  width: 100%;
  height: 170px;
  /* background: turquoise; */
  border-bottom: 10px solid #eeeeee;
  font-size: 23px;
}
.mai_xx{
  width: 100%;
  height: 100px;
  font-size: 23px;
}
.mai_xx p{
    text-align: center;
      margin-bottom: 20px;
}
.mai_xx ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.mai_zt{
  width: 100%;
  height: 90px;
  background: #333333
}
</style>