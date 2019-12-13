<template>
  <div>
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from '@/components/FooterGuide/FooterGuide.vue'
  export default {
    components: {
      FooterGuide
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

 
</style>
