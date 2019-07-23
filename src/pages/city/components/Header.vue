<template>
  <div>
    <div class="header">
      城市列表
      <router-link to="/">
          <div class="iconfont arrow-back">&#xe605;</div>
      </router-link>

    </div>

  </div>

</template>

<script type="text/ecmascript-6">
    export default {
        name: "header"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~styles/varibles.styl"

  .header
    position relative
    color: #ffffff
    background: $bgColor
    height:.86rem
    line-height .86rem
    text-align center
    font-size .32rem
    .arrow-back
      position absolute
      top:0
      left:0
      width:.64rem
      color: #ffffff
      cursor pointer
</style>
