<template>
    <div>
      <div class="title">猜你喜欢</div>
      <ul>
        <router-link tag="a"
                     v-for="item of recommend"
                     :key="item.id"
                      :to="/detail/+item.id"
        >
          <div class="item border-bottom">
            <img  class="item-img" :src="item.imgUrl" />
           <div class="item-info">
             <div class="item-title">{{item.title}}</div>
             <div class="item-desc">{{item.desc}}</div>
             <button class="item-button">查看详情</button>
           </div>


          </div>
        </router-link>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "recommend",
        props:{
          recommend:Array
        },
      data(){
          return{
           /* recommendList:[
              {
                id:'001',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
                title:'成都海昌极地海洋公园',
                desc:'蠢萌企鹅陪你嗨翻这个秋'
              },
              {
                id:'002',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1809/72/725f0abc0fb61d0ca3.img.jpg_200x200_6e1fbb45.jpg',
                title:'都江堰水果侠星球',
                desc:'蠢萌企鹅陪你嗨翻这个秋'
              },
              {
                id:'005',
                id:'005',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
                title:'成都海昌极地海洋公园',
                desc:'蠢萌企鹅陪你嗨翻这个秋'
              }
            ]*/
          }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~styles/maxin.styl"
  .title
    background-color: #eee
    margin-top .2rem
    color: #333
    line-height 0.8rem
    padding-left .2rem
  .item
    overflow: hidden
    display: flex
    height:1.9rem
    .item-img
        width 1.8rem
        height:1.8rem
        padding:0.1rem
    .item-info
      flex:1
      padding:.1rem
      min-width 0
      .item-title
          line-height .54rem
          font-size .32rem
      .item-desc
          line-height .4rem
          color: #ccc
          ellipsis()
      .item-button
          line-height: .44rem
          margin-top .16rem
          background-color: #ff9300;
          padding:0 .2rem
          border-radius .06rem
          color: #fff



</style>
