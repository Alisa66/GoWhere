<template>
  <!--<div class="icons">-->
  <!--<div class="icon">-->
  <!--<div class="icon-img">-->
  <!--<img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"/>-->
  <!--</div>-->
  <!--<p class="icon-desc">热门景点</p>-->
  <!--</div>-->
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>


</template>

<script type="text/ecmascript-6">
  export default {
    name: "iconfont",
    props:{
      icon:Array
    },
    data() {
      return {
        // iconList: [
        //   {
        //     id: '001',
        //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        //     desc: '热门景点'
        //   },
        //   {
        //     id: '002',
        //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/4d/a1eda1a2b8414302.png',
        //     desc: '暑期夜场'
        //   },
        //   {
        //     id: '003',
        //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        //     desc: '成都必游'
        //   },
        //   {
        //     id: '004',
        //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
        //     desc: '川剧变脸'
        //   },
        //   {
        //     id: '005',
        //     imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
        //     desc: '自然风光'
        //   },
        //   {
        //     id: '006',
        //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
        //     desc: '碧峰峡'
        //   },
        //   {
        //     id: '007',
        //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
        //     desc: '游乐场'
        //   },
        //   {
        //     id: '008',
        //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
        //     desc: '熊猫基地'
        //   },
        //   {
        //     id: '009',
        //     imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/57489034f410bdc823e7fa1b9e82dfd4.png',
        //     desc: '清凉一夏'
        //   }
        // ]
      }
    },
    computed:{
      pages(){
        const pages = []
        this.icon.forEach( (item,index)=>{
          const page = Math.floor(index/8)
          if(!pages[page]){
             pages[page] = []
          }
          pages[page].push(item)
        });
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/maxin.styl"

  icons > > >  .swiper-container
    height: 0
    padding-bottom 50%
  .icons
     margin-top .1rem
    .icon
      position relative
      overflow hidden
      width 25%
      height 0
      padding-bottom 25%
      float left
      .icon-img
        position absolute
        top: 0
        left: 0
        right: 0
        bottom: 0.44rem
        -webkit-box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          height: 100%
          margin: 0 auto
      .icon-desc
        position: absolute;
        left: 0
        right: 0
        bottom: 0
        height .44rem
        line-height: .44rem
        text-align center
        color: $bgTextColor
        ellipsis()
</style>
