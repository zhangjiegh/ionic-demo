/**
 * Created by  on 2017/12/28.
 */
import { Component, OnInit } from '@angular/core';

import {ZBar, ZBarOptions} from "@ionic-native/zbar";

@Component({
	selector: 'page-scan',
	templateUrl: 'index.html',
})
export class ScannerComponent implements OnInit {
	protected light: boolean = false;
	protected frontCamera: boolean = false;

	constructor(
		private zbar: ZBar) {}

	ngOnInit() {

		let options: ZBarOptions = {
			flash: 'off',
			text_title: '扫码',
			text_instructions: '请将二维码置于红线中央',
			// camera: "front" || "back",
			drawSight: true
		};

		this.zbar.scan(options)
			.then(result => {
				alert("结果：" + result); // Scanned code
			})
			.catch(error => {
				alert(error); // Error message
			});
	}
	public dismiss(): void {

	}
	toggleLight() {

	}
	toggleCamera() {

	}

	ionViewWillEnter() {

	}
	ionViewWillLeave() {

	}
}
