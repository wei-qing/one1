<template>
  <div class="home">
    <div class="top-title">
      <div><img style='width:70%' src="../../public/切图/logo.png" alt=""></div>
      <div>装修预算</div>
      <div>
    <i class="iconfont icon-nav"> 导航 </i>
      </div>
    </div>
    <div class="center-img">
      <img style="height:150px" src="../../public/切图/house_info.jpg" alt="">
    </div>
    <div class="center-list">
      房先森 / 装修攻略 / 装修预算 / 正文
    </div>
    <div class="center-content">
      <div style="font-size:20px">装修预算注意事项</div>
      <div class="date">2016-07-09  <i class="iconfont icon-view">115  </i></div>
    </div>
    <div class="content-list">
      <div>客厅装修隔断</div>
      <div>客厅装修图</div>
      <div>客厅装修效果</div>
      <div>客厅装修隔断</div>
      <div>客厅装修图</div>
      <div>客厅装修效果</div>

    </div>
    <div class="text">
         导语：在装修的时候如果没有提前做好装修预算，很容易造成最后开支过大，添置很多没必要的增项。
      那么在做预算的时候又有什么需要注意的地方呢？
    </div>
    <div class="img2">
      <img  style="width:80%" src="../../public/切图/banner1.jpg" alt="">
    </div>
    <div class="button">
      <div class="button-item">点击展开全文</div>
      <div class="button-items">
        <div>
          <i style="color:#1b9af7;border:px slolid #1b9af7" class="iconfont icon-pencle"> 导航 </i>
        </div>
        <div>
          <i class="iconfont icon-pencle"> 导航 </i>
        </div>
      </div>
      <div class="button-item">进入装修预算</div>
      <div class="bottom">
        <div class="bottom-title">猜你喜欢</div>
        <div class="bottom-list">
          <div class="list-left"><img style="width:100%" src="../../public/切图/3.png" alt=""></div>
          <div class="list-right">
            <div style="color:grey">遇到这样的人就嫁了吧</div>
           <div class="date">2016-07-09  <i class="iconfont icon-view">115  </i></div>
          </div>
        </div>
         <div class="bottom-list">
          <div class="list-left"><img style="width:100%" src="../../public/切图/3.png" alt=""></div>
          <div class="list-right">
            <div style="color:grey">遇到这样的人就嫁了吧</div>
           <div class="date">2016-07-09  <i class="iconfont icon-view">115  </i></div>
          </div>
        </div>
         <div class="bottom-list">
          <div class="list-left"><img style="width:100%" src="../../public/切图/3.png" alt=""></div>
          <div class="list-right">
            <div style="color:grey">遇到这样的人就嫁了吧</div>
           <div class="date">2016-07-09  <i class="iconfont icon-view">115  </i></div>
          </div>
        </div>
         <div class="bottom-list">
          <div class="list-left"><img style="width:100%" src="../../public/切图/3.png" alt=""></div>
          <div class="list-right">
            <div style="color:grey">遇到这样的人就嫁了吧</div>
           <div class="date">2016-07-09  <i class="iconfont icon-view">115  </i></div>
          </div>
        </div>
         <div class="bottom-list">
          <div class="list-left"><img style="width:100%" src="../../public/切图/3.png" alt=""></div>
          <div class="list-right">
            <div style="color:grey">遇到这样的人就嫁了吧</div>
           <div class="date">2016-07-09  <i class="iconfont icon-view">115  </i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
   
  }
}
</script>


<style>
@import "../gongju/iconfont.css";

.home{
  width: 100%;
  height: 700px;
}
.top-title{
  width: 100%;
  height: 64px;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
.center-img{
  width: 100%;
  height: 150px;
}
.center-list{
  width: 100%;
  height: 40px;
  padding-left: 10px;
  line-height: 40px;
  background: #eaeaea;
}
.center-content{
  width: 100%;
  height: 150px;
  /* background: skyblue; */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.center-content div{
  width: 100%;
  margin-left: 120px;
  color: grey;
}
.date{
  margin-top: -60px;
  color: grey;
}
.content-list{
  width: 100%;
  height: 80px;
  border-top: 1px solid grey;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.content-list div{
  margin-left: 8px;
  border:  1px solid grey;
  border-radius: 10px;
  font-size: 16px;
}
.text{
  width: 100%;
  color: grey;
}
.img2{
  width: 100%;
  height: 200px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.button{
  width: 100%;
  height: 230px;
  /* background: lavender; */
}
.button-item{
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #39c894;
  color: #39c894;
}
.button-items{
  width: 100%;
  height: 100px;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
.bottom{
  width: 100%;
  height: 300px;
  /* background: skyblue; */
  
}
.bottom-title{
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
  border-left: 2px solid green;
  }
  .bottom-list{
    width: 100%;
    height: 100px;
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
  }
  .lits-left{
    width: 20%;

  }
  .list-right{
    width: 80%;
  }
</style>
