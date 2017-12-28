import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AppRoutingModule}     from './router/index';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';


import { HomeComponent }      from './page/home/index';
import {ScannerComponent} from "./page/scanner/index";

@NgModule({
	declarations: [
		MyApp,
		HomeComponent,
		ScannerComponent
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		AppRoutingModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
	]
})
export class AppModule {
}
