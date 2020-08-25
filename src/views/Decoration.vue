<template>
  <div>
    <header>
      <div>
        <img src="../../public/logo.png" />
      </div>
      <div>装修贷款</div>
      <div class="top-icon">
        <div class="iconfont icon-user"></div>
        <div>我的</div>
      </div>
      <div class="top-icon">
        <div class="iconfont icon-nav"></div>
        <div>导航</div>
      </div>
    </header>
    <section>
      <div style="width:100%">
        <img src="../../public/loans.jpg" style="width:100%" />
      </div>
      <div class="section-top">
        <div>申请房先森装修贷</div>
      </div>
      <div class="section-input">
        <div>
          <input type="text" placeholder="电话" />
        </div>
        <div>
          <input type="text" placeholder="小区名" />
        </div>
        <div>
          <input type="text" placeholder="建筑面积" />
        </div>
        <div>
          <input type="button" value="立即申请" class="section-input-but" />
        </div>
      </div>
      <div class="section-two">
        <div class="one section-two-rule">
          <div style="height:2rem"></div>
          <div class="one-one">什么是装修贷款</div>
          <div style="width:100%;border:1px dashed #39c894;text-indent:2rem;padding:1rem 0">
            装修贷款是无担保个人信用贷款，是房先森装修和建行共同为准备装修的工薪人士发送的个人信用贷款，用于房屋装修相关的支出
            <i>无需担保，无需抵押，</i> 以个人信誉度作为判断依据，
            <i>最高可贷50万。</i>
          </div>
        </div>
        <div class="two section-two-rule">
          <div class="title">申请流程</div>
          <div class="two-flex">
            <div class="two-flex-box">
              <div class="iconfont icon-pencle two-flex-icon"></div>
              <div>01</div>
              <div>在线预约</div>
            </div>
            <div class="two-flex-box">
              <div class="iconfont icon-audit two-flex-icon"></div>
              <div>02</div>
              <div>银行评估初审</div>
            </div>
            <div class="two-flex-box">
              <div class="iconfont icon-loans two-flex-icon"></div>
              <div>03</div>
              <div>提交材料放款</div>
            </div>
          </div>
        </div>
        <div class="three section-two-rule">
          <div class="title">申请条件</div>
          <div class="three-connect">
            <div class="three-connect-div" style="border-right: 1px solid #eee;">
              <div class="iconfont icon-social-security" style="font-size: 4rem; color:#2bb281;"></div>
              <div>社保缴纳记录</div>
            </div>
            <div class="three-connect-div" style="border-bottom: 1px solid #eee;">
              <div class="iconfont icon-social-security" style="font-size: 4rem; color:#2bb281;"></div>
              <div>购房资料或者房产证</div>
            </div>
            <div class="three-connect-div" style="border-top: 1px solid #eee;">
              <div class="iconfont icon-social-security" style="font-size: 4rem; color:#2bb281;"></div>
              <div>房管局拉房产证明</div>
            </div>
            <div class="three-connect-div" style="border-left: 1px solid #eee;">
              <div class="iconfont icon-social-security" style="font-size: 4rem; color:#2bb281;"></div>
              <div>没有银行违约的信用记录</div>
            </div>
          </div>
        </div>
      </div>
      <div class="comparison">
          <div style="height:1rem"></div>
          <div><img src="../../public/loans1.png" style="width:100%"></div>
          <div class="comparison-best">
              <div class="comparison-best-inside"></div>
              <div class="comparison-best-center"></div>
              <div class="comparison-best-inside"></div>
          </div>
      </div>
    </section>
    <footer>
      <div>服务热线：400-9977-658</div>
      <div class="footer-nav">
        <div>触摸版</div>
        <div>电脑版</div>
        <div>关于我们</div>
        <div>联系我们</div>
      </div>
      <div class="footer-footer">&copy;2016 sirfang.com 刚需房装修就找房先森</div>
    </footer>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
@import "../iconfont/iconfont.css";
* {
  margin: 0;
  padding: 0;
}
header {
  display: flex;
  margin: 16px 18px;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
}
header img {
  width: 8rem;
}
.top-icon {
  text-align: center;
  color: #999;
  font-size: 1rem;
}
.section-top {
  text-align: center;
  font-size: 1.2rem;
}
.section-input {
  width: 100%;
}
.section-input div {
  width: 15rem;
  margin: 0.5rem auto;
}
.section-input input {
  height: 1.8rem;
  width: 100%;
  border: 1px solid #eaeaea;
  color: #eaeaea;
}
.section-input-but {
  background-color: #feb505;
  border: 0;
  border-radius: 5px;
}
.section-two {
  width: 100%;
}
.section-two-rule {
  width: 95%;
  margin: 0 auto;
}
i {
  font-style: normal;
  color: #39c894;
}
.one {
  position: relative;
  width: 95%;
}
.one .one-one {
  width: 10rem;
  position: absolute;
  left: 30%;
  top: 1.2rem;
  font-size: 1.2rem;
  background-color: #fff;
  text-align: center;
}
.title {
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  padding: 1rem 0;
}
.two-flex {
  display: flex;
  justify-content: space-around;
}
.two-flex-box {
  height: 9rem;
  width: 6rem;
  border: 1px solid #2bb281;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  justify-content: space-around;
}
.two-flex .two-flex-icon {
  border: 1px solid #39c894;
  border-radius: 5rem;
  height: 5rem;
  width: 5rem;
  font-size: 3rem;
  color: #39c894;
  line-height: 5rem;
}
.three-connect {
  display: flex;
  flex-wrap: wrap;
}
.three-connect-div {
  width: 48%;
  display: flex;
  flex-direction: column;
  height: 15vh;
  justify-items: center;
  align-items: center;
  text-align: center;
}
footer {
  text-align: center;
  margin-top: 2rem;
}
.footer-nav {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}
.footer-footer {
  color: #999;
  margin: 1rem 0;;
}
.comparison{
    background-color: #eee;
    width: 100%;
    height: 100vh;
}
.comparison-best{
    display: flex;
    justify-content: space-between;
    height: 80%;
}
.comparison-best-inside{
    width: 48%;
    height: 100%;
}
.comparison-best-center{
    height: 100%;
    width: 2%;
    background-color: #2bb281;
}
</style>