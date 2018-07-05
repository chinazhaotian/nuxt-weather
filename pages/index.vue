<template>
  <div class="body">
  <section class="container">
    <Header></Header>
    <div class="searchCity">
      <nuxt-link to="/second">
        <span class="icon-search">查询其他城市</span>
      </nuxt-link>
    </div>
    <div class="cityname">
      {{getNowCity?getNowCity:'请选择城市'}}
    </div>
    <Middle :weatherInfo="info" :pm25="pm25"></Middle>
    <Week :weekInfo="info"></Week>
    <Sport :sport="sport"></Sport>
  </section>
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import Middle from '~/components/middle.vue'
import Week from '~/components/week.vue'
import Sport from '~/components/sport.vue'
import Citys from '~/assets/city.js'
import axios from 'axios'
import Weather from '~/assets/weather.json'
const HOT_NAME = '热门'
import { mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      citys: null,
      info: null,
      pm25: null,
      sport: null
    }
  },
  components: {
    Header,
    Middle,
    Week,
    Sport
  },
  created: function () {
    var self = this
    this.$nextTick(function () {
      self._getCity()
      if(this.getNowCity) {
        self.getweather()
      }
    })
  },
  computed: {
    ...mapGetters([
      'getNowCity'
    ])
  },
  methods: {
    getweather: function () {
      var self = this
      var location = encodeURIComponent(this.getNowCity)
      var url = `http://api.map.baidu.com/telematics/v3/weather?output=json&ak=uetU0z8dr9voL8pGFKmoYol6ib0ctFyB&location=${location}`
      axios.get('/api',{
          params: {
            output: 'json',
            ak: 'uetU0z8dr9voL8pGFKmoYol6ib0ctFyB',
            location: this.getNowCity
          }
        })
        .then(function (res) {
          console.log(res.data.results[0].weather_data)
          self.info = res.data.results[0].weather_data || ''
          self.pm25 = res.data.results[0].pm25 || ''
          self.sport = res.data.results[0].index || ''
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    _getCity: function () {
      let map = Citys.city
      let city = {}
      map.forEach((val,key) => {
        var k = val.pinyin.substr(0,1)
        if (!city[k]) {
          city[k] = {
            title: k,
            item: []
          }
        }
        city[k].item.push({
          name: val.name,
          pinyin: val.pinyin
        })
      })
      let ret = []
      for (let key in city) {
        let val = city[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      this.setCity(ret)
    },
    ...mapMutations({
      setCity: 'setCity'
    })
  }
}
</script>

<style>
  .body {
    width: 100%;
    height: 100%;
    background: #40a7e7;
  }
  .container {
    min-height: 100vh;
    text-align: center;
    overflow: hidden;
    margin: 0 auto;
    max-width: 800px;
    min-width: 330px;
  }
  .searchCity {
    width: 90%;
    margin:0 auto;
    height:20px;
    line-height: 20px;
    border-bottom: 1px solid #fff;
    font-size: 13px;
    text-align: left;
    box-sizing: content-box;
    padding-bottom: 5px;
  }
  .searchCity a {
    display: inline-block;
    width: 100%;
    text-decoration: none;
  }
  .icon-search {
    width: 50%;
    height: 20px;
    display: inline-block;
    padding-left: 20px;
    box-sizing: border-box;
    color: #fff;
    background: url("https://image.kmeila.com/c54a09f3c55e3ddf0d5de06cab19b32e_16x16.png") no-repeat left center;
    background-size: 16px 16px;
  }
  .cityname {
    color: #fff;
    margin-top:20px;
  }
</style>
