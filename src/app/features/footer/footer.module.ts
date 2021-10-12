import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer.component';
import { DirectivesModule } from 'src/app/directives/directives.module';

@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FooterComponent
      }
    ]),
    DirectivesModule
  ]
})
export class FooterModule { }
