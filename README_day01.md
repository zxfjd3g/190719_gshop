## 1. 项目开发准备
    项目描述
    技术选型
    API接口

## 2. 开启项目开发
    使用脚手架创建项目: vue-cli3
    安装所有依赖/指定依赖
    开发环境运行
    生产环境打包与运行

## 3. 移动端
    适配
        lib-flexible
        postcss-px2rem
    点击0.3s延迟
        是什么: 点击后300ms, 点击回调才调用
        原因: 移动端浏览器为了处理双击缩放, 点击操作完成后并没有立即分发click事件, 300ms后才分发
        解决: 
            使用touch事件监听, 不用click
            使用fastclick库
        fastclick的基本原理: 在touchend事件中分发一个自定义的click事件, 阻止浏览器300ms后分发的click事件

## 4. 搭建项目整体界面结构
    1). 项目路由拆分
        确定路由组件显示的区域
        确定路由是几级路由
    2). App组件组成
        底部导航组件: FootGuide
        导航路由组件: MSite/Search/Order/Profile
    3). vue-router的理解和使用
        $router: 路由器对象, 包含一些操作路由的功能方法, 来实现编程式导航(跳转路由)
        $route: 当前路由对象, 一些当前路由信息数据的容器, path/meta/params/query
    4). FootGuide: 底部导航组件
        动态class
        编程式路由导航

## 5. 拆分组件
    1). 导航路由组件
        MSite
        Search
        Order
        Profile
    2). Header头部组件
        通过props向子组件传递数据
        通过slot向子组件传递标签
    3). Login路由组件
        FooterGuide的显示/隐藏: 通过路由的meta标识
    4). 轮播
        使用swiper
        必须列表数据显示之后创建swiper对象轮播才正常

## 6. 启动后台应用并测试
    运行后台项目(启动mongodb服务),
    使用postman测试后台接口, 如果不一致, 与后台工程师对接 / 修改接口文档

## 7. ajax封装
    1). ajax.js: axios二次封装
        1. 统一处理请求异常: 响应拦截器的失败的回调中返回一个pending的promise
        2. 异步请求成功的数据不是response, 而是response.data: 响应拦截器的成功回调返回response.data
        3. 对请求体参数进行urlencode处理, 而不使用默认的json方式(后台接口不支持): 请求拦截器中将data对象转换为urlencode字符串
        4. 指定请求超时的时间和路径前缀: 创建实例时指定配置
    2). 封装接口请求函数
        根据接口文档定义
    3). 解决ajax的跨越域问题(开发环境)
        配置代理: vue.config.js ==> devServer.proxy
        代理服务器: webpack-dev-server ==> http-proxy-middleware
        作用: 针对前台虚拟路径的特定请求做转发请求操作

## 8. vuex编码
    创建所有相关的模块: vuex/store|state|mutations|actions|getters|mutation-types
    设计state: 从后台获取的数据
    实现actions: 
        定义异步action: async/await
        流程:　发ajax获取数据, commit给mutation
    实现mutations: 定义直接更新state数据的函数
    实现index: 创建store对象
    main.js: 配置store
    组件中:
        分发: this.$Store.dispatch('actionName', data)
        提交: this.$store.commit('mutationName', data)
        读取: mapState() / mapGetters()