import {Component, OnInit, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {TreeData} from './treeData'

/**
 * Generated class for the TreeViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-tree-view',
	templateUrl: 'tree-view.html',
})
export class TreeViewPage implements OnInit{

	private treeData= TreeData;

	constructor(public navCtrl: NavController, public navParams: NavParams) {

	}

	ngOnInit(): void {
		// console.log(this.treeData)
	}

}
