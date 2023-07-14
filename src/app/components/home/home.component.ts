import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedTab: string = 'home';

  constructor() { }

  ngOnInit(): void {

    (function ($) {
      $(document).ready(function () {
        // image link in post content
        $('.magnific-popup').each(function () {
          $('.magnific-popup').magnificPopup({
            type: 'image',
            gallery: {
              enabled: true
            },
            image: {
              titleSrc: function(item: any) {
                return item.el.attr('title') + '<small>by Marsel</small>';
              }
            },

            closeBtnInside: false,

            mainClass: 'mfp-with-zoom',

            zoom: {
              enabled: true,
          
              duration: 200, // duration of the effect, in milliseconds
              easing: 'ease-in-out', // CSS transition easing function
             
            }
          });

        });


      });

    })(jQuery);

  }

  selectTab(tab: string, event: Event): void {
    event.preventDefault();
    this.selectedTab = tab;
  }

}
