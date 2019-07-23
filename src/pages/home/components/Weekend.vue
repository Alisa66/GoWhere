<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li v-for="item of week" :key="item.id">
        <div class="item border-bottom">

          <div class="item-weekend">
            <img  class="item-img" :src="item.imgUrl" />
          </div>
          <div class="item-info">
            <div class="item-title">{{item.title}}</div>
            <div class="item-desc">{{item.desc}}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "weekend",
    props:{
      week:Array
    },
    data(){
      return{

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .title
    background-color: #eee
    color: #333
    line-height 0.8rem
    padding-left .2rem
  .item-weekend
    overflow: hidden
    height:0
    padding-bottom 37.09%
  .item-img
      width 100%
  .item-info
    padding:.2rem
    min-width 0
  .item-title
    line-height .54rem
    font-size .32rem
  .item-desc
    line-height .4rem
    color: #ccc



</style>
