import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }      from '../page/home/home';
import {ScannerComponent} from "../page/scanner/scanner";

const routes: Routes = [

	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home',  component: HomeComponent },
	{ path: 'scanner',  component: ScannerComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
