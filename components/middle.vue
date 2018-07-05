<template>
  <div class="degrees" v-if="weatherInfo">
    <div class="nums">{{weatherInfo[0].date | degrees}}°</div>
    <div class="status">{{weatherInfo[0].weather}}</div>
    <span class="level">{{pm25 | pmlever}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
        weatherInfo:'',
        pm25: ''
      },
      filters: {
        degrees: function (item) {
            let start = item.indexOf('实时：') + 3
            let end = item.indexOf(')') -1
            return item.substring(start, end)
        },
        pmlever: function (item) {
          if (item <= 35) {
            return '优 ' + item
          } else if (item > 35 && item <= 75) {
            return '良 ' + item
          } else if (item > 75 && item <= 115) {
            return '轻度污染 ' + item
          } else if (item > 115 && item <= 150) {
            return '中度污染 ' + item
          } else if (item > 150 && item <= 250) {
            return '重度污染 ' + item
          } else {
            return '严重污染 ' + item
          }
        }
      },
      created: function () {

      }
    }
</script>

<style>
  .degrees {
    text-align: center;
    color: #fff;
  }
  .nums {
    font-size: 100px;
    margin-top: 50px;
  }
  .status {
    font-size: 16px;
    margin-top:30px;
  }
  .level {
    display: inline-block;
    font-size: 13px;
    margin-top:20px;
    padding: 5px 10px;
    background: rgba(255,255,255,.3);
    border-radius: 10px;
  }
</style>
