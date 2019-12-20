## 1. 解决lodash的throttle事件响应2次的问题

## 2. 动态显示指定商家信息
### 1). 路由处理
  a. 路由的params参数
  b. 将params参数转换成props
  c. 处理带params参数的子路由和<router-link>
  d: 自动跳转路由: redirect配置
  e. 在调用push()进行路由跳转时(需要携带参数)   ---面试可重点说
    直接路径path: 自动跳转有效
    配置对象指定name/params: 自动跳转失效

### 2). 根据指定的商家id获取对应的商家数据
  a. 完成mock接口