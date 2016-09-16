import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'MainGalleryComponent',
    template: `
    <div class="carousel-box owl-wrapper">

        <div class="title-section">
            <h1><span>Галерея</span></h1>
        </div>

        <div class="owl-carousel" data-num="3">

            <div class="item news-post image-post3">
                <img src="upload/news-posts/gal1.jpg" alt="">
                <div class="hover-box">
                    <h2><a href="single-post.html">Donec odio. Quisque volutpat mattis eros.</a></h2>
                    <ul class="post-tags">
                        <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                    </ul>
                </div>
            </div>

            <div class="item news-post image-post3">
                <img src="upload/news-posts/gal2.jpg" alt="">
                <div class="hover-box">
                    <h2><a href="single-post.html">Nullam malesuada erat ut turpis. </a></h2>
                    <ul class="post-tags">
                        <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                    </ul>
                </div>
            </div>

            <div class="item news-post image-post3">
                <img src="upload/news-posts/gal3.jpg" alt="">
                <div class="hover-box">
                    <h2><a href="single-post.html">Suspendisse urna nibh.</a></h2>
                    <ul class="post-tags">
                        <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                    </ul>
                </div>
            </div>

            <div class="item news-post image-post3">
                <img src="upload/news-posts/gal4.jpg" alt="">
                <div class="hover-box">
                    <h2><a href="single-post.html">Donec nec justo eget felis facilisis fermentum. Aliquam </a></h2>
                    <ul class="post-tags">
                        <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                    </ul>
                </div>
            </div>

            <div class="item news-post image-post3">
                <img src="upload/news-posts/gal1.jpg" alt="">
                <div class="hover-box">
                    <h2><a href="single-post.html">Donec odio. Quisque volutpat mattis eros.</a></h2>
                    <ul class="post-tags">
                        <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    `,
})
export class MainGalleryComponent implements OnInit {
    @Input() public idComponent: string;

    ngOnInit() {
        /*-------------------------------------------------*/
        /* =  OWL carousell - featured post, video post, gallery posts
        /*-------------------------------------------------*/
        try {
            var owlWrap = $('.owl-wrapper');

            if (owlWrap.length > 0) {

                if (jQuery().owlCarousel) {
                    owlWrap.each(function() {

                        var carousel = $(this).find('.owl-carousel'),
                            dataNum = $(this).find('.owl-carousel').attr('data-num'),
                            dataNum2,
                            dataNum3;

                        if (dataNum == 1) {
                            dataNum2 = 1;
                            dataNum3 = 1;
                        } else if (dataNum == 2) {
                            dataNum2 = 2;
                            dataNum3 = dataNum - 1;
                        } else {
                            dataNum2 = dataNum - 1;
                            dataNum3 = dataNum - 2;
                        }

                        carousel.owlCarousel({
                            autoPlay: 10000,
                            navigation: true,
                            items: dataNum,
                            itemsDesktop: [1199, dataNum2],
                            itemsDesktopSmall: [979, dataNum3]
                        });

                    });
                }
            }

        } catch (err) {

        }
    }
};
