<template>
  <div>
    <h2>组件生命周期</h2>
    <p ref="title">{{title}}</p>
    <input type="text" v-model="title">
    <br>
    <br>
    <button @click="update">更新标题</button>
    <button @click="destroyComp">destroyVM</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

    data () {
      return {
        title: '标题111'
      }
    },

    methods: {
      update () {
        console.log('update()')
        this.title='标题333'
      },
      destroyComp () {
        this.$destroy()
      }
    },

    beforeCreate () {
      console.log('beforeCreate()', this.title)
    },
    // 实现了数据代理/数据响应式
    created () {
      console.log('created()', this.title)
      // this.title = '标题222'
    },

    beforeMount () {
      console.log('beforeMount()', this.$refs.title)
    },

    // 初始化显示

    mounted () {
      console.log('mounted()', this.$refs.title)
    },

    beforeUpdate () {
      console.log('beforeUpdate()', this.title, this.$refs.title.textContent)
    },

    // 更新界面

    updated () {
      console.log('updated()', this.title, this.$refs.title.textContent)
    },

    beforeDestroy () {
      console.log('beforeDestroy()')
    },

    destroyed () {
      console.log('destroyed()')
    },

    // 路由组件用上了<keep-alive></keep-alive>

    activated () {
      console.log('activated()')
    },

    deactivated () {
      console.log('deactivated()')
    },

    watch: {
      title (value) {
        console.log('watch title=' + value)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
