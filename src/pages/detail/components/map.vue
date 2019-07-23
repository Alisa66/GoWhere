<template>
  <div>
    <div class="header">
      景点地图
        <div  @click="back" class="iconfont arrow-back">&#xe605;</div>
    </div>
    <div id="map"></div>
  </div>


</template>

<script>
  import BMap from 'BMap'
  export default {
    name: 'Map',
    methods: {
      back(){
        this.$router.go(-1);
      },
      createMap () {

        var map = new BMap.Map("map");  // 创建Map实例
        var point = new BMap.Point(103.829047,30.728322);//创建点坐标
        map.centerAndZoom(point,12);  // 初始化地图,设置中心点坐标和地图级别

        var marker = new BMap.Marker(point);//创建标注
        map.addOverlay(marker);//将标注添加到地图中

   /*     //添加地图类型控件
        map.addControl(new BMap.MapTypeControl({
          mapTypes:[BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        }));
        map.removeControl(mapType1);   //移除2D图，卫星图
        */

        // 设置地图显示的城市 此项是必须设置的
        map.setCurrentCity("成都");
        //开启鼠标滚轮缩放
        map.enableScrollWheelZoom(true)

      }
    },
    mounted () {
      this.createMap()
    }
  }
</script>
<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  #map
    min-height 5rem
    .BMap_cpyCtrl
    display:none
    .anchorBL
        display:none
  .BMap_noprint anchorTR
    display none
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
