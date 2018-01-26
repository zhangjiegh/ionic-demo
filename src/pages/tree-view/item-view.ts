import {Component, Input, OnInit} from "@angular/core";

@Component({
	selector: 'item-view',
	template:`<li>
		<div>{{ item.name}}</div>
		<ul>
			<item *ngFor="let items of item.children" [item]="items"></item>
		</ul>
	</li>`
})
export class ItemView implements OnInit{

	@Input() item:any;

	ngOnInit(): void {
		console.log(this.item);
	}
}
