import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ServicesComponent } from './services.component';

@NgModule({
  declarations: [ServicesComponent],
  exports: [ServicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ServicesComponent
      }
    ])
  ]
})
export class ServicesModule { }
