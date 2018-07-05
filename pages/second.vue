<template>
  <div class="second">
    <div class="item" v-for="(item,index) in getCity" :key="index">
      <p class="subone"><span>{{item.title}}</span></p>
      <div class="city" @click="setCity(i.name)" v-for="(i,ins) in item.item" :key="ins">
       <span>{{i.name}}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'
    export default {
      mounted: function () {

      },
      methods: {
        setCity:function (item) {
          this.setNowCity(item)
          this.$router.push('/')
        },
        ...mapMutations({
          setNowCity: 'setNowCity'
        })
      },
      computed: {
        ...mapGetters([
          'getCity',
          'getNowCity'
        ])
      }
    }
</script>

<style>
  .second {
    height:100vh;
  }
  .subone {
    width:100%;
    height:30px;
    line-height: 30px;
    text-align: left;
    font-size: 16px;
    color: black;
    background: #F1F2F1;
  }
  .subone span,.city span{
    display: inline-block;
    padding-left: 10px;
  }
  .city {
    border-bottom: 1px solid #F1F2F1;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
  }
</style>
