import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { DirectivesModule } from 'src/app/directives/directives.module';

@NgModule({
  declarations: [ContactComponent],
  exports: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactComponent
      }
    ]),
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
