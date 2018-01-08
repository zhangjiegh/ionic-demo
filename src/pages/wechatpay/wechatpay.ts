import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the WechatpayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare let Wechat:any;
@IonicPage()
@Component({
	selector: 'page-wechatpay',
	templateUrl: 'wechatpay.html',
})
export class WechatpayPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {

	}

	installed(){
		Wechat.isInstalled(function (installed) {
			console.log(installed);
			alert("Wechat installed: " + (installed ? "Yes" : "No"));
		}, function (reason) {
			console.log(reason);
			alert("Failed: " + reason);
		});
	}

	auth(){
		var scope = "snsapi_userinfo",
			state = "_" + (+new Date());
		Wechat.auth(scope, state, function (response) {
			// you may use response.code to get the access token.
			console.log(JSON.stringify(response));
			alert(JSON.stringify(response));
		}, function (reason) {
			console.log("Failed: " + reason);
			alert("Failed: " + reason);
		});
	}
}
