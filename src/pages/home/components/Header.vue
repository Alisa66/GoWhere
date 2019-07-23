<template>
  <div class="wrapper">
    <div class="header-left">
      <div class="iconfont arrow-back">&#xe605;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe62f;</span>
      请输入景点/公园/游玩类型
    </div>
   <router-link to="/city">
         <div class="header-right">{{this.city}}
           <span class="iconfont arrow-down">&#xe615;</span>
         </div>
   </router-link>

  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "header",
   /* props:{
      city:String
    },*/
    computed:{
      //高级的写法
      ...mapState(['city'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~styles/varibles.styl"
@import "~styles/maxin.styl"
  .wrapper
    display flex
    line-height 0.86rem
    background $bgColor
    color: #fff
    .header-left
      width: 0.64rem
      float: left
      .arrow-back
        font-size .4rem
        padding-left .15rem
    .header-input
      flex: 1
      margin-top: 0.12rem
      background-color: #ffffff
      color: #ccc
      margin-left: .2rem
      height: 0.64rem
      line-height .64rem
      border-radius .1rem
      padding-left .2rem
    .header-right
      min-width: 1.04rem
      color #ffffff
      padding 0 .1rem
      float: right
      text-align: center
      .arrow-down
          font-size: 0.1rem;
          margin-left: -0.04rem;
</style>
