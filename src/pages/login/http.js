/**
 * Created by dragon on 15-12-20.
 * http 工具类
 */
var request = require('request');
var config  = require("../initCore").options;

/**
 * 默认选项
 * @type {{}}
 */
var defaultOption = config.httpOption;

/**
 * doGet 可以是http 或者是 https请求
 * @param option = { host:'127.0.0.1',port:10001,httpType:"http",path:"/user/doLogin"}
 * @param mycallback
 * @param headers={"Content-Type":"application/json"}
 */
exports.doGet = function(option,mycallback,headers) {

    var opt = {};
    if(option == undefined || option == ""){
        opt = defaultOption;
    }else{
        opt = option;
    }

    var port = defaultOption.port;
    var host = defaultOption.host;

    if(opt.port != undefined){
        port = opt.port;
    }

    if(opt.host != undefined){
        host = opt.host;
    }


    var httpType = defaultOption.httpType;
    if(opt.httpType == "https"){
        httpType = "https";
    }

    var url = "";
    if(opt.port == 80){
        url = httpType + "://" + host + opt.path;
    }else {
        url = httpType + "://" + host + ":" + port + opt.path;
    }

    console.info(url);

    var options = {
        method: 'GET',
        url: url,
        headers: headers
    };

    if(headers != undefined){
        options.headers = headers;
    }


    console.debug(options);
    request(options,function callback(error, response, body) {
        if (!error && response.statusCode == 200) {

            console.debug(body);

            var data = JSON.parse(body);
            mycallback(response.statusCode,data);
        }else{
            var data = {mes:"请求出错"}
            mycallback(error,data);
        }
    });


}


/**
 * doPost 可以是http 或者是 https请求
 * @param option = { host:'127.0.0.1',port:10001,httpType:"http",postType:"json",path:"/user/doLogin",params:{key:'value'}}
 * @param mycallback
 * @param headers={"Content-Type":"application/json"}
 */
exports.doPost = function(option,mycallback,headers) {

    var opt = {};
    if(option == undefined || option == ""){
        opt = defaultOption;
    }else{
        opt = option;
    }

    var port = defaultOption.port;
    var host = defaultOption.host;

    if(opt.port != undefined){
        port = opt.port;
    }

    if(opt.host != undefined){
        host = opt.host;
    }


    var httpType = defaultOption.httpType;
    if(opt.httpType == "https"){//https
        httpType = "https";
    }

    var url = httpType + "://" + host + ":" + port + opt.path;
    console.info(url);

    var options = {
        method: 'POST',
        url: url
    };

    var postType = defaultOption.postType;
    if(opt.postType == "form"){//表单提交
        console.debug(options);
        request.post({url:url, form: opt.params}, function(err,response,body){
            console.debug(body);
            if (!error && response.statusCode == 200) {
                var data = JSON.parse(body);
                mycallback(response.statusCode,data);
            }else{
                var data = {mes:"请求出错"}
                mycallback(error,data);
            }
        });
    }else{//json提交
        options.body = opt.body;
        var _headers =  {};
        if (headers != undefined){
            _headers = headers;
            _headers["Content-Type"] = 'application/json';
        }else{
            _headers =  {"Content-Type": 'application/json'};
        }
        options.headers = _headers;

        console.log(options);
        request(options,function callback(error, response, body) {
            console.log(body);
            if (!error && response.statusCode == 200) {
                var data = JSON.parse(body);
                //console.log(data);
                mycallback(response.statusCode,data);
            }else{
                var data = {mes:"请求出错"}
                mycallback(error,data);
            }
        });

    }


}


