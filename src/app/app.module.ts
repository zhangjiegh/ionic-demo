import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';
import { QRScanner } from '@ionic-native/qr-scanner';
import { HTTP } from '@ionic-native/http';
import {Config} from "../config/index";

import {HttpClientModule} from '@angular/common/http';
import {HttpService} from "../service/httpService";
import {HttpService2} from "../service/httpService2";

@NgModule({
	declarations: [
		MyApp,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(MyApp),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
	],
	providers: [
		StatusBar,
		SplashScreen,
		Camera,Config,QRScanner,HttpService,HTTP,HttpClientModule,HttpService2,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
	]
})
export class AppModule {
}
