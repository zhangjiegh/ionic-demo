import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhotoUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 *
 *
 * html5 no test
 * <input type="file" accept="video/*;capture=camcorder">
 <input type="file" accept="audio/*;capture=microphone">
 <input type="file" accept="image/*;capture=camera">直接调用相机（测试安卓可以，iphone还是有相册）
 <input type="file" accept="image/*" />调用相机 图片或者相册
 <input type="file" multiple accept="image/*" />调用相册
 */

@IonicPage()
@Component({
	selector: 'page-photo-upload',
	templateUrl: 'photo-upload.html',
})
export class PhotoUploadPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PhotoUploadPage');
	}

	file(){
		console.log("hello world")
	}
}
