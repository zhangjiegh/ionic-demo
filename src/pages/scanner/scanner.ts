///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import {Component} from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@IonicPage()
@Component({
	selector: 'page-scanner',
	templateUrl: 'scanner.html',
})
export class ScannerPage {

	// private results: string;

	private frontCamera: boolean = false;
	private light: boolean = false;

	constructor(public navCtrl: NavController,private qrScanner: QRScanner) {
	}

	ionViewDidLoad() {
		/*this.navCtrl.push('ScanResultPage',{
			url:'123'
		});*/

		this.qrScanner.prepare()
			.then((status: QRScannerStatus) => {

			console.log(JSON.stringify(status));

				if (status.authorized) {
					let scanSub = this.qrScanner.scan().subscribe((text: string) => {
						// alert(text);

						this.navCtrl.push('ScanResultPage',{
							url:text
						});

						this.qrScanner.hide(); // hide camera preview
						scanSub.unsubscribe(); // stop scanning
					});
					this.qrScanner.show();

				} else if (status.denied) {
				} else {
				}
			})
			.catch((e: any) => {
				console.log('Error is123', e)
			});
	}


	toggleLight() {
		this.light = !this.light;
		if (this.light) {
			this.qrScanner.disableLight();
		} else {
			this.qrScanner.enableLight();

		}
	}

	toggleCamera() {
		this.frontCamera = !this.frontCamera;
		if (this.frontCamera) {
			this.qrScanner.useBackCamera();
		} else {
			this.qrScanner.useFrontCamera();
		}
	}

}
