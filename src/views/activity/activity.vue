<template>
  <div>
    <van-nav-bar title="活动管理">
      <div slot="right" class="right">添加活动</div>
    </van-nav-bar>
    <ul class="list">
      <li>
        <img src="../../assets/images/icon_manage_act.png" alt="">
        <div class="content">
          <p class="ell title">天津多肉大棚DIY组盆活动天津多肉大棚DIY组盆活动天津多肉大棚DIY组盆活动</p>
          <p class="time">
            <span>活动时间：</span>
            <span>11-12 ~11-14（10点~16点）</span>
          </p>
          <div class="edit">
            <p>
              <span>编辑时间：</span>
              <span>2017-12-11 8:30</span>
            </p>
            <span>
              编辑
            </span>
          </div>
        </div>
      </li>
      <li>
        <img src="../../assets/images/icon_manage_act.png" alt="">
        <div class="content">
          <p class="ell title">天津多肉大棚DIY组盆活动天津多肉大棚DIY组盆活动天津多肉大棚DIY组盆活动</p>
          <p class="time">
            <span>活动时间：</span>
            <span>11-12 ~11-14（10点~16点）</span>
          </p>
          <div class="edit">
            <p>
              <span>编辑时间：</span>
              <span>2017-12-11 8:30</span>
            </p>
            <span>
              编辑
            </span>
          </div>
        </div>
      </li>
      <li>
        <img src="../../assets/images/icon_manage_act.png" alt="">
        <div class="content">
          <p class="ell title">天津多肉大棚DIY组盆活动天津多肉大棚DIY组盆活动天津多肉大棚DIY组盆活动</p>
          <p class="time">
            <span>活动时间：</span>
            <span>11-12 ~11-14（10点~16点）</span>
          </p>
          <div class="edit">
            <p>
              <span>编辑时间：</span>
              <span>2017-12-11 8:30</span>
            </p>
            <span>
              编辑
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import "@/assets/style/common.less";
export default {
  methods: {
    more() {}
  }
};
</script>

<style lang="less" scoped>
// .right {
//   color: #2dcd64;
// }
.list {
  width: 100%;
  li {
    background-color: #fff;
    margin-top: 10px;
    padding: 12px 15px;
    display: flex;
    img {
      display: block;
      width: 60px;
      height: 60px;
    }
    .content {
      margin-left: 10px;
      .title {
        font-size: 16px;
        color: #000;
        font-weight: 600;
        margin-bottom: 3px;
      }
      .time {
        font-size: 14px;
        color: #888;
      }
      .edit {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #888;
        margin: 3px 0;
        > span {
          color: #2dcd64;
        }
      }
    }
  }
}
</style>


