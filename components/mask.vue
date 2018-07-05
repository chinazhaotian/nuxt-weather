<template>
  <div class="mask" :class="[zindexs?'':'zIndex']">
    <div class="mask-text"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapMutations, mapGetters } from 'vuex'
    export default {
      props: {
        show: '',
      },
      data() {
        return {
          zindexs: false
        }
      },
      computed: {
        ...mapGetters([
          'getMask'
        ])
      },
      created: function(){
        var self = this
        if (this.getMask) {
          self.zindexs = true
        }
        this.$nextTick(function () {
          setTimeout(function () {
            self.setZindex()
          },4500)
        })
      },
      methods: {
        ...mapMutations({
          setMask: 'setMask'
        }),
        setZindex: function () {
          this.zindexs = false
          this.setMask('false')
        }
      }
    }
</script>

<style scoped>
  @keyframes myfirst
  {
    from {opacity: 1}
    to {opacity: 0}
  }
  .mask {
    width: 100%;
    height:100vh;
    background: url("https://image.kmeila.com/c2032d9a06aa8bb8ab1e1f0c6c7557ea_1485x1027.jpg") no-repeat center center;
    background-size: cover;
    z-index: 99999;
    position: fixed;
    left: 0;
    bottom: 0;
    right:0;
    top:0;
    animation: myfirst 5s;
  }
  .zIndex {
    z-index: -1 !important;
  }
  .mask-text {
    width: 50px;
    height:200px;
    background: url("https://image.kmeila.com/eb44c660a62535201437a8396ff8133d_228x603.png") no-repeat center center;
    background-size: cover;
    z-index: 999999;
    position: fixed;
    left: 20px;
    top: 10px;
  }
</style>
