import { Component, OnInit, HostListener, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';

declare var $: any;

export type FadeState = 'visible' | 'hidden';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [
    trigger('state', [
      state(
        'visible',
        style({
          opacity: '1'
        })
      ),
      state(
        'hidden',
        style({
          opacity: '0'
        })
      ),
      transition('* => visible', [animate('600ms ease-out')]),
      transition('visible => hidden', [animate('600ms ease-out')])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  conf: any;
  rowUp = false;
  state: FadeState;

  @ViewChild('wrapper') public wrapper: ElementRef;

  show = false;

  @HostListener('window:scroll', ['$event'])
  onScrollEvent(event){
    if (event.currentTarget.scrollY > 100) {
      this.rowUp = true;
      this.state = 'visible';
    } else {
      this.state = 'hidden';
    }
  }

  toggleScrolling(isOpen: boolean) {
    this.show = isOpen ? true : false;
    this.wrapper.nativeElement.parentElement.parentElement.parentElement.style.overflowY = isOpen ? 'hidden' : 'unset';
    this.wrapper.nativeElement.parentElement.parentElement.parentElement.style.position = isOpen ? 'absolute' : 'static';
  }

  ngOnInit(): void {

    // Skills section
    // $('#skills').waypoint(() => {
    //   $('.progress .progress-bar').each(function() {
    //     $(this).css('width', $(this).attr('aria-valuenow') + '%');
    //   });
    // }, { offset: '80%'} );

    // jQuery counterUp (used in Facts section)
    // $('[data-toggle="counter-up"]').counterUp({
    //   delay: 10,
    //   time: 1000
    // });

    // Porfolio isotope and filter
    const portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on( 'click', function() {
      $('#portfolio-flters li').removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

    // Clients carousel (uses the Owl Carousel library)
    // $('.clients-carousel').owlCarousel({
    //   autoplay: true,
    //   dots: true,
    //   loop: true,
    //   responsive: {
    //     0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    //   }
    // });

    // Testimonials carousel (uses the Owl Carousel library)
    // $('.testimonials-carousel').owlCarousel({
    //   autoplay: true,
    //   dots: true,
    //   loop: true,
    //   items: 1
    // });

    this.route.data.subscribe((data) => {
      this.conf = data.config;
      console.log(this.conf);
    });

  }

  animationDone(event: any) {
    if (event.fromState === 'visible' && event.toState === 'hidden') {
      this.rowUp = false;
    }
  }

}
