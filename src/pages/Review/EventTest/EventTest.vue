<template>
  <div>
    <h1>EventTest组件</h1>
    <button @click="test1">测试原生事件</button>

    <hr>
    <Event1 @click.native="test2"/>

    <hr>
    <Event2 @click="test3" @xxx="test4" />

  </div>
</template>

<script type="text/ecmascript-6">
  import Event1 from './Event1.vue'
  import Event2 from './Event2.vue'

  export default {

    methods: {
      test1 () {
        alert('test1()')
      },
      test2 (event) {
        alert('test2()')
      },
     
      test3 (data) {
        alert('click test3()  ' + data )
      },
      test4 (data) {
        alert('xxx test4()  ' + data )
      }
    },

    components: {
      Event1,
      Event2,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
