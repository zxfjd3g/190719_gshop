## 1. 异步显示数据
    1). 封装ajax: 
        ajax请求的函数: 封装axios
        接口请求函数: 根据接口文档定义
        解决ajax的跨越域问题: 配置代理, 对代理的理解
    2). vuex编码
        创建所有相关的模块: vuex/store|state|mutations|actions|getters|mutation-types
        设计state: 从后台获取的数据
        实现actions: 
            定义异步action: async/await
            流程:　发ajax获取数据, commit给mutation
        实现mutations: 给状态赋值
        实现store: 创建store对象
        main.js: 配置store
    3). 组件异步显示数据
        在mounted(): $store.dispatch('actionName')来异步获取后台数据到state中
        在computed: mapState(['xxx'])读取state中数据到组件中
        在template: 显示xxx的数据

## 2. 异步显示分类轮播
    利用mapState()读取vuex管理的所有分类的一维数组: categorys
    根据分类的一维数组生成二维数组: categorysArr
        自己实现计算逻辑
        使用lodash库的chunk函数简化
        对lodash库进行按需引入打包, 减小打包文件
    解决swiper轮播bug
        使用watch+$nextTick()
        使用自定义回调+$nextTick()
        利用dispatch()返回的promise
    使用svg图片实现loading的效果
    请求loading效果
        利用axios请求和响应拦截器
        使用mint-ui的Indicator组件

## 3. Login组件的纯前台交互功能 
    1). 切换2种登陆方式: isShowSms
    2). 手机号格式验证: isRightPhone计算属性
    3). 倒计时的效果: computeTime + setInterval()
    4). 切换密码的显示/隐藏: isShowPwd + transition
    5). 前台表单验证: 使用vee-validate进行声明式表单验证

## 4. Star组件
    创建组件, 设计组件的props
    使用组件标签, 并传入相应的标签属性
    完成组件编码: 计算属性
    
    

