<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="detail-head-back"
      v-show="showDetailTitle"
    >
      <div class="iconfont detailhead-arrow-back">&#xe605;</div>
    </router-link>

    <div class="detail-fixed-title"
         v-show="!showDetailTitle"
         :style="styleOpacity"
    >
        <router-link to="/">
          <div  class="iconfont fixed-arrow-back"> &#xe605; </div>
        </router-link>
            景点详情
    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "header",
    data() {
      return {
        showDetailTitle:true,
        styleOpacity:{
          opacity:0
        }
      }
    },
    methods: {
      handlescroll() {
        const top = document.documentElement.scrollTop;

        if (top > 50) {
          let opacity = top /140;
          opacity = opacity > 1 ? 1: opacity;
          this.styleOpacity = {opacity};
         this.showDetailTitle = false;
        }else{
          this.showDetailTitle = true
        }
      }
    },
    activated() {
      window.addEventListener('scroll', this.handlescroll)
    },
    deactivated(){
      window.removeEventListener('scroll',this.handlescroll)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~styles/varibles.styl"
  .detail-head-back
    position absolute
    left 0.2rem
    top .2rem
    color: #ffffff
    width .6rem
    height .6rem
    text-align center
    border-radius .2rem
    background-color: rgba(0, 0, 0, 0.8)
    .detailhead-arrow-back
      position absolute
      padding .1rem
  .detail-fixed-title
    z-index 22
    position fixed
    top 0
    left 0
    right 0
    color: #ffffff
    background: $bgColor
    height:.86rem
    line-height .86rem
    text-align center
    font-size .32rem
    .fixed-arrow-back
      position absolute
      top:0
      left:0
      width:.64rem
      color: #ffffff



</style>
