
# Ionic Demo
## www
Run `ionic serve` 

## android
* Run `ionic cordova platform add android` to add
* Run `ionic cordova build android` to build 
* Run `ionic cordova emulate android` to emulate  
* Run `ionic cordova platform rm android` to delete

## 加载原生相关插件需要
* ionic cordova plugin add '插件'
* npm install -S '插件'

## 删除原生相关插件需要
* ionic cordova plugin rm '插件'<br>
` 如果使用相似插件可能因权限问题报错`

## 二维码插件选择 
cordova-plugin-cszbar
* ionic cordova plugin add cordova-plugin-cszbar
* npm install -S cordova-plugin-cszbar<br>
` 需要对原生代码进行二次开发 qrscanner ios 可能黑屏未测试`

## 微信
* cordova plugin add cordova-plugin-wechat --variable wechatappid=wxd930ea5d5a258f4f<br>
`官方Demo APP_ID wxd930ea5d5a258f4f`<br>
`package="net.sourceforge.simcpux"`
`https://github.com/xu-li/cordova-plugin-wechat`

##登录

# 其他
## 真机调试 
* adb devices 查看手机是否真正连接

* chrome://inspect/#devices
`第一次需要翻墙要不会一直白屏`

## 生成懒加载文件
ionic generate page xxx 生成时自动module.ts文件

ionic2自定义插件与插件的调用`https://www.jianshu.com/p/e151a3c2f652`
