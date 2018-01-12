import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScanResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-scan-result',
	templateUrl: 'scan-result.html',
})
export class ScanResultPage {

	private result:string;

	constructor(public navCtrl: NavController, public navParams: NavParams) {

		this.result = navParams.get('url');
	}

	ionViewDidLoad() {

	}

}
