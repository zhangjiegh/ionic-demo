/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ZBar, ZBarOptions} from "@ionic-native/zbar";

@IonicPage()
@Component({
	selector: 'page-scanner',
	templateUrl: 'scanner.html',
})
export class ScannerPage implements OnInit {

	private results: string

	constructor(public navCtrl: NavController,private zbar: ZBar) {
	}

	ngOnInit() {

		let options: ZBarOptions = {
			flash: 'off',
			text_title: '扫码',
			text_instructions: '请将二维码置于红线中央',
			drawSight: true
		};

		this.zbar.scan(options)
			.then(result => {
				console.log("结果：" + result); // Scanned code
				this.results = result
			})
			.catch(error => {
				console.log(error); // Error message
				this.results = error
			});
	}

}
