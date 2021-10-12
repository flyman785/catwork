import { Directive, HostListener } from '@angular/core';

declare var $: any;

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[hostclick]'
})
export class HostlistClickDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  public onClick(event: any) {
    event.preventDefault();
    if (event.target.pathname === undefined) {
      event.target.pathname = event.target.parentElement.pathname;
      event.target.hostname = event.target.parentElement.hostname;
      event.target.hash = event.target.parentElement.hash;
    }
    if (event.target.pathname === '/') {
      event.target.pathname = '/index';
    }
    if (location.pathname.replace(/^\//, '') === event.target.pathname.replace(/^\//, '') && location.hostname === event.target.hostname) {
      const target = $(event.target.hash);
      if (target.length) {
        // tslint:disable-next-line:variable-name
        let top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(event.target).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(event.target).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }

        return false;
      }
    }
  }
}
