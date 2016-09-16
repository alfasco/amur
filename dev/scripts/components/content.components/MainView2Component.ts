import {Component, Input} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'MainView2Component',
    providers: [ComponentService],
    template: `
    <!-- carousel box -->
    <div class="carousel-box owl-wrapper">

        <div class="title-section">
            <h1><span class="world">Образ жизни</span></h1>
        </div>

        <div class="owl-carousel" data-num="2">

            <div class="item">
                <div class="news-post image-post2">
                    <div class="post-gallery">
                        <img src="upload/news-posts/im1.jpg" alt="">
                        <div class="hover-box">
                            <div class="inner-hover">
                                <h2><a href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </a></h2>
                                <ul class="post-tags">
                                    <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                                    <li><i class="fa fa-user"></i>by <a href="#">John Doe</a></li>
                                    <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                                    <li><i class="fa fa-eye"></i>872</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <ul class="list-posts">
                    <li>
                        <img src="upload/news-posts/list1.jpg" alt="">
                        <div class="post-content">
                            <h2><a href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </a></h2>
                            <ul class="post-tags">
                                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <img src="upload/news-posts/list2.jpg" alt="">
                        <div class="post-content">
                            <h2><a href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </a></h2>
                            <ul class="post-tags">
                                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <img src="upload/news-posts/list3.jpg" alt="">
                        <div class="post-content">
                            <h2><a href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </a></h2>
                            <ul class="post-tags">
                                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="item">
                <div class="news-post image-post2">
                    <div class="post-gallery">
                        <img src="upload/news-posts/im2.jpg" alt="">
                        <div class="hover-box">
                            <div class="inner-hover">
                                <h2><a href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </a></h2>
                                <ul class="post-tags">
                                    <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                                    <li><i class="fa fa-user"></i>by <a href="#">John Doe</a></li>
                                    <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                                    <li><i class="fa fa-eye"></i>872</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <ul class="list-posts">
                    <li>
                        <img src="upload/news-posts/list4.jpg" alt="">
                        <div class="post-content">
                            <h2><a href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </a></h2>
                            <ul class="post-tags">
                                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <img src="upload/news-posts/list5.jpg" alt="">
                        <div class="post-content">
                            <h2><a href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </a></h2>
                            <ul class="post-tags">
                                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <img src="upload/news-posts/list6.jpg" alt="">
                        <div class="post-content">
                            <h2><a href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </a></h2>
                            <ul class="post-tags">
                                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="item">
                <div class="news-post image-post2">
                    <div class="post-gallery">
                        <img src="upload/news-posts/im3.jpg" alt="">
                        <div class="hover-box">
                            <div class="inner-hover">
                                <h2><a href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </a></h2>
                                <ul class="post-tags">
                                    <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                                    <li><i class="fa fa-user"></i>by <a href="#">John Doe</a></li>
                                    <li><a href="#"><i class="fa fa-comments-o"></i><span>23</span></a></li>
                                    <li><i class="fa fa-eye"></i>872</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <ul class="list-posts">
                    <li>
                        <img src="upload/news-posts/list7.jpg" alt="">
                        <div class="post-content">
                            <h2><a href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </a></h2>
                            <ul class="post-tags">
                                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <img src="upload/news-posts/list8.jpg" alt="">
                        <div class="post-content">
                            <h2><a href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </a></h2>
                            <ul class="post-tags">
                                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <img src="upload/news-posts/list9.jpg" alt="">
                        <div class="post-content">
                            <h2><a href="single-post.html">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. </a></h2>
                            <ul class="post-tags">
                                <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

        </div>

    </div>
    <!-- End carousel box -->
    `,
})
export class MainView2Component implements OnInit {
    @Input() public idComponent: string;

    constructor(private component: ComponentService) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                console.log('full', this.idComponent, component)
            },
            error => console.log(<any>error));
    }
};
