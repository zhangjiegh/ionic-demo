import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WechatpayPage } from './wechatpay';

@NgModule({
  declarations: [
    WechatpayPage,
  ],
  imports: [
    IonicPageModule.forChild(WechatpayPage),
  ],
})
export class WechatpayPageModule {}
