## 1. json的理解和设计
    0. json是什么?
        具有特定结构的字符串
    1. 整体结构
        1). json对象: {key1: value1, key2: value2}
        2). json数组: [value1, value2]
        3). key是什么?  
            字符串(必须用双引号起来)
        4). value是什么?
            string/number/boolean/{}/[]
    2. json的组成
        1). 结构: 数据类型和标识名称  不显示到界面上
        2). 数据值: 其它, 显示到界面

    3. 用途
        前后台传输数据的格式基本都是json
        
    4. mock数据与真实数据
        设计: {}与[]的选择
        要求: 结构要一样, 值可以不一样

## 2. mockjs的理解和使用
    mockjs是什么: 用来提供mock数据接口的js库
    mockjs作用: 拦截ajax请求, 返回根据指定结构生成的随机数据
    mockjs使用: Mock.mock(url, template)

## 3. 使用vuex管理商家相关的数据
    goods
    ratings
    info

## 4. ShopHeader组件
    1). 异步显示数据效果的编码流程
        ajax
          ajax请求函数
          接口请求函数
        vuex
          modules/shop.js
        组件
          dispatch(): 异步获取后台数据到vuex的state
          mapState(): 从vuex的state中读取对应的数据
          模板中显示
    2). 初始显示异常
        情况: Cannot read property 'xxx' of undefined"
        原因: 初始值是空对象, 内部没有数据, 而模板中直接显示3层表达式
        解决: 使用v-if指令
    3). vue transition动画
        <transition name="xxx">
        xxx-enter-active / xxx-leave-active
          transition
        xxx-enter / xxx-leave-to
          隐藏时的样式

## 5. ShopGoods组件滑动相关
### 1). 基本滑动
    下载:
        better-scroll  // 1.x的版本 
    编码: 
        new BScroll(wrapDiv, {})
    说明:
        当内容的高度超过容器的高度时, 形成滑动
        better-scroll禁用了原生的dom事件, 使用的是自定义事件, 而且默认不分发
    优化: 
        下载2.x版本: better-scroll@next
        只打包使用的核心库, 没有使用的功能不打包

### 2). 滑动右侧列表, 左侧的当前分类会变化
    1). 设计一个计算属性: currentIndex代表当前分类的下标
    2). 相关数据
        滚动的y坐标: scrollY---> 给右侧列表绑定一个滚动的监听
        右侧分类<li>的top数组: tops-->列表第一次显示之后统计
    3). 计算的逻辑
        scrollY>=top && scrollY<nextTop
    4). 在列表显示之后确定tops
    5). 绑定scroll/scrollEnd监听, 在回调中设置scrollY值
    6). 关于滑动
        a. 触发滚动回调的时机
            实时: 高频触发
            非实时: 低频触发
        b. 触发滚动的方法
            触摸
            惯性
            编码

### 3). 点击左侧分类项, 右侧列表滑动到对应位置
    1). 绑定点击监听
    2). 通过rightScroll滚动到对应的位置: rightScroll.scrollTo(0, -tops[index])
    3). 立即更新scrollY

### 4). 滑动右侧列表时, 如何保证当前分类项总是可见?
    当当前分类项(currentIndex)发生改变时, 让左侧列表滑动到当前分类处
    如何判断下标发生了改变?