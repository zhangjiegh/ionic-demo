import {Injectable} from "@angular/core";
/**
 * Created by jie on 2018/1/8.
 */

@Injectable()
export class Config {

	http: any={
		host: "127.0.0.1",
		port: 80,
		httpType: "http",
		postType: "json"
	};

	user: any={
		account: "",
		password: ""
	};

	rest: any={
		host: '192.168.3.20',
		port: '9913',
		loginUrl: '/member/login1',
		devicePage: '/device/page',
		jobPage: '/job/page',
	}
}
