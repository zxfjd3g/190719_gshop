<template>
  <div>
    <ShopHeader/>
    <div class="tab">
      <div class="tab-item">
        <router-link :to="`/shop/${id}/goods`" replace>点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="`/shop/${id}/ratings`" replace>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="`/shop/${id}/info`" replace>商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import {saveCartFoods} from '@/utils'
  import ShopHeader from '@/components/ShopHeader/ShopHeader'
  export default {

    props: ['id'],

    mounted () {
      // this.$store.dispatch('getShopInfo')
      // this.$store.dispatch('getShopGoods')
      // this.$store.dispatch('getShopRatings')

      // 得到当前请求的商家ID
      // const id = this.$route.params.id
      const id = this.id
      // console.log('id', id)

      // 分发action请求商家数据
      this.$store.dispatch('getShop', id)

      // 给窗口绑定一个卸载的监听(刷新)
      // window.onunload = () => {}
      window.addEventListener('unload', () => {
        const {shop:{id}, cartFoods } = this.shop  // 多层解构
        // 将当前商家的购物车数据保存
        saveCartFoods(id, cartFoods)
      })
    },

    computed: {
      ...mapState({
        shop: state => state.shop   // {shop: {}, cartFoods: []}
      })
    },

    // 在退出当前商家界面时调用
    beforeDestroy () { //在刷新界面时不会执行
      // sessionStorage.setItem('beforeDestroy_key', 2)
      const {shop:{id}, cartFoods } = this.shop  // 多层解构

      // 将当前商家的购物车数据保存
      saveCartFoods(id, cartFoods)
    },

    components: {
      ShopHeader
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #02a774
</style>
