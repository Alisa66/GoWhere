<template>
  <div>
    <div class="wrapper" @click="handleGallary">
      <div class="gallary">
        <swiper :options="swiperOption" v-if="imgList.length > 1">
          <swiper-slide  v-for="(item,index) of imgList" :key="index">
            <img class="gallary-img" :src="item"/>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "gallary",
    props:{
      imgList:Array
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type:'fraction',
          },
          // 这两个的顺序不能反
          observeParents:true,
          observer:true,
          loop:true,
        },
      }
    },
    methods:{
      handleGallary(){
        this.$emit('close')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrapper >>> .swiper-container
                 overflow inherit
  .wrapper >>> .swiper-pagination-fraction
                 color: #ffffff
                 bottom -2rem
  .wrapper
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position: fixed;
    top 0
    left 0
    right 0
    bottom 0
    background-color: #000
    .gallary
      height 0
      width 100%
      padding-bottom 100%
      .gallary-img
        width 100%

</style>
