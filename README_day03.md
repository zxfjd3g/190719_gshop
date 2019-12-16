## 1. Login组件的前后台交互功能
    1). 一次性图形验证码
        通过<img src="url">请求后台获取验证码图片显示
        点击回调中更新img的src, 并携带时间戳参数, 更新验证码
    2). 一次性短信验证码
        使用第三方短信平台(容联)接口
            注册/登陆
            添加测试号码
            修改账号ID/Token/AppID
            重新运行最终版的后台和前台应用
        请求发送验证码短信
        使用mint-ui实现对不同结果的不同提示效果
    3).  手机号/验证码登陆
    4). 用户名/密码/验证码登陆
        发送ajax请求, 得到返回的结果
        根据结果的标识(code)来判断登陆请求是否成功
            1: 不成功, 显示提示
            0: 成功, 保存user到state, 保存token到storage, 返回到个人中心

## 2. token的理解和使用
    1). 作用
        a. 是一个包含特定信息的字符串:　id / 失效的时间
        a. 对请求进行一定的检查限制, 防止恶意请求
        b. 后台部分接口需要进行token验证  ==> 只有请求这些接口时才携带token
    2). 使用流程
        a. 客户端发送登陆的请求, 服务器端进行用户名和密码查询, 
            如果user存在, 根据user的id值生成token(指定了有效期), 将user和token返回给客户端
        b. 客户端接收到登陆成功的响应后, 将token保存localStorage, 将user和token保存在vuex的state
        c. 在请求需要授权检查的接口前(在请求拦截器做)
            如果token不存在, 不发请求, 直接进行错误流程(响应拦截器的错误处理): throw error对象(status: 401)
            如果token存在, 将token添加到请求头中: config.headers.Authorization = token
        d. 在响应拦截器中处理错误
            1). 如果error中没有response
                如果当前没有在登陆页面, 跳转到登陆页面
            2). 如果error中有response, 取出response中的status
                status为: 401: token过期了, 退出登陆(清除local中的token和state中user与token), 并跳转到登陆页面
                status为: 404: 提示访问的资源不存在
![](https://user-gold-cdn.xitu.io/2019/12/15/16f09c6b6fab62b4?w=639&h=523&f=png&s=34981)	


## 3. 搭建商家的整体界面
    1). 拆分界面路由: 嵌套(二级)路由
    2). 路由的定义/配置|使用

## 4. 使用vue-i18n实现vue应用的国际化
    README_i18n.md
