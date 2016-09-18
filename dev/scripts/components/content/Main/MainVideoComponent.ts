import {Component, Input} from '@angular/core';

@Component({
    selector: 'MainVideoComponent',
    template: `
    <div class="grid-box">
        <div class="title-section">
            <h1><span class="world">Видео</span></h1>
        </div>

        <div class="row">
            <div class="col-md-4">
                <div class="news-post video-post">
                    <img alt="" src="upload/news-posts/video1.jpg">
                    <a href="https://www.youtube.com/watch?v=LL59es7iy8Q" class="video-link"><i class="fa fa-play-circle-o"></i></a>
                    <div class="hover-box">
                        <h2><a href="single-post.html">Donec odio. Quisque volutpat mattis eros.</a></h2>
                        <ul class="post-tags">
                            <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="news-post video-post">
                    <img alt="" src="upload/news-posts/video2.jpg">
                    <a href="https://www.youtube.com/watch?v=LL59es7iy8Q" class="video-link"><i class="fa fa-play-circle-o"></i></a>
                    <div class="hover-box">
                        <h2><a href="single-post.html">Nullam malesuada erat ut turpis. </a></h2>
                        <ul class="post-tags">
                            <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="news-post video-post">
                    <img alt="" src="upload/news-posts/video3.jpg">
                    <a href="https://www.youtube.com/watch?v=LL59es7iy8Q" class="video-link"><i class="fa fa-play-circle-o"></i></a>
                    <div class="hover-box">
                        <h2><a href="single-post.html">Suspendisse urna.</a></h2>
                        <ul class="post-tags">
                            <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <div class="news-post video-post">
                    <img alt="" src="upload/news-posts/video4.jpg">
                    <a href="https://www.youtube.com/watch?v=LL59es7iy8Q" class="video-link"><i class="fa fa-play-circle-o"></i></a>
                    <div class="hover-box">
                        <h2><a href="single-post.html">Donec nec justo eget felis facilisis fermentum. </a></h2>
                        <ul class="post-tags">
                            <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="news-post video-post">
                    <img alt="" src="upload/news-posts/video1.jpg">
                    <a href="https://www.youtube.com/watch?v=LL59es7iy8Q" class="video-link"><i class="fa fa-play-circle-o"></i></a>
                    <div class="hover-box">
                        <h2><a href="single-post.html">Aliquam porttitor mauris sit amet orci. </a></h2>
                        <ul class="post-tags">
                            <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="news-post video-post">
                    <img alt="" src="upload/news-posts/video2.jpg">
                    <a href="https://www.youtube.com/watch?v=LL59es7iy8Q" class="video-link"><i class="fa fa-play-circle-o"></i></a>
                    <div class="hover-box">
                        <h2><a href="single-post.html">Morbi in sem quis dui placerat ornare.</a></h2>
                        <ul class="post-tags">
                            <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>`
})
export class MainVideoComponent {
    @Input() public idComponent: string;
};
