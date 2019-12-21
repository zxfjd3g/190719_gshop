<template>
  <div>
    <h1>Vue的响应式原理</h1>
    <button @click="update1">更新1</button> &nbsp;
    <button @click="update2">更新2</button>&nbsp;
    <button @click="update3">更新3</button>&nbsp;

    <p>a==={{a}}</p>
    <p>b==={{b}}</p>
    <p>c.d==={{c.d}}</p>
    <p>c.e==={{c.e}}</p>
    <hr>
    <Reactive1 :a="a"></Reactive1>
  </div>
</template>

<script type="text/ecmascript-6">
  import Reactive1 from './Reactive1'

  export default {
    data () {
      this.b = 'b11' 
      return { 
        a: 'a11',
        c: {
          d: 'd111'
        }
      }
    },

    methods: {
      update1 () {
       // this.a = 'a22'
       this.c.d = 'd222'
      },

      update2 () {
        this.b = 'b22'
      },

      update3 () {
        // this.c.e = 'c2222'
        this.$set(this.c, 'e', 'c222')
      }
    },

    components: {
      Reactive1
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
