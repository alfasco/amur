import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'FullSliderComponent',
    template: `
    <section class="heading-news2">

        <div class="container">

            <!-- <div class="ticker-news-box">
                <span class="breaking-news">breaking news</span>
                <ul id="js-news">
                    <li class="news-item"><span class="time-news">11:36 pm</span> <a href="#">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a> Donec odio. Quisque volutpat mattis eros... </li>
                    <li class="news-item"><span class="time-news">12:40 pm</span> <a href="#">Dëshmitarja Abrashi: E kam parë Oliverin në turmë,</a> ndërsa neve na shpëtoi “çika Mille” </li>
                    <li class="news-item"><span class="time-news">11:36 pm</span> <a href="#">Franca do të bashkëpunojë me Kosovën në fushën e shëndetësisë. </a></li>
                    <li class="news-item"><span class="time-news">01:00 am</span> <a href="#">DioGuardi, kështu e mbrojti Kosovën në Washington, </a> para serbit Vejvoda </li>
                </ul>
            </div> -->

            <div class="iso-call heading-news-box">
                <div class="image-slider snd-size">
                    <span class="top-stories">Популярное</span>
                    <ul class="bxslider">
                        <li>
                            <div class="news-post image-post">
                                <img src="upload/news-posts/h7.jpg" alt="">
                                <div class="hover-box">
                                    <div class="inner-hover">
                                        <a class="category-post sport" href="sport.html">Sport</a>
                                        <h2><a href="single-post.html">Phasellus ultrices nulla quis nibh. Quisque a lectus. </a></h2>
                                        <ul class="post-tags">
                                            <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                                            <li><i class="fa fa-user"></i>by <a href="#">John Doe</a></li>
                                            <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                                            <li><i class="fa fa-eye"></i>872</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="news-post image-post">
                                <img src="upload/news-posts/h2.jpg" alt="">
                                <div class="hover-box">
                                    <div class="inner-hover">
                                        <a class="category-post world" href="world.html">Business</a>
                                        <h2><a href="single-post.html">Franca do të bashkëpunojë me Kosovën në ekonomi. </a></h2>
                                        <ul class="post-tags">
                                            <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                                            <li><i class="fa fa-user"></i>by <a href="#">John Doe</a></li>
                                            <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                                            <li><i class="fa fa-eye"></i>872</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="news-post image-post">
                                <img src="upload/news-posts/h8.jpg" alt="">
                                <div class="hover-box">
                                    <div class="inner-hover">
                                        <a class="category-post travel" href="travel.html">travel</a>
                                        <h2><a href="single-post.html">Porti i Durresit më i vizituari në ballkan kete vit. </a></h2>
                                        <ul class="post-tags">
                                            <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                                            <li><i class="fa fa-user"></i>by <a href="#">John Doe</a></li>
                                            <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                                            <li><i class="fa fa-eye"></i>872</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="news-post image-post default-size">
                    <img src="upload/news-posts/h1.jpg" alt="">
                    <div class="hover-box">
                        <div class="inner-hover">
                            <a class="category-post travel" href="travel.html">travel</a>
                            <h2><a href="single-post.html">Lorem ipsum dolor sit amet, consectetuer</a></h2>
                            <ul class="post-tags">
                                <li><i class="fa fa-clock-o"></i><span>27 may 2013</span></li>
                                <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                            </ul>
                            <p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
                        </div>
                    </div>
                </div>

                <div class="news-post image-post">
                    <img src="upload/news-posts/h3.jpg" alt="">
                    <div class="hover-box">
                        <div class="inner-hover">
                            <a class="category-post food" href="food.html">food &amp; Health</a>
                            <h2><a href="single-post.html">Nullam malesuada erat ut turpis.</a></h2>
                            <ul class="post-tags">
                                <li><i class="fa fa-clock-o"></i><span>27 may 2013</span></li>
                                <li><a href="#"><i class="fa fa-comments-o"></i><span>20</span></a></li>
                            </ul>
                            <p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
                        </div>
                    </div>
                </div>

                <div class="news-post image-post">
                    <img src="upload/news-posts/h5.jpg" alt="">
                    <div class="hover-box">
                        <div class="inner-hover">
                            <a class="category-post sport" href="sport.html">Sport</a>
                            <h2><a href="single-post.html">Donec odio. </a></h2>
                            <ul class="post-tags">
                                <li><i class="fa fa-clock-o"></i><span>27 may 2013</span></li>
                                <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                            </ul>
                            <p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
                        </div>
                    </div>
                </div>

                <div class="news-post image-post">
                    <img src="upload/news-posts/h6.jpg" alt="">
                    <div class="hover-box">
                        <div class="inner-hover">
                            <a class="category-post fashion" href="fashion.html">fashion</a>
                            <h2><a href="single-post.html">Quisque volutpat mattis </a></h2>
                            <ul class="post-tags">
                                <li><i class="fa fa-clock-o"></i><span>27 may 2013</span></li>
                                <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                            </ul>
                            <p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
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

    constructor(private component: ComponentService) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {

            },
            error => console.log(<any>error));

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
};
