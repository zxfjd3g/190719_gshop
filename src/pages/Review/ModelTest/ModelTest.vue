<template>
  <div>
    <input type="text" v-model="name"> 
    <span>{{name}}</span>
    <br>
    <!-- 
      $event: 代表分发事件时传递的数据
      浏览器自动分发事件时, 会传递一个包含所有相关事件数据的对象(event)
    -->
    <input type="text" :value="name" @input="name=$event.target.value">
    <input type="text" :value="name" @input="fn">
    <span>{{name}}</span>  
    <hr>

    <MyInput v-model="name3"></MyInput>
    <span>{{name3}}</span>
    
    <MyInput :value="name4" @input="name4=$event"></MyInput>
    <MyInput :value="name4" @input="handleInput2"></MyInput>
    <span>{{name4}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  import MyInput from './MyInput.vue'
  export default {
    data () {
      return {
        name: 'tom',
        name2: 'Jack',
        name3: 'Bob',
        name4: 'Cat'
      }
    },

    methods: {
      handleInput (event) { // 浏览器分发事件时, 指定的数据是event对象(包含所有相关数据)
        this.name2 = event.target.value
      },

      handleInput2 (value) { // 自定义事件监听, 接收什么数据是分发自定义事件时指定
        this.name4 = value
      }
    },

    components: {
      MyInput
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
