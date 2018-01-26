
import {NgModule} from "@angular/core";
import {ItemView} from "./item-view";
import {IonicPageModule} from "ionic-angular";


@NgModule({
	declarations: [
		ItemView,
	],
	imports: [
		IonicPageModule.forChild(ItemView),
	],
})
export class ItemViewModule {
}
