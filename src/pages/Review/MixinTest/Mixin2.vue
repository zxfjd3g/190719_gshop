<template>
  <div>
    <div>{{a}}</div>
    <div>{{c}}</div>
    <div>{{length}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { myMixin } from './mixins'
  export default {
    mixins: [myMixin],
    data () {
      return {
         c: 'ccccc',
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
