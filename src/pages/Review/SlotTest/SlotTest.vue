<template>
  <div>
    <h1>1. 普通插槽</h1>
    <Slot1>
      
    </Slot1>

    <h1>2. 命名插槽(named slot)</h1>
    <Slot2>
      <h1 slot="two">{{msg}}</h1>
      <h2 slot="one">{{msg}}</h2>
      <h3>xxxx</h3>
    </Slot2>
    <hr>
    <Slot2>
      <p slot="two">{{msg}}</p>
      <p slot="one">{{msg}}</p>
    </Slot2>

    <h1>3. 作用域插槽(scoped slots)</h1>

    <Slot3>
      <!-- slotProps是保存<slot>的所有属性 -->
      <template slot-scope="slotProps">
        <span v-if="slotProps.todo.isComplete">{{slotProps.todo.text}}++</span>
      </template>
    </Slot3>

    <Slot3>
      <!-- slotProps是保存<slot>的所有属性 -->
      <template slot-scope="slotProps">
        <span v-if="slotProps.todo.isComplete" style="color: red">{{ slotProps.todo.text }}</span>
      </template>
    </Slot3>


  </div>
</template>

<script type="text/ecmascript-6">
  import Slot1 from './Slot1.vue'
  import Slot2 from './Slot2.vue'
  import Slot3 from './Slot3.vue'
  export default {
    name: 'SlotTest',
    data () {
      return {
        msg: 'atguigu'
      }
    },
    components: {
      Slot1,
      Slot2,
      Slot3
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
