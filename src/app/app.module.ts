import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import { Camera } from '@ionic-native/camera';


import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import { ZBar } from '@ionic-native/zbar';

import {ScannerComponent} from "../page/scanner/index";
import {WechatPayComponent} from "../page/wechatpay/index";
import {HomeComponent} from "../page/home/index";


@NgModule({
	declarations: [
		MyApp,
		ScannerComponent,
		WechatPayComponent,
		HomeComponent,
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		ScannerComponent,
		WechatPayComponent,
		HomeComponent,
	],
	providers: [
		StatusBar,
		SplashScreen,
		Camera,ZBar,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
	]
})
export class AppModule {
}
