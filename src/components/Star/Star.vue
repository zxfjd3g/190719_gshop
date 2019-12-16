<template>
  <div class="star" :class="'star-' + size">
    <span class="star-item" v-for="(sc, index) in starClasses" :key="index" :class="sc"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      score: Number, // 评分
      size: Number, // 尺寸
    },

    computed: {
      /* 
      5个星星类名的数组
      3.5 = 3 + 1 + 1
      */
      starClasses () {
        const {score} = this
        const arr = []

        // 向arr中添加n个'on'
        const scoreInteger = Math.floor(score)
        for (let index = 0; index < scoreInteger; index++) {
          arr.push('on')
        }
        // 向arr中添加0/1个'half'
        if (score*10 - scoreInteger*10 >= 5) {
          arr.push('half')
        }

        // 向arr中添加m个'off'
        while (arr.length<5) {
          arr.push('off')
        }
       
        return arr
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'

  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
  
</style>
