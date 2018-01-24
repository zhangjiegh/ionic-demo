import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Config} from "../../config/index";
import {HttpService2} from "../../service/httpService2";

/**
 * Generated class for the AjaxPage page.
 *
 *
 *
 */

@IonicPage()
@Component({
  selector: 'page-ajax',
  templateUrl: 'ajax.html',
})
export class AjaxPage {
	private account:string;
	private password:string;
	private sessionID:string;
	private result:any;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private config:Config,
		private http:HttpService2,
		// private headers:HttpHeaders
	) {
		this.account=this.config.user.account;
		this.password=this.config.user.password;

	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad AjaxPage');
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

		let restFulPotion = {
			host: this.config.rest.host,
			port: this.config.rest.port,
			path: this.config.rest.devicePage+'?sessionid='+this.sessionID,
		};

		let data:any = await this.http.doGet(restFulPotion);


		this.result =JSON.stringify(data);
	}
}
