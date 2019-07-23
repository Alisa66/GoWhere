<template>

    <div>
      <div   v-for="(item,index) of list"
             :key="index"
             class="list-tickets border-bottom"
      >
        <div class="list-tickets-icon"></div>
        {{item.title}}
        <div v-if="item.children" class="list-tickets-children ">
          <list :list="item.children"></list>
        </div>
      </div>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "list",
        props:{
          list:Array
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.list-tickets
  padding: .4rem 0.6rem
.list-tickets-icon
  display: inline-block;
  position: absolute;
  left .15rem
  width: .36rem;
  height: .36rem;
  background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
  background-size: .4rem 3rem;
</style>
