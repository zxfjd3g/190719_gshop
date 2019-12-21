<template>
  <div>
    <Mixin1></Mixin1>
    <hr>
    <Mixin2></Mixin2>
  </div>
</template>

<script type="text/ecmascript-6">
  import Mixin1 from './Mixin1'
  import Mixin2 from './Mixin2'

  export default {
    components: {
      Mixin1,
      Mixin2
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
