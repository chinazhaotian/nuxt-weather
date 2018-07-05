<template>
  <div class="header">
    {{title}}
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      data(){
        return {
          title: '磨磨唧唧天气'
        }
      }
    }
</script>

<style>
  .header {
    width:100%;
    height: 20px;
    text-align: center;
    line-height: 20px;
    color: #fff;
    font-size: 16px;
    margin:10px 0;
  }
</style>
