<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="left">
        <ul>
          <!-- current -->
          <li class="menu-item" v-for="(good, index) in goods" :key="good.name" :class="{current: index===currentIndex}">
            <span class="text bottom-border-1px">
              <img class="icon" :src="good.icon" v-if="good.icon">
              {{good.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="right">
        <ul ref="rightUl">
          <li class="food-list-hook" v-for="(good, index) in goods" :key="index">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px" v-for="(food, index) in good.foods" :key="index">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span></div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    CartControl组件
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        // 1). 右侧列表滑动的Y轴坐标: scrollY  在滑动过程中不断改变
        scrollY: 0,
        // 2). 右侧每个分类<li>的top值的数组tops: 第一次列表显示后统计后面不再变化
        tops: []
      }
    },
    computed: {
      ...mapState(['goods']),
      currentIndex () {
        const {scrollY, tops} = this
        return tops.findIndex((top, index) => scrollY>=top && scrollY<tops[index+1])
      }
    },

    methods: {
      // 初始化滑动
      initScroll () {
        new BScroll(this.$refs.left, {})
        const rightScroll = new BScroll(this.$refs.right, {
          probeType: 1, // 非实时 / 触摸
          // probeType: 2, // 实时 / 触摸
          // probeType: 3 // 实时 / 触摸 / 惯性 / 编码
        })

        // 给右侧列表绑定scroll监听
        rightScroll.on('scroll', ({x, y}) => {
          console.log('scroll', x, y)
          this.scrollY = Math.abs(y)
        })

        // 给右侧列表绑定scrollEnd监听
        rightScroll.on('scrollEnd', ({x, y}) => {
          console.log('scrollEnd', x, y)
          this.scrollY = Math.abs(y)
        })
      },
      /* 
      统计右侧所有分类li的top的数组
      */
      initTops () {
        const tops = []
        let top = 0
        tops.push(top)
        const lis = Array.prototype.slice.call(this.$refs.rightUl.children)
        lis.forEach(li => {
          top += li.clientHeight
          tops.push(top)
        })

        // 更新tops数据
        this.tops = tops
        console.log('tops', tops)
      }
    },

    watch: {
      goods () { // goods数据有了
        this.$nextTick(() => {// 列表数据显示了
          this.initScroll()
          this.initTops()
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .goods
    display: flex
    position: absolute
    top: 225px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 auto
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
