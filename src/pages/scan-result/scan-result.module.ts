import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanResultPage } from './scan-result';

@NgModule({
  declarations: [
    ScanResultPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanResultPage),
  ],
})
export class ScanResultPageModule {}
