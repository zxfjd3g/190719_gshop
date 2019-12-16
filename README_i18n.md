## 1. 应用国际化(i18n)
	1). 应用国际化: 本质就是把所有用于界面显示的字符串全部提取出来,做成多个语言版本, 根据指定语言显示对应语言的文本
	2). 应用本地化: 给应用做一个当地语言的版本

## 2. vue项目国际化

	1). 搭建项目
		a. 基于vue脚手架3创建的项目
		b. 引入vue-i18n
			vue add i18n
			根据提示依次指定: zh_CN --> zh_CN --> n
	2). 实现应用国际化: 支持多语言显示
		a. 创建/修改国际化的message文件
			src/locales/zh_CN.json: 
				{
					"message": "你好, 国际化 !!"
				}
			src/locales/en.json
				{
					"message": "hello i18n !!"
				}
		b. 在组件中读取当前应用指定locale的message
			$t('message')
		c. 读取/设置当前应用的locale
			读取: this.$i18n.locale
			更新: this.$i18n.locale = 'en' // 一旦更新整个应用中所有的message都自动更新为en的版本
		d. 保存/读取当前设置的locale
			保存: localStorage.setItem('locale_key', 'en')
			读取: localStorage.getItem('locale_key')  // src/i18n.js