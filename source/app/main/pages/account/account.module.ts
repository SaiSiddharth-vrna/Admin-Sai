import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';

import { RouterModule } from '@angular/router';
import { ImageUploadCropModule } from 'src/app/components/image-upload-crop/image-upload-crop.module';



const accountRouting = RouterModule.forChild([
  {
    path: '',
    component: AccountComponent
  }
]);

@NgModule({
  declarations: [
    AccountComponent,
    
  ],
  imports: [
    CommonModule,
    accountRouting,
    ImageUploadCropModule
    
    
    
  ]
})
export class AccountModule { }
