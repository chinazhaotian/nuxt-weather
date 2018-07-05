<template>
  <div class="week" v-if="weekInfo">
      <div class="week-item" v-for="(item,index) in weekInfo" :key="index">
        <div class="week-time">{{item.date | nowtime}}</div>
        <div class="now-degrees">{{item.temperature}}</div>
        <div class="week-status">{{item.weather}}</div>
        <div class="week-wind">{{item.wind}}</div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
        weekInfo: ''
      },
      filters: {
        nowtime: function (item) {
          if(item.indexOf('(') > -1){
            return '今天'
          } else {
            return item
          }
        }
      }
    }
</script>

<style>
  .week {
    display: flex;
    flex: 1;
  }
  .week-item {
    width: 25%;
    text-align: center;
    font-size: 13px;
    color: #fff;
    background: rgba(255,255,255,.1);
    overflow: hidden;
    padding-bottom: 13px;
    margin-top: 30px;

  }
  .week-item div {
    margin-top: 13px;
  }
</style>
