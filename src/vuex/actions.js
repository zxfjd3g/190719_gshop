/* 
包含n个用于间接更新状态数据的方法的对象
方法可以包含异步和逻辑处理代码
*/

export default {
  yyy({commit, state}) { // state是总的state
    commit('xxx') // commit内部会查找所有匹配的mutation(总的和每个模块的)
  }
}