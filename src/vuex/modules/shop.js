/* 
商家模块相关数据管理
*/
import Vue from 'vue'
import {
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT,
  CLEAR_CART
} from '../mutation-types'

import {
  reqGoods,
  reqRatings,
  reqInfo
} from '@/api'


export default  {
  state: { 
    goods: [], // 商品列表
    ratings: [], // 商家评价列表
    info: {}, // 商家信息
    cartFoods: [], // 购物车中所有food数组
  },
  mutations: {
    [RECEIVE_INFO](state, {info}) {
      state.info = info
    },
    
    [RECEIVE_RATINGS](state, {ratings}) {
      state.ratings = ratings
    },
    
    [RECEIVE_GOODS](state, {goods}) {
      state.goods = goods
    },
  
    [ADD_FOOD_COUNT](state, {food}) {
      if (food.count) { // food有count
        food.count++
      } else {
        // 如果food中没有count, 给food添加count属性, 值为1
        // 问题: 给响应式对象添加一个新的属性, 没有数据绑定效果(不是响应式的)
        // food.count = 1
        // 解决: 给响应式对象添加一个响应式属性  
        // Vue.set( target, key, value )
        Vue.set(food, 'count', 1)
        // 将当前food添加到购物车
        state.cartFoods.push(food)
      }
    },
  
    [REDUCE_FOOD_COUNT](state, {food}) {
      if (food.count>0) { // 只有数量大于0时
        food.count--
        // 如果数量变为0, 将food从购物车中移除
        if (food.count===0) {
          state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
        }
      }
    },

    [CLEAR_CART] (state) {
      // 将cartFoods中所food的count变为0
      state.cartFoods.forEach(food => food.count = 0)
      // 重置购物车数组
      state.cartFoods = []
    }
  },
  actions: {
    // 异步获取商家信息
    async getShopInfo({commit}, cb) {
      const result = await reqInfo()
      if(result.code===0) {
        const info = result.data
        commit(RECEIVE_INFO, {info})

        typeof cb==='function' && cb()
      }
    },

    // 异步获取商家评价列表
    async getShopRatings({commit}, cb) {
      const result = await reqRatings()
      if(result.code===0) {
        const ratings = result.data
        commit(RECEIVE_RATINGS, {ratings})

        typeof cb==='function' && cb()
      }
    },

    // 异步获取商家商品列表
    async getShopGoods({commit}, cb) {
      const result = await reqGoods()
      if(result.code===0) {
        const goods = result.data
        commit(RECEIVE_GOODS, {goods})
        // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
        typeof cb==='function' && cb()
      }
    },

    /* 
    更新food中的数量的同步action
    */
    updateFoodCount ({commit}, {isAdd, food}) {
      if (isAdd) {
        commit(ADD_FOOD_COUNT, {food})
      } else {
        commit(REDUCE_FOOD_COUNT, {food})
      }
    }
  },
  getters: { 
    /* 
    调用时机: 
      1. 初始显示
      2. 依赖数据发生改变   ===> 效率低
    */
    /* cartFoods (state) {
      const arr = []
      state.goods.forEach(good => {
        good.foods.forEach(food => {
          if (food.count>0) {
            arr.push(food)
          }
        })
      })

      return arr
    } */
    /* 总数量 */
    totalCount (state) {
      return state.cartFoods.reduce((pre, food) => pre + food.count, 0)
    },
    /* 总价格 */
    totalPrice (state) {
      return state.cartFoods.reduce((pre, food) => pre + food.count*food.price, 0)
    },
  }
}