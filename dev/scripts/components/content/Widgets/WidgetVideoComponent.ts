import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'WidgetVideoComponent',
    providers: [ComponentService],
    template: `
    <div class="widget post-widget">
        <div class="title-section">
            <h1><span>Featured Video</span></h1>
        </div>
        <div class="news-post video-post">
            <img alt="" src="upload/news-posts/video-sidebar.jpg">
            <a href="https://www.youtube.com/watch?v=LL59es7iy8Q" class="video-link"><i class="fa fa-play-circle-o"></i></a>
            <div class="hover-box">
                <h2><a href="single-post.html">Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. </a></h2>
                <ul class="post-tags">
                    <li><i class="fa fa-clock-o"></i>27 may 2013</li>
                </ul>
            </div>
        </div>
        <p>Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis. </p>
    </div>`
})
export class WidgetVideoComponent implements OnInit {
    @Input() public idComponent: string;
    public content = [];

    constructor(private component: ComponentService) { }


    ngOnInit() {
        this.component.getComponent(this.idComponent).subscribe(
            component => {
                this.content = [[component[0], [component[1], component[2], component[3]]], [component[4], [component[5], component[6], component[7]]]];
            },
            error => console.log(<any>error));
    }
};
