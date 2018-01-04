
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
` 所有插件都需要对原生代码进行二次开发`



# 其他
## 真机调试 
chrome://inspect/#devices
`第一次需要翻墙要不会一直白屏`

## 生成懒加载文件
ionic generate page xxx 生成时自动module.ts文件
