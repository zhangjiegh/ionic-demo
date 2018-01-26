import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TreeViewPage } from './tree-view';
import {ItemView} from "./item-view";


@NgModule({
	declarations: [
		TreeViewPage,
		ItemView,
	],
	imports: [
		IonicPageModule.forChild(TreeViewPage),
	],
})
export class TreeViewPageModule {
}
