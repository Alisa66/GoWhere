<template>
  <div>


  <div class="city-search">
    <input v-model="keywords" class="input-search" type="text" placeholder="请输入城市名">
  </div>
  <div class="search-content" ref="search" v-show="keywords">
    <ul>
      <li
        class="search-city border-bottom"
        v-for="item of list"
        :key="item.id"
        @click="changecity(item.name)"
      >{{item.name}}
      </li>
      <li class="search-city border-bottom" v-show="hasNodate">无法匹配到数据</li>
    </ul>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    name: "search",
    props:{
      cities:Object
    },
    data() {
      return {
        keywords: '',
        list: [],
        timer: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.search);
    },
    computed:{
      hasNodate(){
        return !this.list.length
      }
    },
    watch: {
      keywords() {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          if (this.keywords !== '') {
            const result = [];
            for (let i in this.cities) {
              this.cities[i].forEach((value) => {
                if (value.spell.indexOf(this.keywords) > -1 || value.name.indexOf(this.keywords) > -1) {
                  result.push(value)
                }
              })
            }
            this.list = result
          }
        }, 100);

      }
    },
    methods: {
      changecity(city){
        this.$store.commit('changecityclick',city);
          this.$router.push('/')
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~styles/varibles.styl"
  .city-search
    background: $bgColor
    height .72rem
    padding: 0 .1rem
    .input-search
      box-sizing border-box
      width: 100%
      padding 0 .1rem
      border-radius .06rem
      color: #666
      height: .62rem
      line-height .62rem
      text-align: center

  .search-content
    z-index 1
    width 100%
    background: #eee
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    bottom 0
    .search-city
      line-height 0.68rem
      padding-left .2rem
      background: #ffffff

</style>
