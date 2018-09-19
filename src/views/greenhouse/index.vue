<template>
  <div>
    <van-nav-bar title="大棚管理">
      <div slot="left">返回</div>
    </van-nav-bar>
    <ul class="list">
      <li>
        <span>315</span>
        <p>昨日PC访客</p>
      </li>
      <li>
        <span>302</span>
        <p>昨日APP访客</p>
      </li>
      <li>
        <span>54</span>
        <p>昨日关注用户</p>
      </li>
      <li>
        <span>239</span>
        <p>所有关注用户</p>
      </li>
      <li>
        <span>245</span>
        <p>PC总访客</p>
      </li>
      <li>
        <span>302</span>
        <p>APP总访客</p>
      </li>
      <li>
        <span>2</span>
        <p>昨日领取优惠劵</p>
      </li>
      <li>
        <span>1</span>
        <p>昨日使用优惠劵</p>
      </li>
      <li>
        <span>5</span>
        <p>剩余优惠劵</p>
      </li>
    </ul>
    <section class="notice">
      <div class="cc content">
        <a href="./notice.html">
          <span></span>
          <p>《和多肉一起玩二木》终于出版啦起玩二木》终于出版啦</p>
          <span></span>
        </a>
      </div>
    </section>
    <div class="pic"></div>
    <div class="more">
      <ul>
        <li>
          <a href="#">
            <img src="@/assets/images/icon_manage_act.png" alt="">
            <p>活动管理</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/images/icon_manage_messange.png" alt="">
            <p>推送消息</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/images/icon_manage_file.png" alt="">
            <p>资料维护</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/images/icon_manage_conpon.png" alt="">
            <p>优惠券</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/images/icon_manage_game.png" alt="">
            <p>大转盘</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/images/icon_manage_shop.png" alt="">
            <p>积分商城</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/images/icon_manage_notice.png" alt="">
            <p>公告管理</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/images/icon_manage_home.png" alt="">
            <p>大棚首页</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/images/icon_manage_chat.png" alt="">
            <p>聊天室</p>
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>
<script>
import "@/assets/style/common.less";
export default {};
</script>

<style lang="less" scoped>
@linecolor :#e5e5e5; //默认边框颜色
.list {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 33.33%;
    text-align: center;
    border-bottom: 1px solid @linecolor;
    &:nth-child(7) {
      border-bottom: none;
    }
    &:nth-child(8) {
      border-bottom: none;
    }
    &:nth-child(9) {
      border-bottom: none;
    }
    &:nth-child(3n) {
      p,
      span {
        border-right: none;
      }
    }
    span {
      display: block;
      margin-top: 14px;
      padding-bottom: 6px;
      border-right: 1px solid @linecolor;
    }
    p {
      margin-bottom: 14px;
      font-size: 14px;
      color: #888;
      border-right: 1px solid @linecolor;
    }
  }
}

.notice {
  width: 100%;
  height: 44px;
  background-color: #fff;
  margin-top: 10px;
  .content {
    display: flex;
    align-items: center;
    height: 100%;
    span {
      flex: 1;
    }
    p {
      flex: 8;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

.pic {
  width: 100%;
  height: 85px;
  background-color: #ff6260;
}

.more {
  background-color: #fff;
  margin-top: 10px;
  padding-bottom: 10px;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 25%;
      text-align: center;
      margin-top: 18px;
      img {
        width: 38px;
        margin-bottom: 8px;
      }
      p {
        font-size: 13px;
        color: #000000;
        text-align: center;
        line-height: 15px;
      }
    }
  }
}
</style>

