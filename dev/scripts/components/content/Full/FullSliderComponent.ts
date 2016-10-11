import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

import {Router} from '@angular/router';

@Component({
    selector: 'FullSliderComponent',
    template: `
    <section class="heading-news2">

        <div class="container">
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
                                        <li><i class="fa fa-user"></i>{{out(cont,'owner','value')}}</li>
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

    </section>
    `,
    providers: [ComponentService]
})
export class FullSliderComponent implements OnInit {
    @Input() public idComponent: string;

    slider: any;
    list: any;

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
