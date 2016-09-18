import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component';

@Component({
    selector: 'WidgetCommentsComponent',
    providers: [ComponentService],
    template: `
    <div class="widget recent-comments-widget">
        <div class="title-section">
            <h1><span>Recent Comments</span></h1>
        </div>
        <div class="owl-wrapper">
            <div class="owl-carousel" data-num="1">
                <div class="item">
                    <ul class="comment-list">
                        <li>
                            <img src="upload/news-posts/avatar1.jpg" alt="">
                            <div class="comment-content">
                                <p class="main-message">
                                    Donec nec justo eget felis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
                                </p>
                                <p>Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                                <span><i class="fa fa-user"></i>by John Doe</span>
                            </div>
                        </li>
                        <li>
                            <img src="upload/news-posts/avatar2.jpg" alt="">
                            <div class="comment-content">
                                <p class="main-message">
                                    Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
                                </p>
                                <p>Donec nec justo eget felis facilisis fermentum. </p>
                                <span><i class="fa fa-user"></i>by John Doe</span>
                            </div>
                        </li>
                        <li>
                            <img src="upload/news-posts/avatar3.jpg" alt="">
                            <div class="comment-content">
                                <p class="main-message">
                                    Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
                                </p>
                                <p>Aliquam porttitor mauris sit amet orci. </p>
                                <span><i class="fa fa-user"></i>by John Doe</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="item">
                    <ul class="comment-list">
                        <li>
                            <img src="upload/news-posts/avatar3.jpg" alt="">
                            <div class="comment-content">
                                <p class="main-message">
                                    Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
                                </p>
                                <p>Aliquam porttitor mauris sit amet orci. </p>
                                <span><i class="fa fa-user"></i>by John Doe</span>
                            </div>
                        </li>
                        <li>
                            <img src="upload/news-posts/avatar1.jpg" alt="">
                            <div class="comment-content">
                                <p class="main-message">
                                    Donec nec justo eget felis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
                                </p>
                                <p>Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                                <span><i class="fa fa-user"></i>by John Doe</span>
                            </div>
                        </li>
                        <li>
                            <img src="upload/news-posts/avatar2.jpg" alt="">
                            <div class="comment-content">
                                <p class="main-message">
                                    Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
                                </p>
                                <p>Donec nec justo eget felis facilisis fermentum. </p>
                                <span><i class="fa fa-user"></i>by John Doe</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
})
export class WidgetCommentsComponent implements OnInit {
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
