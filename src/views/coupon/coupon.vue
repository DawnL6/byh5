<template>
  <div>
    <van-nav-bar title="优惠券管理">
      <div slot="right">添加</div>
    </van-nav-bar>
    <div class="notice">
      <div class="cc">
        <p>
          添加优惠劵，是线下很好的导流工具
        </p>
        <p @click="more">
          更多说明
        </p>
      </div>
    </div>
    <ul class="list">
      <li>
        <section class="top">
          <div>
            <h5>新年活动促销</h5>
            <span>进行中</span>
          </div>
          <div>
            <span>5元</span>
            <span>满50元可用</span>
          </div>
          <div>
            <p>17-11-25 12点 至 17-12-25 12点</p>
            <a href="#">修改</a>
          </div>
        </section>
        <section class="bot">
          <div>
            <p>共计</p>
            <span>200</span>
          </div>
          <div>
            <p>领取</p>
            <span>140</span>
          </div>
          <div>
            <p>使用</p>
            <span>40</span>
          </div>
        </section>
      </li>
      <li>
        <section class="top">
          <div>
            <h5>新年活动促销</h5>
            <span class="close">已关闭</span>
          </div>
          <div>
            <span>5元</span>
            <span>满50元可用</span>
          </div>
          <div>
            <p>17-11-25 12点 至 17-12-25 12点</p>
            <a href="#">修改</a>
          </div>
        </section>
        <section class="bot">
          <div>
            <p>共计</p>
            <span>200</span>
          </div>
          <div>
            <p>领取</p>
            <span>140</span>
          </div>
          <div>
            <p>使用</p>
            <span>40</span>
          </div>
        </section>
      </li>
      <li>
        <section class="top">
          <div>
            <h5>新年活动促销</h5>
            <span class="period">已过期</span>
          </div>
          <div>
            <span>5元</span>
            <span>满50元可用</span>
          </div>
          <div>
            <p>17-11-25 12点 至 17-12-25 12点</p>
            <a href="#">修改</a>
          </div>
        </section>
        <section class="bot">
          <div>
            <p>共计</p>
            <span>200</span>
          </div>
          <div>
            <p>领取</p>
            <span>140</span>
          </div>
          <div>
            <p>使用</p>
            <span>40</span>
          </div>
        </section>
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
.notice {
  height: 34px;
  color: #f76a24;
  width: 100%;
  background: #fffceb;
  .cc {
    display: flex;
    justify-content: space-between;
    p {
      line-height: 34px;
      font-size: 14px;
    }
  }
}
.list {
  width: 100%;
  li {
    margin-top: 10px;
    background-color: #fff;
    .top {
      padding: 0 15px;
      border-bottom: 1px solid #e5e5e5;
      div {
        display: flex;
        justify-content: space-between;
        &:first-child {
          padding-top: 12px;
          margin-bottom: 7px;
          h5 {
            font-size: 16px;
            color: #000000;
          }
          span {
            font-size: 13px;
            color: #ff6260;
            &.close {
              color: #666;
            }
            &.period {
              color: #ccc;
            }
          }
        }
        &:nth-child(2) {
          justify-content: flex-start;
          margin-bottom: 7px;
          color: #888;
          span {
            &:first-child {
              font-size: 15px;
              color: #ff6260;
              margin-right: 4px;
            }
            &:last-child {
              font-size: 13px;
            }
          }
        }
        &:last-child {
          color: #888;
          padding-bottom: 13px;
          p {
            font-size: 13px;
            color: #888888;
          }
          a {
            font-size: 13px;
            color: #2dcd64;
          }
        }
      }
    }
    .bot {
      display: flex;
      background-color: #fff;
      padding: 10px 0;
      div {
        flex: 1;
        text-align: center;
        font-size: 13px;
        p {
          margin-bottom: 5px;
          color: #888888;
        }
      }
    }
  }
}
</style>


