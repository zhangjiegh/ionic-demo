/**
 * Created by jie on 2018/1/8.
 *
 * 使用原生
 */
import { HTTP } from '@ionic-native/http';
import {Injectable} from "@angular/core";
import {Config} from "../config/index";



@Injectable()
export class HttpService {

	private defaultOption:any;
	constructor(private http: HTTP,private config:Config) {
		//http https 默认选项
		this.defaultOption = config.http;
	}

	doGet(option,headers):Promise<any>{

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

		var options = {
			url: url,
			headers: headers
		};

		if(headers != undefined){
			options.headers = headers;
		}

		console.debug(options);

		return new Promise((resolve, reject) => {
			this.http.get(options.url, {}, options.headers).then(res => {
				console.log(res);
				if (res.status !=200){
					return resolve({code:-1,mes:'网络状态异常'})
				}else {
					let data:any = JSON.parse(res.data);
					return resolve(data);
				}
			}).catch(error => {
				console.log(error.status);
				console.log(error.error); // error message as string
				console.log(error.headers);
				resolve({code:-1,mes:error})
			})
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
			console.debug(options);

			return new Promise((resolve, reject) => {
				this.http.post(options.url, options.body, options.headers).then(res => {
					if (res.status !=200){
						return resolve({code:-1,mes:'网络状态异常'})
					}else {
						let data:any = JSON.parse(res.data);
						return resolve(data);
					}
				}).catch(error => {
					console.log(error.status);
					console.log(error.error); // error message as string
					console.log(error.headers);
					resolve({code:-1,mes:error})
				});
			});
		}
	}
}
