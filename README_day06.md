## 1. 解决lodash的throttle事件响应2次的问题
    throttle(fn, 1000, {trailing: false})
    在1s内多次点击, 只响应第一次点击(默认是响应2次, 且第2是在过了1s后才响应)
  
  
## 2. 动态显示指定商家信息
### 1). 路由处理
    a. 路由的params参数
        注册路由: /shop/:id
        传递参数: '/shop/1' / {path: '/shop/1'} / {name: 'shop', params: {id: 1}}
    b. 将params参数转换成props
    c. 处理带params参数的子路由和<router-link>
    d: 自动跳转路由: redirect配置
    e. 在调用push()进行路由跳转时(需要携带参数)   ---面试可重点说
        直接路径path: 自动跳转有效
        配置对象指定name/params: 自动跳转失效

### 2). 根据指定的商家id获取对应的商家数据
    a. 完成mock接口
    b. api/vuex: 数据结构有改变
    c. 查看上次访问的商家不再请求商家数据而使用state中的商家数据
    d. 解决商家路由切换后, BScroll不能滑动的bug
    e. 解决商家路由切换后, BScroll多次响应一次点击的问题
        
### 3). 购物车的2个问题
    a. 切换商家时, 购物车数据会丢失
      原因: 在切换商家获取商家数据时, 会清除前面商家的所有数据(商家和购物车)
      解决: 对购物车数据进行sessionStorage的存取操作
      保存什么数据?
          保存的是购物车中food的数量count
          结构: shopId_key: {foodId1: count2, foodId2: count2}
      什么时候保存?
          在Shop组件卸载前beforeDestroy()中保存, 根据shop的id和cartFoods生成要保存数据
      什么时候读取?
          在请求获取到新的shop后读取sessionStorage中保存的cartCounts, 生成一个cartFoods的数组
    b. 在商家界面刷新, 购物车数据会丢失
      原因: 
          刷新时vuex的state中的数据初始值(原有的数据都没有)
          刷新时beforeDestroy()不调用(那最新的cart数据就没有保存)
      解决:
          利用窗口卸载的监听来保存cart数据
          在Shop组件的mounted中给window绑定unload监听, 保存当前的cart数据到sessionStorage

## 3. Ratings组件与ShopInfo组件
    1). 使用计算属性对列表进行过滤显示
    2). 日期时间的格式化: vue过滤器 + moment/dayjs/date-fns
    3). 通过JS动态修改元素的样式宽度
    4). 针对2种场景创建BScroll对象