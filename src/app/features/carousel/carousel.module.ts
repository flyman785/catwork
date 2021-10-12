import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CarouselComponent
      }
    ]),
    DirectivesModule,
    NgbModule
  ]
})
export class CarouselModule { }
