/**
 * Created by jie on 2017/12/28.
 */
import {Component, OnInit} from '@angular/core';

import {ZBar, ZBarOptions} from "@ionic-native/zbar";
import {NavController} from "ionic-angular";

@Component({
	selector: 'page-scan',
	templateUrl: 'index.html',
})
export class ScannerComponent implements OnInit {

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
