import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Config} from "../../config/index";
import {HttpService} from "../../service/httpService";



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
	providers:[]
})
export class LoginPage {

	private account:string;

	private password:string;

	private sessionID:string;

	private result:any;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private config:Config,
		private http:HttpService,
	) {
		this.account=this.config.user.account;
		this.password=this.config.user.password;

	}


	async login() {

		let body = {
			account:this.account,
			password:this.password
		};

		let restFulPotion = {
			host: this.config.rest.host,
			port: this.config.rest.port,
			path: this.config.rest.loginUrl,
			body: body,
		};

		let data:any= await this.http.doPost(restFulPotion);

		this.result =JSON.stringify(data);
		if (data.code=='0'){
			this.sessionID = data.sessionID;
			window.localStorage.setItem('account',this.account);
			window.localStorage.setItem('password',this.password);

		}

	}

	async getReq() {

		// TODO no test
		var a =window.localStorage.getItem('account');
		var b=window.localStorage.getItem('password');

		console.log("====================");
		console.log(a);
		console.log(b);
		console.log("====================");

		let restFulPotion = {
			host: this.config.rest.host,
			port: this.config.rest.port,
			path: this.config.rest.devicePage,
		};

		let headers:any={
			sessionID:this.sessionID
		};

		let data:any = await this.http.doGet(restFulPotion,headers);
		this.result =JSON.stringify(data);
	}

}
