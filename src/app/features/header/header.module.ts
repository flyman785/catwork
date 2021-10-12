import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { DirectivesModule } from 'src/app/directives/directives.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HeaderComponent
      }
    ]),
    DirectivesModule
  ]
})
export class HeaderModule { }
