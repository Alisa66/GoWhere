<template>
    <div>
        <detail-banner
          :sightName="sightName"
          :bannerImg="bannerImg"
          :gallaryImgs="gallaryImgs"
        >
        </detail-banner>
        <detail-top></detail-top>
      <div class="content">
        <div class="base-info border-bottom">
          <div class="attraction-rate">
                 <span class="attraction-rate-score">4.9</span>
                 <span class="attraction-rate-text">分</span>
                 <span class="attraction-rate-goods">很棒  </span>
                 <span class="iconfont attraction-arrow">&#xe604;</span>
               <div class="attraction-rate-commend">3557条评论 </div>
          </div>

          <div class="attraction-info border-rightleft">
            <span class="attraction-info-intro"> 景点简介</span>
            <span class="iconfont attraction-arrow">&#xe604;</span>
            <div class="attraction-rate-commend">开放时间、贴士</div>
          </div>
        </div>

        <router-link tag="div" to="/map"
                     class="base-info-map border-bottom"
        >
         <span class="iconfont map-icon">&#xe78e;</span>
          四川省成都市温江区天香路88号
          <span class="iconfont map-arrow">&#xe604;</span>
        </router-link>

          <detail-list :list="categoryList"></detail-list>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import DetailBanner from  './components/Banner'
  import DetailTop from  './components/HeadTop'
  import DetailList from  './components/List'
  import DetailMap from  './components/map'
  import axios from 'axios'
    export default {
      name: "detail",
      data(){
        return{
          sightName:'',
          bannerImg:'',
          gallaryImgs:[],
          categoryList:[],
        }
      },
      components:{
          DetailBanner,
          DetailTop,
          DetailList,
          DetailMap
      },
      methods:{
        handleDetaile(){
          axios.get('/api/detail.json',{
            params:{
              id:this.$route.params.id
            }
          }).then( (res)=>{
             res = res.data;
             if(res.ret && res.data){
               this.sightName = res.data.sightName;
               this.bannerImg = res.data.bannerImg;
               this.gallaryImgs = res.data.gallaryImgs;
               this.categoryList = res.data.categoryList;
             }
          })
        }
      },
      mounted(){
        this.handleDetaile()
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content
    height:20rem
    .base-info
      display flex
      .attraction-rate
        flex 1
        color: #ff8300
        margin-top .19rem
        .attraction-rate-score
          font-size: .44rem;
          line-height: .44rem;
          padding .2rem
          padding-right .02rem
        .attraction-rate-goods
          font-size 0.28rem
          margin-left .2rem
        .attraction-arrow
          padding-top: 0.2rem
          color: #9e9e9e
          font-size: 0.42rem
          float: right
        .attraction-rate-commend
          padding .2rem
          padding-top .3rem
          color: #9e9e9e
      .attraction-info
        flex 1
        height 1rem
        margin-top .3rem
        .attraction-info-intro
          font-size .3rem
          padding .2rem
        .attraction-arrow
          color: #9e9e9e
          font-size: 0.42rem
          float: right
          padding-right: .3rem
          padding-top: .05rem
        .attraction-rate-commend
          padding .2rem
          padding-top .3rem
          color: #9e9e9e

    .base-info-map
      padding .2rem
      color #212121
      .map-icon
        font-size .4rem
        color #9e9e9e
        padding-right .1rem
      .map-arrow
        float right
        padding-right .2rem
        font-size .42rem
        color #9e9e9e
    .map
       width  100%
       height 300px

</style>
