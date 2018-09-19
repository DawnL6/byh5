<template>
  <div>
    <van-nav-bar title="添加优惠券">
    </van-nav-bar>
    <div class="notice">
      <div class="cc">
        请合理输入信息，如果被用户投诉无法兑现优惠劵上的信息，我们将停止你使用该功能，并降低权重。
      </div>
    </div>
    <div class="content">
      <div class="item">
        <span>活动名称</span>
        <input type="text" placeholder="活动名称可输入4~8个字">
      </div>
      <div class="item">
        <span>抵用金额</span>
        <input type="text" placeholder="优惠劵金额">
        <span>元</span>
      </div>
      <div class="item">
        <span>使用条件</span>
        <input type="text" placeholder="如：满100元减10元，不能超过10个字">
      </div>
      <div class="item">
        <span>开始时间</span>
        <input type="text" placeholder="请选择开始时间" readonly @click="openPicker('star')" v-model="startTime">
      </div>
      <div class="item">
        <span>结束时间</span>
        <input type="text" placeholder="请选择结束时间" readonly @click="openPicker('end')" v-model="endTime">
      </div>
      <div class="item">
        <span>生成数量</span>
        <input type="text" placeholder="请输入生成数量，上限100">
      </div>
    </div>
    <div class="but" @click="addSubmit">提交</div>
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker v-model="currentDate" type="date" :min-date="minDate" :max-date="maxDate" @cancel="cancel" @confirm="confirm" />
    </van-popup>
  </div>
</template>
<script>
import dayjs from "dayjs";
import {Toast} from 'vant'
export default {
  data() {
    return {
      currentDate: dayjs().$d,
      minDate: dayjs().$d, //默认最小选择时间
      maxDate: dayjs().add(10, "year").$d, //默认是最小选择时间的一年
      startTime: "",
      endTime: "",
      show: false,
      type: null
    };
  },
  methods: {
    openPicker(type) {
      this.type = type;
      if (this.type === "star") {
        this.minDate = dayjs().$d; //默认最小选择时间
        this.maxDate = dayjs().add(10, "year").$d; //默认是最小选择时间的一年
      }
      if (this.type === "end" && !this.startTime) {
        Toast({ duration: "1000", message: "请先选择开始时间" });
        return;
      }
      this.show = true;
    },
    cancel() {
      this.show = false;
    },
    confirm(value) {
      if (this.type === "star") {
        this.startTime = dayjs(value).format("YYYY年MM月DD日");
        this.minDate = dayjs(value).add(7, "days").$d;
        this.maxDate = dayjs(value).add(60, "days").$d;
        this.endTime = "";
      } else if (this.type === "end") {
        this.endTime = dayjs(value).format("YYYY年MM月DD日");
      }
      this.cancel();
    },
    addSubmit() {}
  }
};
</script>

<style lang="less" scoped>
.notice {
  background-color: #fffceb;
  font-size: 13px;
  color: #f76a24;
  padding: 10px 0;
  line-height: 18px;
  text-align: justify;
}
.content {
  background-color: #fff;
  margin-top: 10px;
  .item {
    padding: 12px 15px 11px 15px;
    font-size: 15px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    &:last-child {
      border-bottom: none;
    }
    span {
      font-weight: 500;
    }
    input {
      outline: none;
      border: none;
      flex: 1;
      text-indent: 10px;
      color: #888;
    }
  }
}

.but {
  width: 92%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  margin: 40px auto;
  background: #2dcd64;
  border-radius: 34px;
  color: #fff;
  font-size: 18px;
}
</style>


