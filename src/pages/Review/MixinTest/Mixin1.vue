<template>
  <div>
    <div>{{a}}</div>
    <div>{{b}}</div>
    <div>{{length}}</div>
    <div>{{test}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { myMixin } from './mixins'
  export default {
    mixins: [myMixin],
    data () {
      return {
        b: 'bbbbbb',
        a: '11111111'
      }
    },

    computed: {
      test () {
        return 'test'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
