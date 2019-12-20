/* 
包含一些工具函数的模块
*/
import Vue from 'vue'

/* 
保存指定商家的购物车数据到sessionStorage
shopId_key: {foodId1: count1, foodId2: count2}

array.reduce(): 累计累加生成一个数值/数组/对象
*/
export function saveCartFoods(shopId, cartFoods) {
  // 根据cartFoods生成包含所有count数量的对象容器
  const cartCounts = cartFoods.reduce((pre, food) => {
    // 向pre中添加属性
    pre[food.id] = food.count
    // 返回pre
    return pre
  }, {})

  // 保存到sessionStorage
  sessionStorage.setItem(shopId + '_key', JSON.stringify(cartCounts))
}

/* 
读取sessionStorage中的cartCounts, 生成并返回一个cartFoods 
shopId_key: {foodId1: count1, foodId2: count2}
*/
export function getCartFoods (shop) {
  const cartFoods = []

  // 读取sessionStorage中的cartCounts
  const cartCounts = JSON.parse(sessionStorage.getItem(shop.id + '_key')) || {}
  // 遍历查出所有需要指定count的food
  shop.goods.forEach(good => {
    good.foods.forEach(food => {
      // 取出food在cartCounts中对应的count(有可能没有)
      const count = cartCounts[food.id]
      if (count>0) {
        // food.count = count
        Vue.set(food, 'count', count)
        cartFoods.push(food)
      } 
    })
  })

  return cartFoods
}