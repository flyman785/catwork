import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';

import { IndexComponent } from './index.component';
import { HeaderModule } from 'src/app/features/header/header.module';
import { CarouselModule } from '../../features/carousel/carousel.module';
import { ServicesModule } from 'src/app/features/services/services.module';
import { ContactModule } from 'src/app/features/contact/contact.module';
import { FooterModule } from 'src/app/features/footer/footer.module';

import { DirectivesModule } from 'src/app/directives/directives.module';
import { MaterialModule } from 'src/app/material-module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    HeaderModule,
    CarouselModule,
    ServicesModule,
    ContactModule,
    FooterModule,
    DirectivesModule,
    MaterialModule
  ]
})
export class IndexModule { }
