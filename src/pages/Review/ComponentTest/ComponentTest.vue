<template>
  <div>
    <h2>动态组件</h2>
    <button @click="toggle">切换</button>

    <component :is="currentComp"/>

   <h2>缓存组件</h2>
    <keep-alive>
      <component :is="currentComp"/>
    </keep-alive>
    
 
    <h2>异步组件</h2>
    <async-component1></async-component1>
    <!-- <async-component2></async-component2>
    <async-component3></async-component3> -->
    <async-component4></async-component4>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import DynamicComponent1 from './DynamicComponent'
  import DynamicComponent2 from './DynamicComponent2'

  // 定义全局组件为一个异步工厂函数
  Vue.component('async-component1', function (resolve, reject) {
    setTimeout(function () {
      // 将组件定义对象(component definition)传递给 resolve 回调函数
      resolve({
        template: '<div>I am async!</div>'
      })
    }, 1000)
  })


  Vue.component('async-component2', function (resolve) {
    // 这个特殊的 require 语法
    // 将指示 webpack 自动将构建后的代码，
    // 拆分到不同的 bundle 中，然后通过 Ajax 请求加载。
    setTimeout(() => {
      require(['./AsyncComponent2.vue'], resolve)
    }, 1000);
  })

  Vue.component(
    'async-component3',
    // `import` 函数返回一个 Promise.
    () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          import('./AsyncComponent2.vue').then(resolve)
        }, 1000);
      })
    }
  )
  // Promise.resolve(value)
  // Promise.resolveDelay(value, time)

  export default {
    name: 'ComponentTest',

    data () {
      return {
        currentComp: 'DynamicComponent2'
      }
    },

    methods: {
      toggle () {
        this.currentComp = this.currentComp==='DynamicComponent2' ? 'DynamicComponent1' : 'DynamicComponent2'
      }
    },

    components: {
      DynamicComponent1,
      DynamicComponent2,
      'async-component4': () => import('./AsyncComponent2.vue')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
