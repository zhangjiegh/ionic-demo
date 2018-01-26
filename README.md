
# Ionic Demo
## www
Run `ionic serve` 

## android
* Run `ionic cordova platform add android` to add
* Run `ionic cordova build android` to build 
* Run `ionic cordova emulate android` to emulate  
* Run `ionic cordova platform rm android` to delete

## 加载原生相关插件需要
	ionic cordova plugin add '插件'
	npm install -S '插件'

## 删除原生相关插件需要
	ionic cordova plugin rm '插件'
* 如果使用相似插件可能因权限问题报错`

## 二维码插件选择 
	ionic cordova plugin add cordova-plugin-qrscanner
	npm install --save @ionic-native/qr-scanner
	
	ionic cordova plugin add cordova-plugin-cszbar

* 需要对原生代码进行二次开发 qrscanner ios 可能黑屏未测试 cszbar没问题`



## 微信
	cordova plugin add cordova-plugin-wechat --variable wechatappid=wxd930ea5d5a258f4f

* https://github.com/xu-li/cordova-plugin-wechat

## 登录
	ionic cordova plugin add cordova-plugin-advanced-http
	npm install --save @ionic-native/http

# 其他

## 真机调试 
* `adb devices` 查看手机是否真正连接

* `chrome://inspect/#devices` 第一次需要翻墙要不会一直白屏

## 生成懒加载文件
`ionic generate page xxx` 生成时自动module.ts文件

* ionic2自定义插件与插件的调用
`https://www.jianshu.com/p/e151a3c2f652`

## 网络sessin解决方案
* 查看 page login 通过原生解决
* 查看 page ajax 通过url解决 
* 部分说明查看 http://blog.csdn.net/skwo12345/article/details/79173965

## treeView实现方法
* 查看 page tree-view



