import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HomeComponent} from "../page/home/index";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

	rootPage: any = HomeComponent;
	// 启动界面 的相关信息
	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
}
