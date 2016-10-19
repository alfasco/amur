import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'FullSliderComponent',
    template: `
    <section class="heading-news2">

        <div class="container" *ngIf="slider">

          <div class="ticker-news-box">
            <span class="breaking-news">Срочные новости</span>
            <ul id="js-news">
              <li class="news-item" *ngFor="let news of breaking"><span class="time-news">{{out(news, 'time', 'value')}}</span>  <a href="{{news.id}}">{{out(news, 'title', 'value')}}</a></li>
            </ul>
          </div>

            <div class="iso-call heading-news-box">
                <div class="image-slider snd-size">
                    <span class="top-stories">Популярное</span>
                    <ul class="bxslider">
                        <li *ngFor="let cont of slider">
                            <div class="news-post image-post fullslider">
                                <img src="{{out(cont, 'img', 'value')}}" alt="">
                                <div class="hover-box">
                                    <div class="inner-hover">
                                        <!-- <a class="category-post sport" href="sport.html">{{cont.value.subsection[0].value}}</a>-->
                                        <h2><a (click)="routing(cont.id)">{{out(cont, 'title', 'value')}}</a></h2>
                                        <ul class="post-tags">
                                        <li><i class="fa fa-clock-o"></i>{{out(cont,'date','value')}}</li>
                                        <li><i class="fa fa-eye"></i>{{out(cont,'counter','value')}}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="news-post image-post default-size" *ngFor="let cont of list">
                    <img src="{{out(cont[0], 'img', 'value')}}" alt="">
                    <div class="hover-box">
                        <div class="inner-hover">
                          <!--   <a class="category-post travel" href="travel.html">{{cont[0].value.subsection[0].value}}</a>-->
                            <h2><a (click)="routing(cont[0].id)">{{out(cont[0], 'title', 'value')}}</a></h2>
                            <ul class="post-tags">
                                <li><i class="fa fa-clock-o"></i><span>{{out(cont[0], 'date', 'value')}}</span></li>
                                <li><i class="fa fa-eye"></i><span>{{out(cont[0], 'counter', 'value')}}</span></li>
                            </ul>
                            <p>{{out(cont[0], 'description', 'value')}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div *ngIf="!slider" style="padding-top: 20px">
          <div class="bubblingG">
              <span id="bubblingG_1"> </span>
              <span id="bubblingG_2"> </span>
              <span id="bubblingG_3"> </span>
          </div>
        </div>

    </section>
    `,
    providers: [ComponentService]
})
export class FullSliderComponent implements OnInit {
    @Input() public idComponent: string;

    slider: any;
    list: any;
    breaking: any;

    constructor(private component: ComponentService, private router: Router) { }


    ngOnInit() {
        this.component.getComponent('FullSliderComponent').subscribe(
            component => {
                console.log(component)
                this.slider = component.content[0];
                if (this.slider) {
                    for (let i in this.slider) {
                        this.slider[i].value.img[0].value = 'http://portamur.alfasco.ru' + this.slider[i].value.img[0].value.replace(/\/images\//i, '/images/586x490/')
                    }
                }

                this.list = component.content.slice(1);
                this.breaking = this.list[4];
                this.list = this.list.splice(0, 4);

                if (this.list) {
                    for (let i in this.list) {
                        this.list[i][0].value.img[0].value = 'http://portamur.alfasco.ru' + this.list[i][0].value.img[0].value.replace(/\/images\//i, '/images/293x245/')
                    }
                }

                let interval = setInterval(() => {
                    if ($('.bxslider .fullslider')) {
                        clearInterval(interval);

                        /*=============================================>>>>>
                        = kkkk =
                        ===============================================>>>>>*/

                        var winDow = $(window);
                        // Needed variables
                        var $container = $('.iso-call');
                        var $filter = $('.filter');

                        try {
                            $container.imagesLoaded(function() {
                                // init
                                winDow.trigger('resize');
                                $container.isotope({
                                    filter: '*',
                                    layoutMode: 'masonry',
                                    itemSelector: '.iso-call > div',
                                    masonry: {
                                        columnWidth: '.default-size'
                                    },
                                    animationOptions: {
                                        duration: 750,
                                        easing: 'linear'
                                    }
                                });
                            });
                        } catch (err) {
                        }

                        winDow.on('resize', function() {
                            var selector = $filter.find('a.active').attr('data-filter');

                            try {
                                $container.isotope({
                                    filter: selector,
                                    animationOptions: {
                                        duration: 750,
                                        easing: 'linear',
                                        queue: false,
                                    }
                                });
                            } catch (err) {
                            }
                            return false;
                        });

                        // Isotope Filter
                        $filter.find('a').on('click', function() {
                            var selector = $(this).attr('data-filter');

                            try {
                                $container.isotope({
                                    filter: selector,
                                    animationOptions: {
                                        duration: 750,
                                        easing: 'linear',
                                        queue: false,
                                    }
                                });
                            } catch (err) {

                            }
                            return false;
                        });

                        /*= End of kkkk =*/
                        /*=============================================<<<<<
                        */

                        /*=============================================>>>>>
                        = bxSlider =
                        ===============================================>>>>>*/

                        try {
                            $('.bxslider').bxSlider({
                                mode: 'fade',
                                auto: true
                            });

                            $('.big-bxslider').bxSlider({
                                mode: 'horizontal',
                                auto: true
                            });

                            $('.slider-call').bxSlider({
                                pagerCustom: '#bx-pager'
                            });

                            $('.slider-call2').bxSlider({
                                pagerCustom: '#bx-pager2'
                            });


                        } catch (err) {
                        };

                        /*= End of bxSlider =*/
                        /*=============================================<<<<<*/

                        try {
                            $('#js-news').ticker({
                                speed: 0.20, // The speed of the reveal
                                controls: true, // Whether or not to show the jQuery News Ticker controls
                                titleText: '', // To remove the title set this to an empty String
                                displayType: 'reveal', // Animation type - current options are 'reveal' or 'fade'
                                direction: 'ltr', // Ticker direction - current options are 'ltr' or 'rtl'
                                pauseOnItems: 2000, // The pause on a news item before being replaced
                                fadeInSpeed: 600, // Speed of fade in animation
                                fadeOutSpeed: 300 // Speed of fade out animation
                            });
                        } catch (err) { }
                    }
                }, 150)
            },
            error => console.log(<any>error));
    }

    out(object, field, value) {
        if (object) {
            if (object.value) {
                if (object.value[field]) {
                    if (object.value[field][0]) {
                        if (object.value[field][0][value]) {
                            return object.value[field][0][value]
                        }
                    }
                }
            }
        }
    }

    routing(url: any) {
        this.router.navigate(['/' + url])
    }
};
