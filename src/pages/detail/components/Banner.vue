<template>
  <div>
    <div class="banner" @click="handleBannerclick">
      <img class="banner-img" :src="bannerImg"/>
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe889;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>

    <fade-animation>
        <gallary  :imgList="gallaryImgs"
                  v-show="isShowGallary"
                  @close="closeGarllary">
        </gallary>
    </fade-animation>
  </div>
</template>

<script type="text/ecmascript-6">
  import Gallary from 'common/gallary/Gallary'
  import FadeAnimation from 'common/fade/fadeAnimation'
  export default {
    name: "banner",
    props:{
      sightName:String,
      bannerImg:String,
      gallaryImgs:Array
    },
    data() {
      return {
        isShowGallary:false,
      }
    },
    methods:{
      handleBannerclick(){
        this.isShowGallary = true
      },
      closeGarllary(){
        this.isShowGallary = false
      }
    },
    components: {
      Gallary,
      FadeAnimation
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .banner
    overflow hidden
    position relative
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      margin-top .2rem
      .banner-title
        flex 1
        font-size .36rem
      .banner-number
        background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
        padding 0.1rem .4rem
        height .4rem
        line-height .4rem
        borderr .2rem
        font-size .24rem
        border-radius .2rem
        .banner-icon
          font-size .24rem


</style>
