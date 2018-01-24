import {Injectable} from "@angular/core";
import {Config} from "../config/index";
import {HttpClient} from "@angular/common/http";

/**
 * Created by jie on 2018/1/24.
 *
 * 存在跨域情况下 通过url带身份验证解决
 *
 *
 * nodejs后端过滤
 * if (req.query.sessionid){
            var str = req.sessionStore.sessions[req.query.sessionid]
            str = JSON.parse(str);
            req.session.user = str["user"];
            req.session.MEMBER_ROLE=  req.session.user.role;
            console.error(req.session.user);
        }
 *
 */
@Injectable()
export class HttpService2 {

	private defaultOption:any;
	constructor(private http: HttpClient,
				//private headers: HttpHeaders,
				private config:Config) {
		//http https 默认选项
		this.defaultOption = config.http;
	}

	doGet(option,headers?):Promise<any>{

		let opt:any= {};
		if(option == undefined || option == ""){
			opt = this.defaultOption;
		}else{
			opt = option;
		}

		let port = this.defaultOption.port;
		let host = this.defaultOption.host;
		if(opt.port != undefined){
			port = opt.port;
		}
		if(opt.host != undefined){
			host = opt.host;
		}

		let httpType = this.defaultOption.httpType;
		if(opt.httpType == "https"){
			httpType = "https";
		}

		let url = "";
		if(opt.port == 80){
			url = httpType + "://" + host + opt.path;
		}else {
			url = httpType + "://" + host + ":" + port + opt.path;
		}

		var options:any = {
			url: url,
			headers: headers
		};

		if(headers != undefined){
			options.headers = headers;
		}
		options.observe='response';
		console.debug(options);

		return new Promise((resolve, reject) => {
			this.http.get(options.url, {headers:options.headers}).subscribe(res=>{
				console.debug("========结果======");
				console.debug(res);
				return resolve(res);
			},error=>{
				resolve({code:-1,mes:error})
			});
		});
	}

	doPost(option:any,headers?:any){

		let opt:any = {};
		if(option == undefined || option == ""){
			opt = this.defaultOption;
		}else{
			opt = option;
		}

		let port = this.defaultOption.port;
		let host = this.defaultOption.host;

		if(opt.port != undefined){
			port = opt.port;
		}

		if(opt.host != undefined){
			host = opt.host;
		}


		let httpType = this.defaultOption.httpType;
		if(opt.httpType == "https"){//https
			httpType = "https";
		}

		let url = httpType + "://" + host + ":" + port + opt.path;
		let options: any = {
			url: url
		};

		// 表单提交
		if(opt.postType == "form"){
			console.debug(options);
		}else{ //json提交

			options.body = opt.body;
			let _headers:any =  {};
			if (headers != undefined){
				_headers = headers;
				_headers["Content-Type"] = 'application/json';
			}else{
				_headers =  {"Content-Type": 'application/json'};
			}
			options.headers = _headers;
			options.observe='response';
			console.debug(options);

			return new Promise((resolve, reject) => {

				this.http.post(options.url, options.body, {headers:options.headers}).subscribe(res=>{
					console.debug("========结果======");
					console.debug(res);
					return resolve(res);
				},error=>{
					resolve({code:-1,mes:error})
				});

			});
		}
	}
}
