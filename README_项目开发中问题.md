# 1. 使用vue-cli3脚手架遇到的坑
    1). 问题: 异常: You are using the runtime-only build of Vue where the template compiler is not available
        原因: 默认引用的vue包是不带编译器的vue.runtime.esm.js, 而我们需要带编译器的版本:vue.esm.js
        解决1: 不使用template配置, 而使用render配置
          new Vue({
            render: h => h(App)
          })
        解决2: 配置指定引用带编译器的版本:vue.esm.js   --vue.config.js
            module.exports = {
              configureWebpack: {
                resolve: {
                  alias: {
                    'vue$': 'vue/dist/vue.esm.js'  // $代表精确匹配
                  }
                }
              }
            }
        说明: 
            1. vue-cli2项目中为什么没有此问题?   内部已经包含了此配置
            2. 应该使用render配置, 减小打包文件大小
        
    2). 问题: mint-ui的babel配置异常: babel.plugins[1][1] must be an object, false, or undefined
        原因: 根据mint-ui官方文档基于vue-cli2的.babelrc中的配置移除过来, 原来配置的是一个数组, 但现在需要的是对象
        解决: 改为对象的配置
            plugins: [
              "xxx",
              ["component", {
                "libraryName": "mint-ui",  // 针对特定的库
                "style": true // 相关样式自动引入
              }]
            ]

# 2. 使用axios的问题
    1). 问题: 发送post请求,通过data携带请求参数, 后台应用得不到
    2). 原因: axios提交post请求, 一旦data指定为对象, axios使用json格式提交请求体参数; 而服务器端只支持urlencoded格式
    3). 解决办法: 使用axios的请求拦截器, 将配置中的data对象转换为urlencoded格式的字符串

# 3. 使用swiper库的问题
    1). 问题: 创建swiper对象后轮播效果有问题: 不能轮播, 没有圆点指示器
    2). 原因: 创建swiper对象的时机太早了, 必须要在列表数据更新显示之后创建
    3). 解决: 可以有3种解决办法---想办法在列表数据更新显示之后才去创建swiper
        a. 使用watch+$nextTick()
        b. 使用回调+$nextTick()
        c. 利用dispatch()返回的promise