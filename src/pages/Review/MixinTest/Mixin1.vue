<template>
  <div>
    <div>{{a}}</div>
    <div>{{b}}</div>
    <div>{{length}}</div>
    <div>{{test}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {myMixin} from './mixins'
  export default {
    mixins: [myMixin],

    data () {
      return {
        b: 'bbbbbb',
      }
    },
    
    computed: {
      test () {
        return 1
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
