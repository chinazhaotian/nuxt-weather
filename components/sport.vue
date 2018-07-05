<template>
  <div class="sport" v-if="sport">
    <div class="sport-item" v-for="(item,index) in sport" :key="index">
      <div class="item-left"></div>
      <div class="item-right">
        <p class="right-title">{{item.tipt}} {{item.zs}}</p>
        <p class="right-desc">{{item.des}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
        sport: ''
      }
    }
</script>

<style scoped>
  .sport {
    margin-top: 10px;
    width: 100%;
    background: rgba(255,255,255,.1);
    padding-bottom: 10px;
  }
  .sport-item {
    width: 95%;
    margin:0 auto;
    color: #fff;
    border-bottom: 1px solid #fff;
    display: flex;
    flex: 1;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .sport-item:last-child {
    border-bottom:none ;
  }
  .sport .sport-item:nth-child(1) .item-left {
    background: url("https://image.kmeila.com/3dd24fdd74674a2f903c1eb17c5a19d2_64x64.png") center space  no-repeat;
    background-size: 100px 100px;
  }
  .sport .sport-item:nth-child(2) .item-left {
    background: url("https://image.kmeila.com/f1dfb298a6359717fc2e58cee06b7a66_64x64.png") center space  no-repeat;
    background-size: cover;
  }
  .sport .sport-item:nth-child(3) .item-left {
    background: url("https://image.kmeila.com/a23d6af5f214b16e6b5b5dae0ded2335_64x64.png") center space  no-repeat;
    background-size: cover;
  }
  .sport .sport-item:nth-child(4) .item-left {
    background: url("https://image.kmeila.com/091b755a597b95135a286e7345b9557b_64x64.png") center space  no-repeat;
    background-size: cover;
  }
  .sport .sport-item:nth-child(5) .item-left {
    background: url("https://image.kmeila.com/1d3c45b7624acba4d5f2041fb3499fdd_64x64.png") center space  no-repeat;
    background-size: cover;
  }
  .item-left {
    height:60px;
    margin-right: 10px;
    flex: 0 0 60px;
  }
  .right-title {
    text-align: left;
    font-size: 14px;
  }
  .right-desc {
    text-align: left;
    font-size: 12px;
    margin-top: 15px;
    line-height: 15px;
  }
</style>
