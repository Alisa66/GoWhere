<template>
  <div class="wraper">
    <!--这里的r v-if="list.length>1"添加之后才能使looptrue生效-->
    <swiper v-if="list.length>1" :options="swiperOption" >
      <swiper-slide v-for="item of list" :key="item.id">
        <img :src="item.imgUrl" alt="" class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "HomeSwiper",
    props: {
      list:Array
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true,
          autoplay:true
        },
      }
    },


  }
</script>

<style lang="stylus" scoped>
  .wraper >>>.swiper-pagination-bullet-active
    background #ffffff !important
  .wraper
    overflow: hidden
    width 100%
    height: 0
    padding-bottom 31%
    background: #eee
    .swiper-img
      width 100%

</style>
