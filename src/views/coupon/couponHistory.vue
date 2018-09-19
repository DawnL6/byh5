<template>
  <div>
    <van-nav-bar title="优惠劵使用记录">
      <div slot="right">添加</div>
    </van-nav-bar>
    <div class="tab">
      <ul>
        <li>
          <span class="sure">未领取(98)</span>
        </li>
        <li>
          <span>已领取(2)</span>
        </li>
        <li>
          <span>已使用(0)</span>
        </li>
      </ul>
    </div>
    <ul class="list">
      <li>
        <section class="top">
          <div>
            <h5>0000007001DWD2R</h5>
            <span class="period">07-12-10</span>
          </div>
          <div>
            <p>
              <span>5元</span>
              <span>满50元可用</span>
            </p>
            <span>新年促销活动</span>
          </div>
        </section>
        <section class="bot">
          <p>
            <span>二木花园</span>
            <span>07-12-23 13:43</span>
          </p>
          <span class="sure">未领取（过期）</span>
        </section>
      </li>
      <li>
        <section class="top">
          <div>
            <h5>0000007001DWD2R</h5>
            <span class="period">07-12-10</span>
          </div>
          <div>
            <p>
              <span>5元</span>
              <span>满50元可用</span>
            </p>
            <span>新年促销活动</span>
          </div>
        </section>
        <section class="bot">
          <p>
            <span>二木花园</span>
            <span>07-12-23 13:43</span>
          </p>
          <span class="no">未领取（过期）</span>
        </section>
      </li>
      <li>
        <section class="top">
          <div>
            <h5>0000007001DWD2R</h5>
            <span class="period">07-12-10</span>
          </div>
          <div>
            <p>
              <span>5元</span>
              <span>满50元可用</span>
            </p>
            <span>新年促销活动</span>
          </div>
        </section>
        <section class="bot">
          <p>
            <span>二木花园</span>
            <span>07-12-23 13:43</span>
          </p>
          <span class="nol">未领取（过期）</span>
        </section>
      </li>
      <li>
        <section class="top">
          <div>
            <h5>0000007001DWD2R</h5>
            <span class="period">07-12-10</span>
          </div>
          <div>
            <p>
              <span>5元</span>
              <span>满50元可用</span>
            </p>
            <span>新年促销活动</span>
          </div>
        </section>
        <section class="bot">
          <p>
            <span>二木花园</span>
            <span>07-12-23 13:43</span>
          </p>
          <span>未领取（过期）</span>
        </section>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.tab {
  width: 100%;
  background-color: #fff;
  ul {
    display: flex;
    li {
      flex: 1;
      span {
        height: 44px;
        line-height: 44px;
        text-align: center;
        display: block;
        margin: 0 auto;
        width: 88%;
        &.sure {
          border-bottom: 2px solid #2dcd64;
        }
      }
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
          font-size: 16px;
          color: #000000;
          span {
            font-size: 13px;
            color: #888;
          }
        }
        &:nth-child(2) {
          margin-top: 10px;
          margin-bottom: 12px;
          p {
            font-size: 13px;
            color: #888;
            span {
              &:first-child {
                font-size: 15px;
                color: #ff6260;
              }
            }
          }
          span {
            font-size: 13px;
            color: #888;
          }
        }
      }
    }
    .bot {
      display: flex;
      background-color: #fff;
      padding: 10px 15px;
      justify-content: space-between;
      p {
        margin-bottom: 5px;
        color: #888888;
        span {
          font-size: 13px;
          &:first-child {
            color: #566b96;
          }
        }
      }
      span {
        font-size: 13px;

        &.deafult {
          color: #333;
        }
        &.sure {
          color: #ff6260;
        }
        &.no {
          color: #2dcd64;
        }
        &.nol {
          color: #888;
        }
      }
    }
  }
}
</style>


