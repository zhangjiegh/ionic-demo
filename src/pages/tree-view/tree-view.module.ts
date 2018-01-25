import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TreeViewPage } from './tree-view';


@NgModule({
	declarations: [
		TreeViewPage,
	],
	imports: [
		IonicPageModule.forChild(TreeViewPage),
	],
})
export class TreeViewPageModule {
}
