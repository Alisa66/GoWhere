<template>
  <ul class="item">
    <li class="list"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="clickAlphabet"
    >
      {{item}}
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "alphabet",
    data() {
      return {
        move: false,
        startY: 0,
        timer: null
      }
    },
    props: {
      citys: Object
    },
    computed: {
      letters() {
        const letters = [];
        for (let i in this.citys) {
          letters.push(i)
        }
        return letters
      }

    },
    updated() {
      this.startY = this.$refs['A'][0].offsetTop;
    },
    methods: {
      clickAlphabet(e) {
        this.$emit('Alphabetclick', e.target.innerText)
      },
      handleTouchStart() {
        this.move = true
      },
      handleTouchMove(e) {
        if (this.move) {
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            /*  const startY = this.$refs['A'][0].offsetTop;*/
            const touchY = e.touches[0].clientY - 79;
            const index = Math.floor((touchY - this.startY) / 20);
            if (index >= 0 && index < this.letters.length) {
              this.$emit('Alphabetclick', this.letters[index])
            }
          }, 16)

        }
      },
      handleTouchEnd() {
        this.move = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .item
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem

  .list
    line-height .4rem
    text-align center
    color #00bcd4

</style>
