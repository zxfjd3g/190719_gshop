## 1. vuex的多模块编码
    1). 为什么vuex要有多模块
        对中大型项目来说, 需要管理的状态数据较多, 不进行多模块方式拆分, mutations/actions模块会比较臃肿
        而一旦将不同模块的数据分别拆分并管理, 再多的状态也不会有此问题
    2). 设计多个模块
        msite
        user
        shop
    3). 每个模块的结构
        export default {
            state,
            mutations,
            actions,
            getters
        }
    4). 将state, mutations, actions, getters拆分到各个模块中
        每个模块中的mutations/actions/getters只能操作当前模块的state数据
        不同模块的mutation可以相同, 但actions和getters不要相同
    5). vuex管理的state结构
        {
          mudule1: {},
          mudule2: {},
          mudule3: {},
        }
    6). 配置:
        new Vuex.Store({
            mutations, // 能看到总状态数据, 能更新任意模块状态数据
            actions, // 能看到总状态数据, 能触发任意mutation调用
            getters, // 基于任意模块状态数据的计算属性
            modules: {
              module1,
              module2
            }
        })
    7). 在组件中与vuex通信
        读取state数据: ...mapState({user: state => state.user.user})
        读取getter数据: ...mapGetters(['totalShopCount'])
        更新状态数据: this.$store.dispatch('actionName')   this.$store.commit('mutationName')    
    
    8). 多个action或mutation同名的问题
        组件中:
            store.dispatch(): 所有匹配的action调用
            store.commit(): 所有匹配的mutation调用
        action(全局/局部)中
            commit(): 所有匹配的mutation调用
        调用顺序
            先全局, 再局部
            多个局部根据配置的先后

## 2. CartControl组件
    1). 给food设计count属性, 并由actions提供更新的方法
    2). 问题: 更新状态数据, 对应的界面不变化
        原因: 给一个已有绑定的对象直接添加一个新的属性, 这个属性没有数据绑定
        解决: 
            Vue.set(obj, 'xxx', value)才有数据绑定
            this.$set(obj, 'xxx', value)才有数据绑定
    3). vue transition

## 3. Food组件
    1). 父组件调用子组件的方法: this.$refs.child.method()
    2). 使用vue-lazyload实现图片懒加载

## 4. ShopCart组件
    1). 将购物项列表数据定义到vuex的state中: cartFoods
    2). 在vuex的getters中定义: totalCount, totalPrice
    3). 解决几个功能性bug
        a. 删除所有购物项, 购物车列表还打开着
        b. 添加一个购物项, 购物车列表自动打开
        c. 购物车列表不能滑动
        d. 购物车列表中点一次添加, 会增加多项
        e. 原本可以滑动的列表, 关闭再打开后不能再滑动了

## 5. cookie & session & localStorage & sessionStorage
### cookie
    1). 用于保存文本数据
    2). 服务器端生成, 保存在浏览器端
    3). cookie分类
        1. 持久cookie，等同于localStorage的生命周期
        2. 会话cookie，等同于sessionStorage的生命周期
    4). cookie优点: 体积小，可以用于前后端数据交互进行身份验证
    5). cookie缺点: 
        1. 不安全
        2. 体积小，4kb左右
        3. 浏览器有了cookie以后每次发请求携带cookie，占用带宽
        4. 用户可以通过浏览器设置禁用cookie
    
### session
    1). 用于存储任意类型数据
    2). 服务器端生成, 保存在服务端
    3). 依赖于cookie

### localStorage
    1). H5的新特性，浏览器端文件存储
    2). 关闭浏览器还在, 最大存储量为5M

### sessionStorage
    1). H5的新特性，浏览器端内存存储
    2). 关闭浏览器释放, 最大存储量为5M