import Vue from 'vue'

export function getCartFoods (shop) {
  const {id, goods} = shop
  const foodsCountObj = JSON.parse(sessionStorage.getItem(id + '_key'))
  const arr = []
  if (foodsCountObj && Object.keys(foodsCountObj).length>0) {
    goods.forEach(good => {
      good.foods.forEach(food => {
        const count = foodsCountObj[food.id]
        if (count > 0) {
          Vue.set(food, 'count', count)
          arr.push(food)
        }
      })
    })
    // sessionStorage.removeItem(id + '_key')
  }
  return arr
}

export function saveCartCounts (id, cartFoods) {
  if (cartFoods && cartFoods.length>0) {
    const cartCounts = cartFoods.reduce((pre, food) => {
      pre[food.id] = food.count
      return pre
    }, {})
    sessionStorage.setItem(id + '_key', JSON.stringify(cartCounts))
  }
}