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

	private sessionID:string;

	private result:any;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private config:Config,
		private http:HttpService,
	) {
	}


	async login() {

		let body = this.config.user;
		let restFulPotion = {
			host: this.config.rest.host,
			port: this.config.rest.port,
			path: this.config.rest.loginUrl,
			body: body,
		};

		let data:any= await this.http.doPost(restFulPotion);

		this.result =JSON.stringify(data);
		this.sessionID = data.sessionID;

	}

	async getReq() {
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
