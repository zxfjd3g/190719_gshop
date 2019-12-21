<template>
  <div>
    <router-link to="/review/slot">slot</router-link>&nbsp;&nbsp;
    <router-link to="/review/mixin">mixin</router-link>&nbsp;&nbsp;
    <router-link to="/review/component">component</router-link>&nbsp;&nbsp;
    <router-link to="/review/event">event</router-link>&nbsp;&nbsp;
    <router-link to="/review/model">model</router-link>&nbsp;&nbsp;
    <router-link to="/review/reactive">reactive</router-link>&nbsp;&nbsp;
    <router-link to="/review/life">life</router-link>&nbsp;&nbsp;
    <hr>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  
</style>
