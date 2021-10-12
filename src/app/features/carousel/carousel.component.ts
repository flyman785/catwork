import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import * as _ from 'lodash';

declare var $: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent{

  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  // tslint:disable-next-line:no-input-rename
  @Input('carousel') cards: any[];

  sanitize(background: string) {
    return this.domSanitizer.bypassSecurityTrustStyle('url(' + background + ') no-repeat center center / cover');
  }
}
