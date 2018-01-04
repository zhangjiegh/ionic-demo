/**
 * Created by jie on 2017/12/28.
 */

import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {ScannerComponent} from "../scanner/index";
import {WechatPayComponent} from "../wechatpay/index";

@Component({
	selector: 'wechatpay',
	templateUrl: './index.html',
})
export class HomeComponent{

	pages: Array<{title: string, component: any}>;

	constructor( public navCtrl: NavController) {

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: '扫码', component: ScannerComponent },
			{ title: '微信支付', component: WechatPayComponent }
		];

	}


	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.navCtrl.push(page.component)
		//this.nav.setRoot(page.component);
	}
}
