<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icon :icon="iconList"></home-icon>
    <home-recommend :recommend="recommedList"></home-recommend>
    <home-weekend :week="wekkendList"></home-weekend>
  </div>

</template>

<script>
  import HomeHeader from './components/Header.vue'
  import HomeSwiper from './components/Swiper'
  import HomeIcon from './components/Iconfont'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import axios from 'axios'
  import {mapState} from 'vuex'

  export default {
    name: "home",
    data() {
      return {
        swiperList: [],
        iconList:[],
        recommedList:[],
        wekkendList:[],
        lastCity:''
      }
    },
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcon,
      HomeRecommend,
      HomeWeekend
    },
    computed:{
      ...mapState(['city'])
    },
    activated(){
      if(this.lastCity !== this.city){
          this.lastCity = this.city;
          this.getInfo()
      }
    },
    methods: {
      getInfo() {
        axios.get('/api/index.json?city=' + this.city)
          .then(this.geInfoSuccess)
      },
      geInfoSuccess(res) {
        if(res.data.ret && res.data){
          const data = res.data.data;
          // console.log(data)
          this.swiperList =data.swiperList;
          this.iconList = data.iconList;
          this.recommedList = data.recommendList;
          this.wekkendList = data.weekendList
        }
      },

    },
    mounted() {
      this.getInfo()
    }
  }
</script>

<style>

</style>
