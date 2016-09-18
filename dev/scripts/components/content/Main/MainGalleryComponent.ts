import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'MainGalleryComponent',
    providers: [ComponentService],
    template: `
    <div class="carousel-box owl-wrapper">

        <div class="title-section">
            <h1><span>Галерея</span></h1>
        </div>

        <div class="owl-carousel maingallery" data-num="3">

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
    </div>`
})
export class MainGalleryComponent implements OnInit {
    @Input() public idComponent: string;
    content: any;

    constructor(private component: ComponentService) {
        this.content = []
    }

    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                let interval = setInterval(() => {
                    if ($('.maingallery .news-post')) {
                        clearInterval(interval);

                        var carousel = $('.maingallery'),
                            dataNum = $('.maingallery').attr('data-num'),
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
                    }
                }, 100)
            },
            error => console.log(<any>error));
    }
};
