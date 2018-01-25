import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})
export class HomePage {
	pages: Array<{title: string, component: any}>;

	constructor(public navCtrl: NavController) {
		// used for an example of ngFor and navigation
		this.pages = [
			{title: '微信支付', component: 'WechatpayPage'},
			{title: '扫码', component: 'ScannerPage'},
			{title: '通过native层解决session', component: 'LoginPage'},
			{title: '通过url解决session', component: 'AjaxPage'},
		];
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.navCtrl.push(page.component)
		//this.nav.setRoot(page.component);
	}
}
