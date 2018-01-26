import {Component, Input} from "@angular/core";

@Component({
	selector: 'item-view',
	template:`<li>
		<div [ngClass]="{bold:open}" (click)="toggle()">{{ item.name}}
			<span *ngIf="isFolder">  {{open?'-' : '+'}}</span>
			<!--<span (click)="del(i)">  删除 {{index}}</span>-->
		</div>
		<ul *ngIf="isFolder && open">
			<item-view *ngFor="let it of item.children;let i = index" [item]="it" [i]="i" [parent]="item" class="item"></item-view>
			<li class="add" (click)="addChild()">+</li>
		</ul>
	</li>`
})
export class ItemView{

	@Input() item:any;
	@Input() i:any;
	@Input() parent:any;

	private open:boolean =false;

	// 识别是否有下级
	isFolder(){
		return this.item.children &&
			this.item.children.length
	}

	// 展开子菜单
	toggle(){
		if (this.isFolder) {
			this.open = !this.open
		}
	}

	addChild(){
		if (this.item.children ==undefined){
			this.item.children=[];
		}

		this.item.children.push({
			name: 'new stuff'
		})
	}

	del(i){
		this.parent.children.splice(i,1);
	}
}
