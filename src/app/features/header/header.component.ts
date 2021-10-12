import { Component, OnInit, Input, HostListener } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line:no-input-rename
  @Input('listMenu') listMenu: any[];

  @HostListener('window:scroll', ['$event'])
  onScrollEvent(event){
    if (event.currentTarget.scrollY > 100) {
      $('#header').addClass('header-scrolled');
      $('#mobile-nav-toggle').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
      $('#mobile-nav-toggle').removeClass('header-scrolled');
    }
  }

  ngOnInit(): void {

    // Initiate superfish on nav menu
    $('.nav-menu').superfish({
      animation: {
        opacity: 'show'
      },
      speed: 400
    });

  }

  openMenu() {
    $('body').toggleClass('mobile-nav-active');
    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
    $('#mobile-body-overly').toggle();
  }
}
