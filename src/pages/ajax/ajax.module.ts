import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjaxPage } from './ajax';

@NgModule({
  declarations: [
    AjaxPage,
  ],
  imports: [
    IonicPageModule.forChild(AjaxPage),
  ],
})
export class AjaxPageModule {}
