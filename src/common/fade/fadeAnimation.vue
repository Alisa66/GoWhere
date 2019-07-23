<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "fade-animation"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.v-enter,.v-leave
  opacity:0
 .v-enter-active,.v-leave-active
  transition opacity 0.8s
</style>
